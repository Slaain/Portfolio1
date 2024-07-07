import '../styles/globals.css';
import Head from 'next/head';


function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>IDRIS ALI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
