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
import { urlForImage, usePreviewSubscription } from '@/lib/sanity';
import { sanityClient, getClient, overlayDrafts } from '@/lib/sanity.server';
import { MDXRemote } from 'next-mdx-remote';
import components from '@/components/MDXComponents';
import { mdxToHtml } from '@/lib/mdx';

export default function Post({ data, preview = false }) {
  const router = useRouter();

  const slug = data?.post?.slug;
  const {
    data: { post, morePosts }
  } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title} | SEO website title</title>
                {post.coverImage && (
                  <meta
                    key="ogImage"
                    property="og:image"
                    content={urlForImage(post.coverImage)
                      .width(1200)
                      .height(627)
                      .fit('crop')
                      .url()}
                  />
                )}
              </Head>
              <PostHeader title={post.title} coverImage={post.coverImage} />
              <div className="prose prose-slate">
                <MDXRemote
                  {...post.mdxContent!}
                  components={
                    {
                      ...components
                    } as any
                  }
                />
                {/* <PostBody content={post.content} /> */}
              </div>
            </article>
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params.slug
  });

  return {
    props: {
      preview,
      data: {
        post,
        morePosts: overlayDrafts(morePosts)
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
