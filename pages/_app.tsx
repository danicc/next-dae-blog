import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { IntlProvider } from 'react-intl'
import 'prismjs/themes/prism-coy.css'
import theme from 'styles/theme'
import 'styles/global.css'

const messagesInSpanish = {
  aboutMe: 'Acerca de mí',
  aboutMeOverview: `Vivo en Salta, Argentina pero nací en una pequeña ciudad llamada Tartagal. Soy un desarrollador de software que ama aprender nuevas tecnologías y practicar o crear cosas con ellas. Específicamente me gusta trabajar en el frontend utilizando React, Typescript, Graphql, CSS-in-JS y otras herramientas.`,
  latestPost: 'Últimos Posts',
  readMore: 'Leer más',
}

const messagesInEnglish = {
  aboutMe: 'About Me',
  aboutMeOverview: `I live in Salta, Argentina but I born on a small city called Tartagal. I am a software
  developer who loves learning new technologies and play around or create things with
  them. Specifically I like working on the frontend using React, Typescript, Graphql,
  CSS-in-JS and other tools.`,
  latestPost: 'Latest Posts',
  readMore: 'Read more',
}

function App({ Component, pageProps }: AppProps): JSX.Element {
  const { locale } = useRouter()

  let messages = messagesInEnglish
  if (locale === 'es') messages = messagesInSpanish

  return (
    <IntlProvider messages={messages} locale="es" defaultLocale="en">
      <ThemeProvider theme={theme}>
        <>
          <Head>
            <link rel="shortcut icon" href="/favicon-32x32.png" />
          </Head>
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </IntlProvider>
  )
}

export default App
