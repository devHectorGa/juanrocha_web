import { MainLayout } from 'src/layouts';
import 'src/styles/globalStyles.css';

function MyApp({ Component, pageProps }) {
  const Layout = Component?.Layout || MainLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
