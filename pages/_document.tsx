import {Head, Html, Main, NextScript} from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <div id="portal" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
