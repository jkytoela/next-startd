import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const ShippersFeatureSection = () => (
  <section className={tw(`bg-white pb-6`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-10 text-center`)}>
          <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>AwUnの特徴</h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>AwUNの特徴</p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>短時間でマッチング</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              配達して欲しい荷物を入力すると、周辺の集荷可能な空きトラックと最速たったの数分間でマッチングします。
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>最安値で取引可能</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
              集荷可能なトラックの中で最も安いトラックが上位にマッチングします。そのため、普段の運賃と比べても安く、周辺の最安値の運賃で取引することができます。
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>安心の評価精度</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              AwUNの評価制度により、周辺を走っている最も評価が高く、安全運転を心がけるドライバーに配送を依頼することができます。
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>安心の配送クオリティ</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              ご紹介するドライバー・運送会社は弊社の厳正な審査を通過した公認ドライバーに限定されます。安心して荷物発送を依頼することができます。
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>持続可能な配送網構築へ</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              AwUN（アウン）は空積載のトラックや積載率の低いトラックのルート上にある荷物を運ぶことができるようになるため、
              燃料を効率的に使うことができ、脱炭素配送に繋がります。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ShippersFeatureSection;
