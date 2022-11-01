import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import { useEffect, useState } from 'react';
import { title } from 'process';
import Button from '../button';

const dummyEndpoint = `http://localhost:1337/api/articles`;

export interface PostResponse {
  id: number;
  attributes: {
    title: string;
    description: string;
  };
}

export interface Post {
  id: string;
  title: string;
  description: string;
}

export interface PostList {
  posts: [Post];
}

export const BlogPostList = () => {
  const [posts, setPosts] = useState<PostList>();

  useEffect(() => {
    fetch(dummyEndpoint)
      .then((response) => response.json())
      .then((json) => {
        setPosts({
          posts: json.data.map((x: PostResponse) => ({
            id: x.id,
            title: x.attributes.title,
            description: x.attributes.description,
          })),
        });
      });
  }, []);

  return (
    <section className={tw(`bg-white pb-6`)}>
      <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
        <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
          <div className={tw(`mb-16 text-center`)}>
            <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Blog</h4>
            <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Latest news</p>
          </div>
          <div className={tw(`flex flex-wrap my-12`)}>
            {posts &&
              posts?.posts.length > 0 &&
              posts.posts.map((x) => (
                <>
                  <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
                    <div className={tw(`flex items-center mb-6`)}>
                      <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
                      <div className={tw(`ml-4 text-xl`)}>{x.title}</div>
                    </div>
                    <p className={tw(`leading-loose text-gray-500`)}>{x.description}</p>
                    <Button>
                      <a href={`/blog/`.concat(String(x.id))}>View</a>
                    </Button>
                  </div>
                </>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
