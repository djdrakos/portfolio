import { useCallback, useState } from 'react'
import Section from './Section'
import ToggleWeatherIcon from './ToggleWeatherIcon'

export default function Intro({...props}) {
  const [toggleNode, setToggleNode] = useState()

  const toggleRef = useCallback((node) => {
    if(node !== null) {
      setToggleNode(node)
    }
  }, [])

  const buttonRef = useCallback((node) => {
    if(node && toggleNode) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: [0, 1]
      }
      
      const handleIntersect = (entries) => {
        entries.forEach((entry) => {
          if(entry.intersectionRatio < 1) {
            toggleNode.classList.add('fixed')
          } 
          if(entry.intersectionRatio === 1) {
            if(toggleNode.classList.contains('fixed')) {
              toggleNode.classList.remove('fixed')
            }
          }
        })
      }
      
      const observer = new IntersectionObserver(handleIntersect, options)
      observer.observe(node)
    }
  }, [toggleNode])

  return (
    <Section className="intro">
      <div className="wrapper portrait">
        <img src={require("../assets/dj.jpg")} className="portrait" alt="DJ Drakos sitting on a couch, staring intently at something on their laptop" />
      </div>
      <div className="wrapper bio"> 

        <h1>
          Hi, I’m <strong>DJ Drakos!</strong>
        </h1>

        <p>
        I’m a Fullstack Software Engineer/Creative<br />
        based in 
          <button ref={buttonRef} className="toggle-weather">&nbsp;sunny&nbsp;
            <ToggleWeatherIcon ref={toggleRef} className='weather' />
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