import { blogPosts } from '../../../data';
import { BlogListing, PAGE_SIZE } from '../../blog-listing';

export function generateStaticParams() {
  return Array.from(
    { length: Math.max(1, Math.ceil(blogPosts.length / PAGE_SIZE)) },
    (_, index) => ({ page: String(index + 1) }),
  );
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const pageNumber = Number(page);
  return {
    title: `Blog - Page ${pageNumber}`,
    description: 'Guides for planning Philippines-based staffing.',
    alternates: { canonical: pageNumber === 1 ? '/blog' : `/blog/page/${pageNumber}` },
  };
}

export default async function NumberedBlogPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  return <BlogListing page={Number(page)} />;
}
