import Container from './container';

export default function Alert() {
  return (
    <div className="bg-accent-1 border-accent-2 border-b">
      <Container>
        <div className="py-2 text-center text-sm">
          {'Также наш проект - блог об аддикции  '}
          <a
            href={`https://addict.cf`}
            className=" hover:text-signal transform  duration-150 ease-in-out  transition-all"
          >
            addict.cf
          </a>
          .
        </div>
      </Container>
    </div>
  );
}
