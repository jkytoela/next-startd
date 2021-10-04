import React, { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import CarriersHeader from '@/components/carriers-header';
import CarriersFlow from '@/components/carriers-flow';
import CarriersFeatureSection from '@/components/carriers-feature-section';
import CarriersStart from '@/components/carriers-start';
import Footer from '@/components/footer';

const Careers = () => (
  <Page>
    <NextSeo
      title="AwUN (アウン)"
      description="積載率の低いトラックや帰路にある空きトラックを活用することで運賃を下げ、瞬時に空きトラックを手配できるサービスが AwUN(アウン)です。"
    />
    <CarriersHeader />
    <main>
      <CarriersFlow />
      <CarriersFeatureSection />
      <CarriersStart />
    </main>
    <Footer />
  </Page>
);

export default Careers;
