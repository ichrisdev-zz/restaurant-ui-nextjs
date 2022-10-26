import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { wrapper } from '../store/store';
import NavbarLayout from '../components/Layout/NavbarLayout/NavbarLayout';

function App({ Component, pageProps }: AppProps) {
  return (
    <NavbarLayout>
      <Component {...pageProps} />
    </NavbarLayout>
  )
}

export default wrapper.withRedux(App);