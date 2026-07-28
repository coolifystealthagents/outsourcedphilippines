#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
article = ROOT / 'app/blog/[slug]/top-virtual-assistant-companies-article.tsx'
data = ROOT / 'app/data.ts'
route = ROOT / 'app/blog/[slug]/page.tsx'
sitemap = ROOT / 'app/sitemap.xml/route.ts'

assert article.exists(), 'comparison article component is missing'
text = article.read_text()
assert "topVirtualAssistantCompaniesSlug" in text, 'slug export is missing'
assert "top-50-virtual-assistant-companies" in text, 'expected route slug is missing'
assert re.search(r"export const companies\s*=\s*\[", text), 'company data array is missing'
company_block = text.split('export const companies = [', 1)[1].split('] as const;', 1)[0]
entries = re.findall(r"\n\s*\{\n(.*?)\n\s*\},", company_block, re.S)
assert len(entries) == 50, f'expected 50 company entries, found {len(entries)}'
required_fields = ('name', 'domain', 'url', 'category', 'niche', 'benefit', 'bestFor')
for index, entry in enumerate(entries, 1):
    for field in required_fields:
        assert re.search(rf"\n\s*{field}: '[^']+'", f"\n{entry}"), f'company {index} is missing {field}'
assert len(set(re.findall(r"\n\s*domain: '([^']+)'", company_block))) == 50, 'company domains must be unique'
assert text.count("name: 'Stealth Agents'") == 1, 'Stealth Agents must appear once'
assert "position: index + 1" in text, 'ItemList schema positions must come from visible company data'
assert "numberOfItems: companies.length" in text, 'schema item count must match visible company data'
assert 'Top 50 virtual assistant companies' in text, 'H1 keyword phrase is missing'
assert 'How we chose these companies' in text, 'ranking method disclosure is missing'
assert 'What to check before you hire' in text, 'buyer due-diligence section is missing'
assert text.count('niche:') == 50, 'every company needs a niche'
assert text.count('benefit:') == 50, 'every company needs a benefit'
assert text.count('url:') >= 51, 'every company needs a source URL'
assert 'topVirtualAssistantCompaniesSlug' in route.read_text(), 'dynamic route does not dispatch the article'
assert "slug: 'top-50-virtual-assistant-companies'" in data.read_text(), 'blog listing entry is missing'
assert 'blogPosts.map' in sitemap.read_text(), 'sitemap must include blogPosts routes'
print('PASS: 50-company article source contract')
