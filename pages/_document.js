import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB4IefstneiNw1cA3bTrhIXFti9IYfVP8A&libraries=places"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}