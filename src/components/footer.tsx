import Container from './container';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-semibold text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Statically Generated with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            {'Также наш проект - блог об аддикции  '}
            <a
              href={`https://addict.cf`}
              className="mx-3 font-semibold hover:underline"
            >
              addict.cf
            </a>
            .
          </div>
        </div>
      </Container>
    </footer>
  );
}
