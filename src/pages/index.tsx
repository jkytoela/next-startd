import { tw } from 'twind';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';

export default function Home() {
  return (
    <Page title="STARTD - Home">
      <Header />
      <main>
        <VideoSection />
        <section className={tw(`bg-white py-24`)}>Hello</section>
      </main>
    </Page>
  );
}
