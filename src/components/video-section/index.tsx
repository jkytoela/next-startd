import { tw } from 'twind';
import Preferences from '@/constants/svg/preferences.svg';
import Play from '@/constants/svg/play.svg';

const PlayButton = () => (
  <button
    type="button"
    className={tw(`w-64 lg:w-auto absolute top-full left-1/2 flex items-center transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full font-medium group p-4 shadow-xl`)}
    aria-label="play video"
  >
    <Play className={tw(`w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0`)} />
    <span className={tw(`ml-3`)}>Watch the video (5 min)</span>
  </button>
);

const VideoSection = () => (
  <section className={tw(`bg-gray-100`)}>
    <div className={tw(`max-w-7xl mx-auto py-16 lg:py-32 block lg:flex lg:flex-wrap lg:items-center`)}>
      <div className={tw(`lg:flex-1 mx-auto border`)}>
        <div className={tw(`mx-8 lg:mr-12 relative shadow-2xl`)}>
          <Preferences />
          <PlayButton />
        </div>
      </div>
      <div className={tw(`lg:mt-20 mx-8 lg:mx-0 lg:mt-0 lg:flex-1`)}>
        <h2 className={tw(`mt-24 lg:mt-0 font-sans text-4xl font-semibold text-gray-800`)}>Aliqua laborum exercitation velit</h2>
        <p className={tw(`font-sans text-gray-500 mt-10 text-lg`)}>
          Enim reprehenderit exercitation do eiusmod enim dolore nisi do ullamco esse excepteur nisi anim deserunt. Ad irure adipisicing in sunt irure sunt eiusmod mollit fugiat. Excepteur amet labore nostrud ullamco
          incididunt ad cupidatat Lorem pariatur occaecat minim duis pariatur ut. Aliquip voluptate elit anim ad nisi adipisicing cupidatat. Nulla commodo velit eiusmod anim cupidatat minim labore laboris enim
          consectetur.
        </p>
      </div>
    </div>
  </section>
);

export default VideoSection;
