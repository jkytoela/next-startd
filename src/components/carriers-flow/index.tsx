import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const hqs = [
  {
    title: `Designers`,
    description: `ドライバー周辺の集荷待ち貨物を確認します。`,
    image: `/images/carrier_hq1.png`,
    alt: `配車係フローイメージ1`,
  },
  {
    title: `Developers`,
    description: `希望の貨物をドライバーに任命し、集荷を依頼します。`,
    image: `/images/carrier_hq2.png`,
    alt: `配車係フローイメージ2`,
  },
  {
    title: `Product owners`,
    description: `集荷完了後、配達ドライバーを任命します。`,
    image: `/images/carrier_hq3.png`,
    alt: `配車係フローイメージ3`,
  },
  {
    title: `Product owners`,
    description: `最後に配達完了を確認、また履歴に更新されているかを確かめるのみです。`,
    image: `/images/carrier_hq4.png`,
    alt: `配車係フローイメージ4`,
  },
];

const drivers = [
  {
    title: `Designers`,
    description: `周辺の集荷待ち荷物を確認し集荷申請ボタンを押します。または、配車係から担当貨物を任命されます。`,
    image: `/images/carrier_driver1.png`,
    alt: `ドライバーフローイメージ1`,
  },
  {
    title: `Developers`,
    description: `担当荷物が決定し、集荷場所を確認します。`,
    image: `/images/carrier_driver2.png`,
    alt: `ドライバーフローイメージ2`,
  },
  {
    title: `Product owners`,
    description: `集荷後に集荷完了ボタンを押し、集荷が済んだことを荷主と配車係に通知します。`,
    image: `/images/carrier_driver3.png`,
    alt: `ドライバーフローイメージ3`,
  },
  {
    title: `Product owners`,
    description: `そのまま配達に向かうか、もしくは配達のドライバーと交代します。`,
    image: `/images/carrier_driver4.png`,
    alt: `ドライバーフローイメージ4`,
  },
];

const CarriersFlow = () => (
  <section className={tw(`lg:py-20 pt-20 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-6 bg-white`)}>
      <div className={tw(`mb-10 text-center`)}>
        <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Grow your revenue</h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
          荷物発送までの流れ
        </p>
      </div>

      <div className={tw(`flex flex-wrap border m-4`)}>
        <h3 className={tw(`my-4 text-xl font-semibold ml-4`)}>配車係</h3>
        <ul className={tw(`flex justify-center flex-wrap my-1`)}>
          {hqs.map((item, index) => (
            <li className={tw(`w-full md:w-1/2 lg:w-1/4 p-8`)} key={item.title}>
              <div className={tw(`items-center px-4 w-full`)}>
                <img src={item.image} alt={item.alt} className={tw(`lg:w-full w-4/5 object-contain`)} />
                <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={tw(`flex flex-wrap border m-4`)}>
        <h3 className={tw(`my-4 text-xl font-semibold ml-4`)}>ドライバー</h3>
        <ul className={tw(`flex justify-center flex-wrap my-1`)}>
          {drivers.map((item, index) => (
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

export default CarriersFlow;
