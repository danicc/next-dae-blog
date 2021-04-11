import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { Logo } from '../Logo'
import { LanguageSelector } from '../LanguageSelector'

const Root = styled.header`
  height: 33vh;
  max-height: 330px;
  min-height: 300px;
  padding: 0.5rem 2rem 1rem;
  background-image: linear-gradient(-185deg, rgba(53, 114, 188, 0.7), rgba(26, 26, 26, 0.9)),
    url('/images/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const LogoAndLanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.md}) {
      flex-direction: row;
      align-items: flex-start;
    }
  `}
`

const LogoContainer = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;

  & h3 {
    flex: 1;
    font-size: 2.5rem;
    color: #fff;
    margin: 0;
    text-align: center;

    ${({ theme }) => css`
      @media (min-width: ${theme.breakpoints.md}) {
        text-align: left;
      } ;
    `}
  }
`

const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 2rem 0;
  cursor: pointer;
`

type NavLinkProps = {
  isActive?: boolean
}

const NavLink = styled.a<NavLinkProps>`
  padding: 0.5rem;
  cursor: pointer;
  color: white;
  text-decoration: none;
  border-bottom: ${({ isActive }) => (isActive ? '3px solid rgb(85, 140, 207);' : 'none')};
`

function Header(): React.ReactElement {
  const router = useRouter()

  return (
    <Root>
      <LogoAndLanguageContainer>
        <Link href="/" passHref>
          <LogoContainer>
            <Logo sm />
            <h3>Daniel Esquinazi</h3>
          </LogoContainer>
        </Link>
        <LanguageSelector />
      </LogoAndLanguageContainer>
      <Nav>
        <Link href="/" passHref>
          <NavLink isActive={router.pathname === '/'}>Home</NavLink>
        </Link>
        <Link href="/blog" passHref>
          <NavLink isActive={router.pathname === '/blog'}>Blog</NavLink>
        </Link>
        <NavLink
          href="https://danicc.github.io/dae-portfolio/"
          isActive={router.pathname.startsWith('/portfolio')}
        >
          Portfolio
        </NavLink>
      </Nav>
    </Root>
  )
}

export default Header
