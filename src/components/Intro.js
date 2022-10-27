import Section from './Section'
import ToggleThemeButton from './ToggleThemeButton'
import useIntersection from '../hooks/useIntersection'
import ThoughtSpiral from './ThoughtSpiral'

export default function Intro({currentTheme, toggleTheme, ...props}) {
  const [ nodeRef, referenceRef, isFixed ] = useIntersection()

  return (
    <Section className="intro">
      <ThoughtSpiral />
      <div className="wrapper portrait">
        <img src={require("../assets/dj.jpg")} className="portrait" alt="DJ Drakos sitting on a couch, staring intently at something on their laptop" />
      </div>

      <div className="wrapper bio"> 
        <h1>
          Hi, I’m 
          <strong ref={referenceRef}>
            &nbsp;DJ Drakos!
            <span ref={nodeRef} className={isFixed ? 'tip fixed' : 'tip'}>
              *
            </span>
          </strong> 
        </h1>
        <p>
          I’m a Fullstack Software Engineer/Creative
          <br/ >
          based in 
          <ToggleThemeButton currentTheme={currentTheme} toggleTheme={toggleTheme} />
          Portland, Oregon.
        </p>
        <p>
          I love bringing well-crafted, accessible applications to life
          <br/ >
          using modern, scalable web technologies and design patterns.
        </p>
      </div>
    </Section>
  )
}