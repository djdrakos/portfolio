import styled from 'styled-components'
import ToggleWeatherIcon from './ToggleWeatherIcon'
import useIntersection from '../hooks/useIntersection'

const Toggle = styled.button`
  z-index: 10;
  width: 3.3rem;
  position: relative;
  vertical-align: top;
  border: none;
  letter-spacing: ${ ({ currentTheme }) => currentTheme === 'dark' && '.06rem' };

  svg {
    width: 2.5rem;
    margin-top: .3rem;
    position: absolute;
    transform: translate(-2.3rem);
    fill: ${({ theme }) => theme.fill};
    mix-blend-mode: multiply;
    opacity: .5;
    -webkit-transition: all .15s linear;
    -moz-transition: all .15s linear;
    -o-transition: all .15s linear;
    transition: all .15s linear, opacity .1s;
  }

  svg:hover {
    opacity: 1;
  }

  .fixed {
    position: fixed;
    top: 0;
  }
`

export default function ToggleThemeButton({currentTheme, toggleTheme, ...props}) {
  const [nodeRef, referenceRef, IsIntersecting] = useIntersection()
  
  return (
    <Toggle currentTheme={currentTheme} ref={referenceRef} onClick={toggleTheme}>
      <span>
        &nbsp;{ currentTheme === 'dark' ? 'rainy' : 'sunny' }&nbsp;
      </span>
      <ToggleWeatherIcon ref={nodeRef} darkMode={currentTheme === 'dark'} className={ IsIntersecting ? 'fixed' : ''} />
    </Toggle>
  )
}