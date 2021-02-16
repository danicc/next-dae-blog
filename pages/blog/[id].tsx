import React from 'react'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { getPostPaths, getPostData, PostData } from 'lib/posts'
import { Layout } from 'components'

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
    </Layout>
  )
}
