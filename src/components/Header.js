import styled from 'styled-components'
import Logo from './Logo'

const StyledHeader = styled.header`
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: var(--header100);
  background: ${({ theme }) => theme.background};
  padding-left: calc(var(--gap100) / 3);
  border-bottom-left-radius: var(--gap50);
  
  .logo {
    cursor: pointer;
  }
`

export default function Header() {

  return (
    <StyledHeader>
      <Logo className="logo" onClick={() => window.scrollTo({ behavior: 'smooth', top: 0, left: 0 })}/>
    </StyledHeader>
  )
}