import { MDXRemote } from 'next-mdx-remote';
import components from '@/components/MDXComponents';

export default function PostBody({ mdxContent }) {
  return (
    <div className="prose prose-slate max-w-2xl mx-auto">
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
