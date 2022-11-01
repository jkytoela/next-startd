import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import { BlogPostList } from '@/components/blog-post-list';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="STARTD - Template"
        description="A TypeScript/Next.js theme that includes everything you need to build amazing landing page!"
      />
      <main>
        <BlogPostList />
      </main>
      <Footer />
    </Page>
  );
}
