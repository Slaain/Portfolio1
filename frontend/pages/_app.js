import '../styles/globals.css';
import Head from 'next/head';
import Menu from '../components/Menu';
import About from '../components/About';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>IDRIS ALI</title>
      </Head>
      <Menu />
      <Component {...pageProps} />
      <About />;
    </>
  );
}

export default App;
