import Link from 'next/link';

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-semibold  leading-tight my-4  md:my-8">
      <Link href="/">
        <a className="hover:underlinetransform  duration-150 ease-in-out  transition-all hover:text-signal">
          Тревога
        </a>
      </Link>
      {`:`}
    </h2>
  );
}
