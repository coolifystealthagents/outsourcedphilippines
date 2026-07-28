#!/usr/bin/env python3
import json
import re
import sys
from html import unescape
from html.parser import HTMLParser
from pathlib import Path

EXPECTED_TITLE = 'Philippines outsourced staff payment change verification checklist'
EXPECTED_CANONICAL = 'https://outsourcedphilippines.com/blog/philippines-outsourced-staff-payment-change-verification-checklist'
EXPECTED_MARKER = 'ph-payment-change-verification-v1'
EXPECTED_QUOTE = 'Use secondary channels and/or two-factor authentication to verify requests for changes in account information.'
WORD_RE = re.compile(r"\b[\w]+(?:[-'][\w]+)*\b", re.UNICODE)

class AuditParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.skip = 0
        self.article_depth = 0
        self.article_text = []
        self.document_text = []
        self.h1 = []
        self.title = []
        self.narratives = []
        self.current_narrative = None
        self.hrefs = []
        self.canonical = None
        self.jsonld = []
        self.current_jsonld = None
        self.counts = {'banners': 0, 'tables': 0, 'evidence_charts': 0, 'payment_graphics': 0, 'methods_notes': 0, 'source_items': 0, 'source_numbers': 0, 'blockquotes': 0}
        self.in_source_box = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        classes = set(attrs.get('class', '').split())
        self.stack.append((tag, classes))
        if tag in ('script', 'style'):
            self.skip += 1
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.current_jsonld = []
        if tag == 'article' and attrs.get('data-article-marker') == EXPECTED_MARKER:
            self.article_depth = len(self.stack)
        if tag == 'a' and attrs.get('href'):
            self.hrefs.append(attrs['href'])
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonical = attrs.get('href')
        if 'article-banner' in classes:
            self.counts['banners'] += 1
        if tag == 'table' and self.article_depth:
            self.counts['tables'] += 1
        if tag == 'blockquote' and self.article_depth:
            self.counts['blockquotes'] += 1
        if tag == 'svg' and 'evidence-chart' in classes:
            self.counts['evidence_charts'] += 1
        if tag == 'svg' and 'payment-flow' in classes:
            self.counts['payment_graphics'] += 1
        if 'methods-note' in classes:
            self.counts['methods_notes'] += 1
        if 'source-box' in classes:
            self.in_source_box = len(self.stack)
        if tag == 'li' and self.in_source_box:
            self.counts['source_items'] += 1
        if 'source-number' in classes:
            self.counts['source_numbers'] += 1
        if tag == 'p' and 'narrative' in classes:
            self.current_narrative = []

    def handle_endtag(self, tag):
        if tag == 'script' and self.current_jsonld is not None:
            self.jsonld.append(''.join(self.current_jsonld))
            self.current_jsonld = None
        if tag in ('script', 'style'):
            self.skip -= 1
        if tag == 'p' and self.current_narrative is not None:
            self.narratives.append(' '.join(self.current_narrative).strip())
            self.current_narrative = None
        if self.in_source_box == len(self.stack):
            self.in_source_box = 0
        if self.article_depth == len(self.stack):
            self.article_depth = 0
        if self.stack:
            self.stack.pop()

    def handle_data(self, data):
        if self.current_jsonld is not None:
            self.current_jsonld.append(data)
        if self.skip:
            return
        text = data.strip()
        if not text:
            return
        self.document_text.append(text)
        if self.article_depth:
            self.article_text.append(text)
        if self.current_narrative is not None:
            self.current_narrative.append(text)
        if self.stack and self.stack[-1][0] == 'h1':
            self.h1.append(text)
        if self.stack and self.stack[-1][0] == 'title':
            self.title.append(text)

def sentence_count(text):
    return len([part for part in re.split(r'(?<=[.!?])["\']?\s+', text.strip()) if part.strip()])

def collect_types(node, found):
    if isinstance(node, dict):
        value = node.get('@type')
        if isinstance(value, str):
            found.add(value)
        elif isinstance(value, list):
            found.update(v for v in value if isinstance(v, str))
        for child in node.values():
            collect_types(child, found)
    elif isinstance(node, list):
        for child in node:
            collect_types(child, found)

