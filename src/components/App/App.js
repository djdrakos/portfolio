import { useEffect, useRef, useState } from 'react'
import './App.css';
import About from '../About'
import Contact from '../Contact'
import Experience from '../Experience'
import Intro from '../Intro'
import Projects from '../Projects'

export default function App() {
  const [element, setElement] = useState()
  const ref = useRef();

  useEffect(() => {
    setElement(ref.current)
  }, [])
  return (
    <>
      <header>
        <img className="logo" src="./djd_icon.svg" alt="DJD icon" />
      </header>
      <main ref={ref} className="App">
        <Intro portalLocation={element}/>
        <Projects />
        <Experience />
        <Contact />
        <About />
      </main>
    </>
  );
}
