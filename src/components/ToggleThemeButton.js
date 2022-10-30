import { forwardRef, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import ToggleWeatherIcon from './ToggleWeatherIcon'
import useIntersection from '../hooks/useIntersection'

const Toggle = styled.button`
  z-index: 10;
  width: 3.3rem;
  position: relative;
  vertical-align: top;
  border: none;
  letter-spacing: ${ ({ theme }) => theme.type === 'dark' && '.06rem' };
  -webkit-transition: all .2 linear;
  -moz-transition: all .2 linear;
  -o-transition: all .2 linear;
  transition: all .2 linear, opacity .2s;

  .fixed {
    position: fixed;
    top: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.type === 'dark' ? theme.color300 : theme.color400 };
  }
`

const ToggleThemeButton = forwardRef(({toggleTheme, ...props}, ref) => {
  const [nodeRef, referenceRef, IsIntersecting] = useIntersection()
  const themeContext = useContext(ThemeContext)

  return (
    <Toggle ref={referenceRef} onClick={toggleTheme}>
      { themeContext.type === 'dark' ? ' rainy ' : ' sunny '}
      <ToggleWeatherIcon ref={nodeRef} darkMode={themeContext.type === 'dark'} className={ IsIntersecting ? 'fixed' : ''} />
    </Toggle>
  )
})

export default ToggleThemeButton