def main():
    if len(sys.argv) != 2:
        print(f'usage: {Path(sys.argv[0]).name} <generated-html>', file=sys.stderr)
        raise SystemExit(2)
    path = Path(sys.argv[1])
    raw = path.read_text(encoding='utf-8')
    parser = AuditParser()
    parser.feed(raw)
    article = unescape(' '.join(parser.article_text))
    document = unescape(' '.join(parser.document_text))
    words = len(WORD_RE.findall(article))
    narrative_counts = [sentence_count(p) for p in parser.narratives]
    internal = [h for h in parser.hrefs if h.startswith('/') and not h.startswith('//')]
    external = [h for h in parser.hrefs if h.startswith('http')]
    schema_types = set()
    schema_errors = []
    for item in parser.jsonld:
        try:
            collect_types(json.loads(item), schema_types)
        except Exception as exc:
            schema_errors.append(str(exc))
    forbidden_terms = {term: len(re.findall(rf'\b{term}\b', document, re.I)) for term in ('pricing', 'rate', 'rates', 'tier', 'tiers')}
    forbidden_hrefs = [h for h in parser.hrefs if '/pricing' in h.lower()]
    source_urls = [
        'https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf',
        'https://www.ic3.gov/PSA/2024/PSA240911',
        'https://www.ftc.gov/news-events/news/press-releases/2025/03/new-ftc-data-show-big-jump-reported-losses-fraud-125-billion-2024',
        'https://www.ftc.gov/news-events/data-visualizations/data-spotlight/2024/04/impersonation-scams-not-what-they-used-be',
        'https://www.cisa.gov/news-events/alerts/2024/06/12/phone-scammers-impersonating-cisa-employees',
        'https://privacy.gov.ph/npc-phe-bulletin-no-21-preventive-data-privacy-practices-against-smishing/',
    ]
    checks = {
        'word_range': 1500 <= words <= 2000,
        'title': EXPECTED_TITLE in ' '.join(parser.title),
        'h1': ' '.join(parser.h1) == EXPECTED_TITLE,
        'canonical': parser.canonical == EXPECTED_CANONICAL,
        'marker': EXPECTED_MARKER in raw,
        'paragraphs_2_or_3_sentences': bool(narrative_counts) and all(2 <= n <= 3 for n in narrative_counts),
        'exact_three_banners': parser.counts['banners'] == 3,
        'one_table': parser.counts['tables'] == 1,
        'one_labeled_chart': parser.counts['evidence_charts'] == 1 and 'payment-chart-title' in raw and 'payment-chart-desc' in raw,
        'one_separate_graphic': parser.counts['payment_graphics'] == 1 and 'payment-flow-title' in raw and 'payment-flow-desc' in raw,
        'methods_note': parser.counts['methods_notes'] == 1,
        'dated_stats': all(marker in article for marker in ('2024', '21,442', '$2,770,151,146', '193,407', '1,421', '$2.95 billion', '3,020', '$848.4 million', '$561.6 million')),
        'exact_quote': EXPECTED_QUOTE in article and parser.counts['blockquotes'] == 1,
        'quote_attribution': all(marker in article for marker in ('FBI Internet Crime Complaint Center', 'September 11, 2024')),
        'internal_links': len(set(internal)) >= 3,
        'external_links': len(set(external)) >= 4 and all(url in external for url in source_urls),
        'numbered_sources': parser.counts['source_items'] == 6 and parser.counts['source_numbers'] == 6,
        'schema': {'BlogPosting', 'FAQPage', 'BreadcrumbList'}.issubset(schema_types) and not schema_errors,
        'no_forbidden_terms': not any(forbidden_terms.values()),
        'no_forbidden_href': not forbidden_hrefs,
        'sitemap_entry': EXPECTED_CANONICAL in Path('.next/server/app/sitemap.xml.body').read_text(encoding='utf-8'),
    }
    result = {'file': str(path), 'article_words': words, 'narrative_paragraphs': len(narrative_counts), 'narrative_sentence_counts': narrative_counts, 'counts': parser.counts, 'internal_links': len(set(internal)), 'external_links': len(set(external)), 'schema_types': sorted(schema_types), 'forbidden_terms': forbidden_terms, 'forbidden_hrefs': forbidden_hrefs, 'checks': checks, 'passed': all(checks.values())}
    print(json.dumps(result, indent=2))
    raise SystemExit(0 if result['passed'] else 1)

if __name__ == '__main__':
    main()
