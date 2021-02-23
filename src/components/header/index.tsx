import { tw } from 'twind';
import Button from '@/components/button';

const Header = () => (
  <header className={tw(`bg-white`)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1
        className={tw(
          `font-sans font-bold text-4xl lg:text-8xl text-center leading-snug text-gray-900`,
        )}
      >
        Insert catchy headline here
      </h1>
      <div className={tw(`max-w-2xl mx-auto`)}>
        <p
          className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}
        >
          Make your website wonderful and build beyond your expectations.
        </p>
      </div>
      <div
        className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}
      >
        <Button primary>Get started</Button>
        <span className={tw(`mx-2`)}>or</span>
        <Button>Contact us</Button>
      </div>
    </div>
  </header>
);

export default Header;
