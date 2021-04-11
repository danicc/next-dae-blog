import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import 'prismjs/themes/prism-coy.css'
import theme from 'styles/theme'
import 'styles/global.css'
import { I18Provider } from 'providers/I18Provider'

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon-32x32.png" />
      </Head>
      <I18Provider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </I18Provider>
    </>
  )
}

export default App
