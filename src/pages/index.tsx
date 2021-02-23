import { tw } from 'twind';
import Page from '@/components/page';
import Header from '@/components/header';

export default function Home() {
  return (
    <Page title="STARTD - Home">
      <Header />
      <main>
        <div className={tw(`max-w-7xl mx-auto py-6 sm:px-6 lg:px-8`)}>
          <div className={tw(`px-4 py-6 sm:px-0`)}>TODO</div>
        </div>
      </main>
    </Page>
  );
}
