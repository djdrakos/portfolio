import { useCallback, useState } from 'react'
import Section from './Section'
import ToggleThemeButton from './ToggleThemeButton'

export default function Intro({currentTheme, toggleTheme, ...props}) {
  const [tipNode, setTipNode] = useState()
  const [isTipFixed, setIsTipFixed] = useState()
  
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
  

  const tipRef = useCallback((node) => {
    if(node !== null) {
      setTipNode(node)
    }
  }, [])

  const tipParentRef = useCallback((tipParentNode) => {
    if(tipParentNode && tipNode) {
      const observer = createIntersectionObserver(setIsTipFixed);
      observer.observe(tipParentNode)
    }
  }, [tipNode])

  return (
    <Section className="intro">
      <div className="wrapper spiral" >
        <span className="spiral">
        🌀
        </span>
      </div>
      <div className="wrapper portrait">
        <img src={require("../assets/dj.jpg")} className="portrait" alt="DJ Drakos sitting on a couch, staring intently at something on their laptop" />
      </div>
      <div className="wrapper bio"> 
        <h1>
          Hi, I’m <strong ref={tipParentRef}>DJ Drakos!<span ref={tipRef} className={isTipFixed ? 'tip fixed' : 'tip'}>*</span></strong> 
        </h1>
        <p>I’m a Fullstack Software Engineer/Creative
          <br/ >
          based in 
          <ToggleThemeButton currentTheme={currentTheme} toggleTheme={toggleTheme} />
          Portland, Oregon.
        </p>
        <p>I love bringing well-crafted, accessible applications to life
          <br/ >
          using modern, scalable web technologies and design patterns.
        </p>
      </div>
    </Section>
  )
}