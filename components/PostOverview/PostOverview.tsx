import React from 'react'
import styled from 'styled-components'
import { InitialChar } from 'components'
import { PostData } from 'lib/posts'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'

const Root = styled.div`
  padding: 0.5rem 0;
`

const Description = styled.div`
  text-align: justify;
`

const ReadMore = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.main};
`

type Props = {
  blogPost: PostData
}

function PostOverview({ blogPost }: Props): JSX.Element {
  const postDetailshref = `/blog/${blogPost.id}`

  return (
    <Root>
      <Link href={postDetailshref} passHref>
        <a>
          <h3>
            <InitialChar>{blogPost.title[0]}</InitialChar>
            {blogPost.title}
          </h3>
        </a>
      </Link>
      <p>
        {blogPost.date} - {blogPost.category}
      </p>
      <Description>{blogPost.description}</Description>
      <Link href={postDetailshref} passHref>
        <ReadMore>
          <FormattedMessage id="readMore" />
        </ReadMore>
      </Link>
    </Root>
  )
}

export default PostOverview
