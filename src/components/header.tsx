import Link from 'next/link';

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-semibold  leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline">Тревога</a>
      </Link>
      .
    </h2>
  );
}
