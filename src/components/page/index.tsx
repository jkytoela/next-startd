import Head from 'next/head';
import Navigation from '@/components/navigation';

interface IProps {
  children: React.ReactNode;
  title?: string;
}

const Page = ({ children, title = `STARTD` }: IProps) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/logo.svg" />
    </Head>
    <div>
      <Navigation />
      {children}
    </div>
  </div>
);

export default Page;
