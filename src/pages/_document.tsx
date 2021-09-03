import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

interface MyDocumentInterface {
  url: string;
  title: string;
  description: string;
}

class MyDocument extends Document implements MyDocumentInterface {
  url = '<https://example.com>';
  title = 'Demo Next.js';
  description = 'Demo of Next.js';

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {/* Change the contents of `<Head>` as needed. */}
          <meta name="description" content={this.description} />
          <meta name="theme-color" content="#333" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={this.title} />
          <meta property="og:url" content={this.url} />
          <meta property="og:description" content={this.description} />
          <meta property="og:site_name" content={this.title} />
          <meta property="og:image" content={`${this.url}/ogp.png`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
