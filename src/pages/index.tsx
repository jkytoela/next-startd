import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import ShippersHeader from '@/components/shippers-header';
import VideoSection from '@/components/video-section';
import ShippersFlow from '@/components/shippers-flow';
import ShippersFeatureSection from '@/components/shippers-feature-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';
import ShippersStart from '@/components/shippers-start';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="AwUN (アウン)"
        description="積載率の低いトラックや帰路にある空きトラックを活用することで運賃を下げ、瞬時に空きトラックを手配できるサービスが AwUN(アウン)です。"
      />
      <ShippersHeader />
      <main>
        <VideoSection />
        <ShippersFlow />
        <ShippersFeatureSection />
        <ShippersStart />
        {/* <SocialProof /> */}
        <PricingTable />
      </main>
      <Footer />
    </Page>
  );
}
