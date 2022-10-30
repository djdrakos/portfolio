import { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import ToggleWeatherIcon from './ToggleWeatherIcon'
import useToggleFixedClass from '../hooks/useToggleFixedClass'

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
  `

const ToggleThemeButton = ({ toggleTheme }) => {
  const [ stickyRef, triggerRef ] = useToggleFixedClass()
  const themeContext = useContext(ThemeContext)

  return (
    <Toggle ref={triggerRef} onClick={toggleTheme}>
      { themeContext.type === 'dark' ? ' rainy ' : ' sunny '}
      <ToggleWeatherIcon ref={stickyRef} darkMode={themeContext.type === 'dark'} />
    </Toggle>
  )
}

export default ToggleThemeButton