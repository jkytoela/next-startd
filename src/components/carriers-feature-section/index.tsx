import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const listItems = [
  {
    title: `積載率の向上`,
    description: `AwUN の新規貨物探索のアルゴリズムにより積載率を向上させることができます。`,
    image: `/images/carriers_feature1.png`,
    alt: `積載率の向上イメージ画像`,
  },
  {
    title: `瞬時に新規荷主獲得`,
    description: `従来は顧客となる荷主を探し、新規の貨物を獲得するのに数日間かかっていたところを、わずか数時間で見つけることができます。`,
    image: `/images/carriers_feature2.png`,
    alt: `瞬時に新規荷主獲得イメージ画像`,
  },
  {
    title: `業務の効率化`,
    description: `複数ステップからなる従来の作業を、「集荷依頼の申請」、「配達完了報告」のたった2ステップで業務を遂行することが可能になります。`,
    image: `/images/carriers_feature3.png`,
    alt: `業務の効率化イメージ画像`,
  },
];

const CarriersFeatureSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-10 text-center`)}>
          <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>AwUnの特徴</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>AwUNの特徴</p>
        </div>

        <div className={tw(``)}>
          <ul className={tw(``)}>
            {listItems.map((item, index) => (
              <li className={tw(`flex w-4/5  m-5 p-5  border`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                  <img src={item.image} alt={item.alt} className={tw(`w-3/5 mx-auto object-contain`)} />
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>持続可能な配送網構築へ</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              AwUN
              は空積載のトラックや積載率の低いトラックのルート上にある荷物を運ぶことができるようになるため、燃料を効率的に使うことができ、脱炭素配送を行うことができます。
            </p>
          </div>
          <div className={tw(`w-full  md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>導入支援</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              契約締結後、弊社がアカウントとデータベースを作成します。アカウント配布後は最短1日から導入が完了いたします。
            </p>
          </div>
          <div className={tw(`w-full  md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>充実のサポート体制</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
              ご契約から3か月間、導入や操作方法に関して継続的なサポートをお約束いたします。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CarriersFeatureSection;
