import { tw } from 'twind';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import FeatureSection from '@/components/feature-section';

const features = [
  {
    title: `Feature`,
    description: `Duis eu irure duis laborum enim aliquip.`,
  },
  {
    title: `Feature`,
    description: `Veniam eiusmod aliqua sint commodo consequat aliquip pariatur.`,
  },
  {
    title: `Feature`,
    description: `Elit minim ipsum sunt proident irure cillum eiusmod reprehenderit do velit pariatur incididunt.`,
  },
];

export default function Home() {
  return (
    <Page title="STARTD - Home">
      <Header />
      <main>
        <VideoSection />
        <FeatureSection features={features} />
        <section className={tw(``)}>
          <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>Next section...</div>
        </section>
      </main>
    </Page>
  );
}
