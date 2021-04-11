import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const LogoContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 12px auto 0;
  border-radius: 60% 15%;
  box-sizing: content-box;
  height: ${({ sm }) => (sm ? '80px' : '120px')};
  width: ${({ sm }) => (sm ? '80px' : '120px')};
  padding: 0.3rem 0.4rem;
`

type Props = {
  sm?: boolean
}

function Logo({ sm }: Props): JSX.Element {
  return (
    <LogoContainer sm={sm}>
      <Image src="/images/logo.png" alt="logo" width="100%" height="100%" />
    </LogoContainer>
  )
}

export default Logo
