import './App.css';
import About from '../About'
import Career from '../Career'
import TechStack from '../TechStack'
import Intro from '../Intro'
import Projects from '../Projects'

export default function App() {

  return (
    <>
      <header>
        <img className="logo" src="./djd_icon.svg" alt="DJD icon" />
      </header>
      <main className="App">
        <Intro />
        <Projects />
        <TechStack />
        <Career />
        <About />
        <section></section>
        <section></section>
        <section></section>
      </main>
    </>
  );
}
