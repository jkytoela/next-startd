/* eslint-disable prettier/prettier */
import Head from 'next/head';
import { tw } from 'twind';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={tw(`ml-12 mt-12`)}>Testing</main>
    </div>
  );
}
