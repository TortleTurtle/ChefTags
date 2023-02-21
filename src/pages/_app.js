import 'normalize.css/normalize.css'
import '@/styles/globals.scss'
import { Open_Sans } from "@next/font/google";

const openSans = Open_Sans({subsets: ['latin']});

export default function App({ Component, pageProps }) {
  return (
      <>
        <style jsx global>{`
        html {
          font-family: ${openSans.style.fontFamily};
        }
      `}</style>
        <Component {...pageProps} />
      </>
  )
}
