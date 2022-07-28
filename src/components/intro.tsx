export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-semibold  md:pr-8 capsize">
        Тревога: помощь и информация.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Советы врача-психотерапевта{' '}
        <a
          href="https://doctorgrean.by/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Валерия Гриня
        </a>
        .
      </h4>
    </section>
  );
}
