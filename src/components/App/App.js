import { useEffect, useRef, useState } from 'react'
import './App.css';
import About from '../About'
import Contact from '../Contact'
import Experience from '../Experience'
import Intro from '../Intro'
import Projects from '../Projects'

export default function App() {
  const [main, setMain] = useState()
  const ref = useRef();

  useEffect(() => {
    setMain(ref.current)
  }, [])

  return (
    <>
      <header>
        <img className="logo" src="./djd_icon.svg" alt="DJD icon" />
      </header>
      <main ref={ref} className="App">
        <Intro mainRef={main}/>
        <Projects />
        <Experience />
        <Contact />
        <About />
      </main>
    </>
  );
}
