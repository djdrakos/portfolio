// import { useCallback, useState } from 'react'
import './App.css';
import About from '../About'
import Contact from '../Contact'
import Experience from '../Experience'
import Intro from '../Intro'
import Projects from '../Projects'

export default function App() {
  // const [mainNode, setMainNode] = useState()

  // const mainRef = useCallback(node => {
  //   if(node !== null) {
  //     setMainNode(node)
  //   }
  // }, [])

  return (
    <>
      <header>
        <img className="logo" src="./djd_icon.svg" alt="DJD icon" />
      </header>
      <main className="App">
        <Intro />
        <Projects />
        <Experience />
        <Contact />
        <About />
        <section></section>
        <section></section>
        <section></section>
      </main>
    </>
  );
}
