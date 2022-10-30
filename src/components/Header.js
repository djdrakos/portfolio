import styled from 'styled-components'
import Logo from './Logo'

const StyledHeader = styled.header`
  z-index: 10;
  position: fixed;
  top: 0;
  background: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  height: var(--header100);
  width: 100%;
  padding-left: calc(var(--gap100) / 4);
  border-bottom-left-radius: var(--gap50);
`

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  )
}