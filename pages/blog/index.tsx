import React from 'react'
import styled from 'styled-components'
import type { GetStaticProps } from 'next'
import { Layout, PostOverview } from 'components'
import { getSortedPostsData, PostData } from 'lib/posts'

const BlogPostsContainer = styled.div`
  margin: 1rem;
`

export const getStaticProps: GetStaticProps = async function getStaticProps({ locale }) {
  const blogPosts = getSortedPostsData({ locale })
  return {
    props: {
      blogPosts,
    },
  }
}

type Props = {
  blogPosts: PostData[]
}

function Blog({ blogPosts }: Props): React.ReactNode {
  return (
    <Layout documentTitle="Blog">
      <BlogPostsContainer>
        {blogPosts.map((post) => (
          <PostOverview key={post.id} blogPost={post} />
        ))}
      </BlogPostsContainer>
    </Layout>
  )
}

export default Blog
