import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Header, Main } from 'components'

type Props = {
  children?: ReactNode
  documentTitle?: string
}

const Layout = ({ children, documentTitle }: Props): JSX.Element => (
  <div>
    <Head>
      <title>{documentTitle ? `Daniel Esquinazi | ${documentTitle}` : 'Daniel Esquinazi'}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Main>{children}</Main>
  </div>
)

export default Layout
