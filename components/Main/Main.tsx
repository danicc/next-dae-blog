import styled, { css } from 'styled-components'

const Main = styled.main`
  margin: 0 1rem;
  padding: 0.2rem 0.5rem;
  position: relative;
  top: -5rem;
  background: white;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 120px;
  border-radius: 1rem;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.md}) {
      padding: 0.5rem 2rem;
      width: 75vw;
      margin: 0 auto;
    }
  `}
`

export default Main
