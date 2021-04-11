import React from 'react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import styled from 'styled-components'
import { getPostPaths, getPostData, PostData } from 'lib/posts'
import { Layout } from 'components'

const LinkButton = styled.a`
  display: inline-block;
  margin: 0.5rem 0;
  padding: 0.5rem;
  cursor: pointer;
  color: inheirt;
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: 8px;
  text-decoration: none;
  transform: scale(1);

  &:hover {
    transform: scale(0.98);
    opacity: 0.98;
  }
`

export const getStaticPaths: GetStaticPaths = async function getStaticPaths() {
  const paths = getPostPaths()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async function getStaticProps({ params, locale }) {
  if (!params || !locale) {
    return {
      props: {},
    }
  }

  if (typeof params.id !== 'string') {
    return {
      props: {},
    }
  }

  const postData = await getPostData({ id: params.id, locale })
  return {
    props: {
      postData,
    },
  }
}

type Props = {
  postData: PostData
}

export default function Post({ postData }: Props): JSX.Element {
  return (
    <Layout documentTitle={postData.title}>
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      <Link href="/blog" passHref>
        <LinkButton>Back to Blog</LinkButton>
      </Link>
    </Layout>
  )
}
