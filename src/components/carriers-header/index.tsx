import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Nike from '@/constants/svg/nike.svg';
import Aws from '@/constants/svg/aws.svg';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const CarriersHeader = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-6xl md:text-6xl lg:text-6xl text-center leading-snug text-gray-800`)}>
        帰路での荷物獲得で
        <br />
        積載率の向上
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-xl`)}>
          トラックが空積載のときや積載率が低いとき、ルート配送の途上や帰路の途中の貨物を見つけ、積載率の向上をすることができるサービスが
          AwUN（アウン）です。
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary>トライアルで使ってみる</Button>
        <span className={tw(`mx-2`)}>or</span>
        <Button>お問い合わせ</Button>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>導入企業一例</p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <Aws className={tw(`m-12 mb-8`)} width={120} />
          <Nike className={tw(`m-12`)} width={140} />
        </div>
      </div>
    </div>
  </header>
);

export default CarriersHeader;
