import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const listItems = [
  {
    title: `Designers`,
    description: `荷物の詳細情報を入力します。`,
    image: `/images/userflow1.png`,
    alt: `ユーザーフローイメージ1`,
  },
  {
    title: `Developers`,
    description: `ドライバーが決定すると、メールで通知されます。`,
    image: `/images/userflow2.png`,
    alt: `ユーザーフローイメージ2`,
  },
  {
    title: `Product owners`,
    description: `指定した集荷場所・時間にドライバーが伺います。`,
    image: `/images/userflow3.png`,
    alt: `ユーザーフローイメージ3`,
  },
  {
    title: `Product owners`,
    description: `配送費は後日お振り込みいただきます。`,
    image: `/images/userflow4.png`,
    alt: `ユーザーフローイメージ4`,
  },
];

const ShippersFlow = () => (
  <section className={tw(`lg:py-20 pt-20 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-10 text-center`)}>
        <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Grow your revenue</h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
          荷物発送までの流れ
        </p>
      </div>

      <div className={tw(`flex flex-wrap`)}>
        <ul className={tw(`flex justify-center flex-wrap my-12`)}>
          {listItems.map((item, index) => (
            <li className={tw(`w-full md:w-1/2 lg:w-1/4 p-8`)} key={item.title}>
              <div className={tw(`items-center px-4 w-full`)}>
                <img src={item.image} alt={item.alt} className={tw(`lg:w-full w-4/5 object-contain`)} />
                <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default ShippersFlow;
