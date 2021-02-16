import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Logo } from 'components'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1.5rem;
  color: rgb(255, 255, 255);
  background-image: linear-gradient(-185deg, rgba(53, 114, 188, 0.7), rgba(26, 26, 26, 0.9)),
    url('/images/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;

  h1 {
    color: rgb(255, 255, 255);
  }
`
const ButtonLink = styled.a`
  width: 130px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0.2rem 0.5rem;
  padding: 0.35rem 1.6rem;
  border: none;
  border-radius: 1.5rem;
  font-size: 1.2rem;
  background: rgb(85, 140, 207);
  color: white;
  text-decoration: none;
  transition: all 0.5s ease 0s;
  box-shadow: rgba(50, 50, 93, 0.11) 0px 4px 6px, rgba(0, 0, 0, 0.08) 0px 1px 3px;
  cursor: pointer;

  &:hover {
    background: rgb(31, 66, 108);
    transform: translateY(-2px);
  }
`

function Hero(): JSX.Element {
  return (
    <Root>
      <Logo />
      <h1>
        Hi. I am <br />
        Daniel Alberto Esquinazi
      </h1>
      <p>Here I am going to write about Javascript, React and other frontend technologies</p>
      <Link href="#" passHref>
        <ButtonLink>Portfolio</ButtonLink>
      </Link>
      <Link href="/blog" passHref>
        <ButtonLink>Blog</ButtonLink>
      </Link>
    </Root>
  )
}

export default Hero
