import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <html lang="en">
      <Head />
      <body suppressHydrationWarning={true}>
        <Main />
        <NextScript />
      </body>
    </html>
  );
}
