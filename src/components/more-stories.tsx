import PostPreview from '@/components/post-preview';
import { useRouter } from 'next/router';
export default function MoreStories({ posts }) {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-semibold ">
        {router.asPath === `/`
          ? `Виды тревожного расстройства`
          : `Другие виды
        тревожного расстройства`}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
