import React from 'react'
import Head from 'next/head'
import type { GetStaticProps } from 'next'
import styled, { css } from 'styled-components'
import { getLatestPost, PostData } from 'lib/posts'
import { Hero, PostOverview } from 'components'
import { FormattedMessage } from 'react-intl'

const Root = styled.main`
  display: grid;
  grid-template-rows: 70vh 1fr;
  ${({ theme }) =>
    css`
      @media (min-width: ${theme.breakpoints.md}) {
        grid-template-rows: 100vh;
        grid-template-columns: 50% 50%;
      }
    `}
`

const Content = styled.div`
  padding: 2rem 1.5rem;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.md}) {
      padding: 2rem 3rem;
    }
  `}
`

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const latestPost = getLatestPost({ locale })

  return {
    props: {
      latestPost,
    },
  }
}

type Props = {
  latestPost: PostData
}

const Home: React.FC<Props> = ({ latestPost }) => {
  return (
    <Root>
      <Head>
        <title>Daniel Esquinazi | Home </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <Content>
        <section>
          <h2>
            <FormattedMessage id="aboutMe" />
          </h2>
          <p>
            <FormattedMessage id="aboutMeOverview" />
          </p>
          <hr />
        </section>
        <section>
          <h2>
            <FormattedMessage id="latestPost" />
          </h2>
          <PostOverview blogPost={latestPost} />
        </section>
      </Content>
    </Root>
  )
}

export default Home
