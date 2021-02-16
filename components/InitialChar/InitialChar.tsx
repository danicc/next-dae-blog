import React from 'react'
import styled, { css } from 'styled-components'

const Initiale = styled.span`
  position: absolute;
  font-size: 3.5rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: 0;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 3.5rem;
    }
  `}
`
type Props = {
  children: React.ReactNode
}

function InitialChar({ children }: Props): JSX.Element {
  return <Initiale>{children}</Initiale>
}

export default InitialChar
