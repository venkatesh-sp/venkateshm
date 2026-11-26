import { Head, Html, Main, NextScript } from "next/document";

/**
 * Runs before first paint so a visitor who chose dark mode never sees a light flash.
 * The default is the light theme; the choice is remembered in localStorage.
 * Its hash is allowed in the Content-Security-Policy (next.config.js). Edit both together.
 */
const themeScript = `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" href="/fonts/poppins-latin-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
