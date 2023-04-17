import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { persistor, store } from '../redux/store.js'
import { PersistGate } from 'redux-persist/lib/integration/react'

import Layout from '../components/layout/Layout.jsx'

export default function App({ Component, pageProps }) {
  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Layout >

        <Component {...pageProps} />
      </Layout>
    </PersistGate>

  </Provider>
}
