import Container from './container';
import { SOCIALS } from '@/components/social-icons';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-semibold text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            <a
              href={`https://trevoga.org/about`}
              className="mx-3 font-semibold hover:font-underline hover:text-signal"
            >
              о проекте
            </a>
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            {'Также наш проект - блог об аддикции  '}
            <a
              href={`https://addict.cf`}
              className="mx-3 font-semibold hover:underline hover:text-signal "
            >
              addict.cf
            </a>
            .
          </div>
        </div>
        <div className="flex my-4 space-x-6 items-center justify-center">
          {SOCIALS.map((social, index) => (
            <a key={index} href={social.url}>
              {social.Icon}
            </a>
          ))}
        </div>
        <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-4" />

        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">
          Copyright ©{' '}
          <span className="font-medium">{new Date().getFullYear()}</span>
          <span>{` • `}</span>
          Valery Grean
        </p>
      </Container>
    </footer>
  );
}
