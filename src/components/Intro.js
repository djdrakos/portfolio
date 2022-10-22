import { useCallback, useEffect, useState } from 'react'
import Section from './Section'
import {ReactComponent as WeatherToggle} from '../assets/sun.svg'
// import * as Portal from '@radix-ui/react-portal'

export default function Intro({mainNode}) {
  const [toggleNode, setToggleNode] = useState()
  // const [portalPos, setPortalPos] = useState()
  
  // const setPosition = (node) => {
  //   if(node !== null) {
  //     const { top, left } = node.getBoundingClientRect()
  //     const newPos = { top, left:  left + 10}
  //     setPortalPos(newPos)
  //   }
  // }
  
  //get button position on initial render
  const toggleRef = useCallback((node) => {
    if(node !== null) {
      setToggleNode(node)
      // setPosition(node)
    }
  }, [])
  
  //add resize event listener on page load
  // useEffect(() => {
  //   const debouncedHandleResize = debounce(() => setPosition(buttonNode), 10)
    
  //   window.addEventListener('resize', debouncedHandleResize)

  //   return () => window.removeEventListener('resize', debouncedHandleResize)
  // }, [buttonNode])

  //util function for positioning useEffect
  // function debounce(fn, ms) {
  //   let timer
  //   return () => {
  //     clearTimeout(timer)
  //     timer = setTimeout(() => {
  //       timer = null
  //       fn.apply(this, arguments)
  //     }, ms)
  //   };
  // }


  return (
    <Section className="intro">
      <div className="wrapper portrait">
        <img src="../assets/dj.jpg" className="portrait" alt="DJ Drakos sitting on a couch, staring intently at something on their laptop" />
      </div>
      <div className="wrapper bio"> 

        <h1>
          Hi, I’m <strong>DJ Drakos!</strong>
        </h1>

        <p>
        I’m a Fullstack Software Engineer/Creative<br />
        based in 
          <button  className="toggle-weather">&nbsp;sunny&nbsp;
            <WeatherToggle ref={toggleRef} className='weather' />
          </button>
        Portland, Oregon.
        </p>

        <p>
        I love coding well-crafted, accessible applications<br />
        using modern, scalable web technologies and design patterns.
        </p>

      </div>
    </Section>
  )
}