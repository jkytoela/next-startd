import { AppProps } from 'next/app';
import '@/styles/global.css';
import '@fontsource/inter';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
