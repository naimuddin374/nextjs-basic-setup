import { StoreProvider } from 'easy-peasy';
import store from '../store';
import Layout from './../components/layout/index';



function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );

}

export default MyApp
