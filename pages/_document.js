import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
    <script type="text/javascript" src="http://127.0.0.1:5137/libs/AppEnablementConnector.js"></script>
    <script type="text/javascript" src="http://127.0.0.1:5137/libs/api/Common.js"></script>
    <script type="text/javascript" src="http://127.0.0.1:5137/libs/api/Masterdata.js"></script>
    <script type="text/javascript" src="http://127.0.0.1:5137/libs/api/ExternalMasterdata.js"></script>
    <script type="text/javascript" src="http://127.0.0.1:5137/libs/api/Pos.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
