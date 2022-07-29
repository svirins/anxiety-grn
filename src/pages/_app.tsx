import '../styles/global.css';
import { usePanelbear } from '@panelbear/panelbear-nextjs';

function MyApp({ Component, pageProps }) {
  usePanelbear(process.env.NEXT_PUBLIC_PANELBEAR_SITE_ID, {
    enabled: process.env.NODE_ENV === 'production'
  });
  return <Component {...pageProps} />;
}

export default MyApp;
