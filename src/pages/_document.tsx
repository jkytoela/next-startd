import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';

import { setup } from 'twind';
// import { virtualSheet, getStyleTag } from 'twind/sheets';

interface IProps {
  styleTag?: string;
}

class MyDocument extends Document<IProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    // const sheet = virtualSheet();
    // sheet.reset();

    setup({
      theme: {
        extend: {
          fontFamily: {
            sans: `Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
          },
        },
      },
    });

    // const styleTag = getStyleTag(sheet);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
