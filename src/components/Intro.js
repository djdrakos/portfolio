import { useEffect, useRef, useState } from 'react'
import Section from './Section'
import * as Portal from '@radix-ui/react-portal'

export default function Intro({mainRef}) {
  const [button, setButton] = useState()
  const [position, setPosition] = useState({top: 0, left: 0})
  const buttonRef = useRef()

  function debounce(fn, ms) {
    let timer
    return () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
  }


  useEffect(() => {
    const handleReposition = (newPosition) => {
        const { top, left } = newPosition.getBoundingClientRect()
        setPosition({ top, left })
    }

    const debouncedHandleReposition = debounce(() => handleReposition(), 10)
    const newPosition =  buttonRef.current

    handleReposition(newPosition)
    window.addEventListener('resize', debouncedHandleReposition)

    return () => window.removeEventListener('resize', debouncedHandleReposition)
  }, [button])


  return (
    <Section className="intro">
      <div className="wrapper portrait">
        <img src="./dj 1.jpg" className="portrait" alt="DJ Drakos sitting on a couch, staring intently at something on their laptop" />
      </div>
      <div className="wrapper bio"> 

        <h1>
          Hi, I’m <strong>DJ Drakos!</strong>
        </h1>

        <p>
        I’m a Fullstack Software Engineer/Creative<br />
        based in 
          <button ref={buttonRef} className="toggle-mode">sunny
            <Portal.Root container={mainRef} asChild >
              <div className="weather" style={position} >
                <img  className="weather"src="./sun.svg" alt="sun icon" />
              </div>
            </Portal.Root>
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