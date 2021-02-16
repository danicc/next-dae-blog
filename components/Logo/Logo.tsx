import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 0px auto;
  border-radius: 60% 15%;
  box-sizing: content-box;
  height: ${({ sm }) => (sm ? '80px' : '160px')};
  width: ${({ sm }) => (sm ? '80px' : '160px')};
  padding: 0.3rem 0.4rem;
`

type Props = {
  sm?: boolean
}

function Logo({ sm }: Props): JSX.Element {
  return (
    <LogoContainer sm={sm}>
      <img src="/images/logo.png" alt="logo" width="100%" />
    </LogoContainer>
  )
}

export default Logo
