import Head from 'next/head';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '@/components/container';
import MoreStories from '@/components/more-stories';
import Header from '@/components/header';
import PostHeader from '@/components/post-header';
import SectionSeparator from '@/components/section-separator';
import Layout from '@/components/layout';
import PostTitle from '@/components/post-title';
import { postQuery, postSlugsQuery } from '@/lib/queries';
import { sanityClient } from '@/lib/sanity.server';
import { mdxToHtml } from '@/lib/mdx';
import PostBody from '@/components/post-body';
import { urlForImage } from '@/lib/sanity';

export default function Post({ data }) {
  const router = useRouter();

  const slug = data?.post?.slug;
  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{data.post.title} | SEO website title</title>
                {data.post.coverImage && (
                  <meta
                    key="ogImage"
                    property="og:image"
                    content={urlForImage(data.post.coverImage)
                      .width(1200)
                      .height(627)
                      .fit('crop')
                      .url()}
                  />
                )}
              </Head>
              <PostHeader
                title={data.post.title}
                coverImage={data.post.coverImage}
              />
              <PostBody mdxContent={data.mdxContent} />
            </article>
            <SectionSeparator />
            {data.morePosts.length > 0 && (
              <MoreStories posts={data.morePosts} />
            )}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const { post, morePosts } = await sanityClient.fetch(postQuery, {
    slug: params.slug
  });
  const { html } = await mdxToHtml(post.mdxContent);
  return {
    props: {
      preview,
      data: {
        post,
        mdxContent: html,
        morePosts: morePosts
      }
    }
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true
  };
}
