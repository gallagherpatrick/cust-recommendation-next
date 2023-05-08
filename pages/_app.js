import '@/styles/globals.css' 
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  <><Script src="http://127.0.0.1:5137/libs/AppEnablementConnector.js" strategy='beforeInteractive'></Script><Script src="http://127.0.0.1:5137/libs/api/Pos.js" strategy='beforeInteractive'></Script><Script src="http://127.0.0.1:5137/libs/api/Common.js"></Script><Script src="http://127.0.0.1:5137/libs/api/Masterdata.js"></Script><Script src="http://127.0.0.1:5137/libs/api/ExternalMasterdata.js"></Script></>
  return <Component {...pageProps} />
}
