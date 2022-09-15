import '../styles/globals.css'
import Layout from '../components/Layout'
import {RecoilRoot} from 'recoil';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { UserProvider } from '@auth0/nextjs-auth0'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </UserProvider>
    </>
  )
}

export default MyApp
