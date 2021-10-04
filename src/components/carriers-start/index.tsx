import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const listItems = [
  {
    title: `トライアルお申し込み`,
    description: `AwUN の利用を開始するために、下記のリンクから利用開始の申請を行うことができます。貴社にとって最善のご提案をするためにお客様の必要情報をご記入ください。`,
    image: `fa-laptop`,
    alt: `トライアルお申し込みイメージ画像`,
  },
  {
    title: `お打ち合わせ`,
    description: `お打ち合わせ時に現在の運賃、保有トラック台数・種別やトラックドライバーの免許証情報及び保有資格などの必要情報をご提示いただきます。`,
    image: `fa-handshake`,
    alt: `お打ち合わせイメージ画像`,
  },
  {
    title: `ログイン情報の送付`,
    description: `貴社の事前にいただいた情報を弊社で登録し、AwUN（アウン）運営よ りログインに必要なメールアドレスとパスワードを送付させていただきます。`,
    image: `fa-envelope`,
    alt: `ログイン情報の送付イメージ画像`,
  },
  {
    title: `導入完了• 利用開始`,
    description: `契約書のご記入をもって利用開始とさせて頂きます。導入から運用まで専任の担当者が継続的にサポートいたします。また、基本料金は一切かかりません。`,
    image: `fa-truck`,
    alt: `導入完了• 利用開始イメージ画像`,
  },
];

const CarriersStart = () => (
  <section className={tw(`lg:py-20 pt-20 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 bg-white`)}>
      <div className={tw(`mb-10 text-center`)}>
        <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Grow your revenue</h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>導入の流れ</p>
      </div>

      <div className={tw(`flex flex-wrap`)}>
        {/* <div className={tw(`w-full lg:w-1/2 px-8`)}> */}
        <ul className={tw(`flex justify-center flex-wrap my-12`)}>
          {listItems.map((item, index) => (
            <li className={tw(`flex w-full lg:w-1/2 p-8`)} key={item.title}>
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
                <figure className={tw(`h-28 text-gray-400`)}>
                  <i className={`fas fa-5x ${item.image} fclr`} />
                </figure>
                <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default CarriersStart;
