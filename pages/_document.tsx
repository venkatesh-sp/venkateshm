import { Head, Html, Main, NextScript } from "next/document";

/**
 * Runs before first paint so a visitor who chose dark mode never sees a light flash.
 * The default is the light theme; the choice is remembered in localStorage.
 */
const themeScript = `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
