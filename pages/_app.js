//components
import Layout from '../components/layout/Layout'
//css
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
