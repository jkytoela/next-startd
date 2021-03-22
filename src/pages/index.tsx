import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';
import ContactSupport from '@/components/contact-support';
import GetAQuote from '@/components/get-a-quote';

export default function Home() {
  return (
    <Page>
      <NextSeo title="Dankore Software" description="The Future of Digital Life" />
      <Header />
      <main>
        <ListSection />
        <ContactSupport />
        <GetAQuote />
        <FeatureSection />
        <PricingTable />
        <SocialProof />
      </main>
      <Footer />
    </Page>
  );
}
