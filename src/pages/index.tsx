import { tw } from 'twind';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';

export default function Home() {
  return (
    <Page title="STARTD - Home">
      <Header />
      <main className={tw(`w-full`)}>
        <VideoSection />
        <ListSection />
        <FeatureSection />
        <CasesSection />
      </main>
    </Page>
  );
}
