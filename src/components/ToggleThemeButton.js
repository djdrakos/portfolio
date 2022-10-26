import styled from 'styled-components'
import { useCallback, useState } from 'react'
import ToggleWeatherIcon from './ToggleWeatherIcon'

const Toggle = styled.button`
  z-index:10;
  width: 3.3rem;
  position: relative;
  vertical-align: top;
  border: none;
  letter-spacing: ${ ({ currentTheme }) => currentTheme === 'dark' && '.06rem' };

  .weather {
    width: 2.5rem;
    padding-top: .3rem;
    padding-left: .02rem;
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

  .weather:hover {
    opacity: 1;
  }
`

export default function ToggleThemeButton({currentTheme, toggleTheme, ...props}) {
  const [toggleNode, setToggleNode] = useState()
  const [isToggleFixed, setIsToggleFixed] = useState()

  const createIntersectionObserver = (callback) => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [0, 1]
    }
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if(entry.intersectionRatio < 1) {
          callback(true)
        } 
        if(entry.intersectionRatio === 1) {
          callback(false)
        }
      })
    }
    return new IntersectionObserver(handleIntersect, options)
  }
  
  const toggleRef = useCallback((node) => {
    if(node !== null) {
      setToggleNode(node)
    }
  }, [])  
  
  const toggleParentRef = useCallback((toggleParentNode) => {
    if(toggleParentNode && toggleNode) {
      const observer = createIntersectionObserver(setIsToggleFixed);
      observer.observe(toggleParentNode)
    }
  }, [toggleNode])


  return (
    <Toggle currentTheme={currentTheme} ref={toggleParentRef} onClick={toggleTheme}>
        &nbsp;{ currentTheme === 'dark' ? 'rainy' : 'sunny' }&nbsp;
      <ToggleWeatherIcon ref={toggleRef} className={isToggleFixed ? 'weather fixed' : 'weather'} theme={currentTheme} />
    </Toggle>
  )
}