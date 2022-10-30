import { forwardRef, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import ToggleWeatherIcon from './ToggleWeatherIcon'
import useSticky from '../hooks/useSticky'

const Toggle = styled.button`
  z-index: 10;
  width: 3.3rem;
  position: relative;
  vertical-align: top;
  border: none;
  letter-spacing: ${ ({ theme }) => theme.type === 'dark' && '.06rem' };
  -webkit-transition: color .15s ease-out;
  -moz-transition: color .15s  ease-out;
  -o-transition: color .15s  ease-out;
  transition: color .15s ease-out;

  &:hover {
    color: ${({ theme }) => theme.type === 'dark' ? theme.color300 : theme.color400 };
  }

  .fixed {
    position: fixed;
    top: 0;
  }
  `


const ToggleThemeButton = forwardRef(({toggleTheme, ...props}, ref) => {
  const [ nodeRef, referenceRef, IsIntersecting ] = useSticky()
  const themeContext = useContext(ThemeContext)

  return (
    <Toggle ref={referenceRef} onClick={toggleTheme}>
      { themeContext.type === 'dark' ? ' rainy ' : ' sunny '}
      <ToggleWeatherIcon ref={nodeRef} darkMode={themeContext.type === 'dark'} className={ IsIntersecting ? 'fixed' : ''} />
    </Toggle>
  )
})

export default ToggleThemeButton