import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Footer from '@/components/footer';
import { tw } from 'twind';
import Button from '@/components/button';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';

const apiEndpoint = `http://localhost:1337/api/articles/`;

export interface Post {
  id: string;
  title: string;
  description: string;
  body: string;
}

export default function BlogEntry() {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState<Post>();

  useEffect(() => {
    fetch(apiEndpoint + String(id))
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        if (json.data) {
          setPost({
            id: json.data.id,
            title: json.data.attributes.title,
            description: json.data.attributes.description,
            body: json.data.attributes.content,
          });
        }
      });
  }, [id]);

  return (
    <Page>
      <NextSeo
        title="STARTD - Template"
        description="A TypeScript/Next.js theme that includes everything you need to build amazing landing page!"
      />
      <main>
        <section className={tw(`bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12`)}>
          <div className={tw(`relative max-w-7xl mx-auto mb-24`)}>
            <div className={tw(`overflow-hidden lg:max-w-none lg:flex`)}>
              <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
                <h2 className={tw(`text-4xl lg:text-7xl font-bold text-gray-800 mb-12`)}>{post?.title}</h2>
                <p className={tw(`mt-6 text-base leading-6 text-gray-500`)}>{post?.body}</p>
              </div>
              <div
                className={tw(
                  `py-8 px-6 text-center lg:flex-shrink-0
            lg:flex lg:flex-col lg:justify-center lg:p-12`,
                )}
              >
                <p className={tw(`text-lg font-medium text-gray-800`)}>Blog post ID</p>
                <div
                  className={tw(`my-4 flex items-center justify-center text-6xl leading-none font-bold text-gray-800`)}
                >
                  {id}
                </div>
                <Button primary modifier="mt-6">
                  <a href="/blog">Go Back</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Page>
  );
}
