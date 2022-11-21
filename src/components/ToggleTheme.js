import { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import ToggleWeatherIcon from './ToggleWeatherIcon'
import useIntersectionObserver from '../hooks/useIntersectionObserver'
import * as Toggle from '@radix-ui/react-toggle'

const StyledSpan= styled.span`
  position: relative;
  z-index: 10;
  display: inline-block;
  text-align: justify;
  width: 2.71125rem;
  border: none;
  letter-spacing: ${ ({ theme }) => theme.type === 'dark' && '.06rem' };
  -webkit-transition: color .15s ease-out;
  -moz-transition: color .15s  ease-out;
  -o-transition: color .15s  ease-out;
  transition: color .15s ease-out;

  &:hover {
    color: ${({ theme }) => theme.type === 'dark' ? theme.color300 : theme.color400 };
  }

  .toggle-theme {
    border-radius: 50%;
    border: none;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .3rem;
    padding: .5rem;
    transform: translate(.5rem, -.5rem);
    mix-blend-mode: ${({ theme }) => theme.type === 'dark' ? 'lighten' : 'multiply' };
  }

  .fixed {
    position: fixed;
    top: 0;
  }
  `

const ToggleTheme = ({ toggleTheme, ...props }) => {
  const [ triggerRef, isIntersecting ] = useIntersectionObserver()
  const { type } = useContext(ThemeContext)

  return (
    <StyledSpan ref={triggerRef} {...props}>
      <Toggle.Root className={isIntersecting ? 'toggle-theme fixed' : 'toggle-theme'} aria-label='Toggle theme' pressed={type === 'dark'} onPressedChange={toggleTheme}>
        <ToggleWeatherIcon type={type} />
      </Toggle.Root>
      {type === 'dark' ? 'rainy' : 'sunny'}
    </StyledSpan>
  )
}

export default ToggleTheme