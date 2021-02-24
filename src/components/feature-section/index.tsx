import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

type Feature = {
  title: string;
  description: string;
};

interface IProps {
  features: Feature[];
}

const FeatureSection = ({ features }: IProps) => (
  <section className={tw(`py-8`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            {features.map((feature, index) => (
              <li className={tw(`flex -mx-4`)}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold font-heading rounded-full
                      bg-blue-50 text-blue-500`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{feature.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0`)}>
            <FeatureSvg />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
