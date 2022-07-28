import Head from 'next/head';
import Container from '@/components/container';
import MoreStories from '@/components/more-stories';
import HeroPost from '@/components/hero-post';
import Intro from '@/components/intro';
import Layout from '@/components/layout';
import { indexQuery } from '@/lib/queries';
import { sanityClient } from '@/lib/sanity.server';

export default function Index({ allPosts }) {
  const aboutSlugPosition = allPosts.find((post) => post.slug === 'about');
  // const heroPost = allPosts[aboutSlugPosition];
  // const morePosts = allPosts.array.filter(
  //   (_, index) => index != aboutSlugPosition
  // );
  const heroPost = allPosts[0];
  const morePosts = allPosts;

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with Sanity</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = await sanityClient.fetch(indexQuery);
  return {
    props: { allPosts }
  };
}
