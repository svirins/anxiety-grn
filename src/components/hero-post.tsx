import CoverImage from '@/components/cover-image';
import Link from 'next/link';

export default function HeroPost({ title, coverImage, excerpt, slug }) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage slug={slug} title={title} image={coverImage} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl  font-semibold">
            <Link href={`/${slug}`}>
              <a className="hover:underline transform  duration-150 ease-in-out  transition-all hover:text-signal">
                {title}
              </a>
            </Link>
          </h3>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
}
