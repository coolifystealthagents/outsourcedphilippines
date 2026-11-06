import { researchPosts } from '../../../fleet-content';
import { ResearchListing, PAGE_SIZE } from '../../research-listing';
export function generateStaticParams() {
  return Array.from({length: Math.max(1, Math.ceil(researchPosts.length / PAGE_SIZE))}, (_, index) => ({page: String(index + 1)}));
}
export async function generateMetadata({params}: {params: Promise<{page: string}>}) {
  const {page} = await params;
  return {title: `Research - Page ${page}`, description: 'Research notes about Philippines-based staffing and operations.', alternates: {canonical: page === '1' ? '/research' : `/research/page/${page}`}};
}
export default async function ResearchPage({params}: {params: Promise<{page: string}>}) {
  const {page} = await params;
  return <ResearchListing page={Number(page)} />;
}
