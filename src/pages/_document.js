import { Html, Head, Main, NextScript } from 'next/document'
import Header from "@/components/Header";
import Contact from "@/components/Contact";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header/>
        <Main />
        <Contact/>
        <NextScript />
      </body>
    </Html>
  )
}
