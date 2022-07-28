import { MDXRemote } from 'next-mdx-remote';
import components from '@/components/mdx-component';

export default function PostBody({ mdxContent }) {
  return (
    <div className="prose prose-slate max-w-3xl mx-auto w-full">
      <MDXRemote
        {...mdxContent}
        components={
          {
            ...components
          } as any
        }
      />
    </div>
  );
}
