import { tw } from 'twind';
import Button from '@/components/button';

const productLinks = [
  `Browser Applications e.g websites`,
  `Mobile Applications`,
  `Desktop Applications`,
  `Modernization of Legacy Applications`,
  `Logo Design and Marketing`,
  `Computer Networking`,
];
const resourceLinks = [`About Us`, `Help Center`, `Careers`];

const Footer = () => (
  <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
    <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
      <div className={tw(`mb-14 flex items-center w-full`)}>
        <img className={tw(`h-12 w-12 mr-4`)} src="logo.svg" alt="logo" width={48} height={48} />
        <p className={tw(`text-4xl text-indigo-500 font-bold`)}>Dankore Software</p>
      </div>
      <div className={tw(`w-full lg:w-2/3`)}>
        <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Product</h4>
              <ul>
                {productLinks.map((link) => (
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Resources</h4>
              <ul>
                {resourceLinks.map((link) => (
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link}>
                    <a href="/">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Contact Us</h4>
              <ul>
                <li className={tw(`text-gray-800 text-sm font-medium leading-6`)}>Get a Free Quote</li>
                <li className={tw(`text-gray-800 text-sm font-medium leading-6`)}>sales@dankoresoft.com</li>
                <li className={tw(`text-gray-800 text-sm font-medium leading-6`)}>+1-319-296-5799</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className={tw(`w-full lg:w-1/3 mt-12 lg:mt-0`)}>
        <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
          <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Subscribe our newsletter</h4>
          <div className={tw(`flex w-full`)}>
            <input
              aria-label="email address"
              type="text"
              className={tw(`border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)}
              placeholder="Enter your email"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
