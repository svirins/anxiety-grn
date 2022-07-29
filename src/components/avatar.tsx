import Image from 'next/image';

export default function Avatar() {
  return (
    <div className="w-[128px] relative mb-8 sm:mb-0 mr-auto">
      <Image
        alt="Valeriy Grean"
        height={128}
        width={128}
        src="/grean.jpg"
        className="rounded-full"
        sizes="30vw"
        priority
      />
    </div>
  );
}
176;
