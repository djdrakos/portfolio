import styled from 'styled-components'

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  background: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  height: var(--header100);
  width: 100%;
  padding-left: calc(var(--gap100) / 4);
  border-bottom-left-radius: var(--gap50);

  .logo {
  width: var(--gap100);
  }
`


export default function Header() {
  return (
    <StyledHeader>
      <img className="logo" src="./djd_icon.svg" alt="DJD icon" />
    </StyledHeader>
  )
}