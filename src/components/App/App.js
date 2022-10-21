import './App.css';
import * as Portal from '@radix-ui/react-portal'

function App() {
  return (
    <>
      <header>
        <img className="logo" src="./djd_icon.svg" alt="DJD icon" />
      </header>
      <main className="App">
        <section className="intro">
          <div className="wrapper portrait">
            <img src="./dj 1.jpg" className="portrait" alt="DJ Drakos sitting on a couch, staring intently at something on their laptop"></img>
          </div>
          <div className="wrapper bio"> 
            <h1>
              Hi, I’m  <strong>DJ Drakos!</strong>
            </h1>
            <p>
            I’m a Fullstack Software Engineer/Creative<br />
            based in 
              {/* //useRef + .getBoundingClientRect() for position, pass to portal?? */}
            <Portal.Root>
              <button className="toggle-mode">sunny
                <img className="weather" src="./sun.svg" alt="sun icon" />
              </button>
            </Portal.Root>
            Portland, Oregon.
            </p>
            <p>
            I love coding well-crafted, accessible applications<br />
            using modern, scalable web technologies and design patterns.
            </p>
          </div>
        </section>
        <section className="projects">
          <h2>
          Projects
          </h2>
          <p>details</p>
        </section>
        <section className="experience">
          <h2>
            Experience
          </h2>
          <p>details</p>
        </section>
        <section className="contact">
          <h2>
          Contact
          </h2>
          <p>details</p>
        </section>
        <section className="about">
          <h2>
          About
          </h2>
          <p>details</p>
        </section>
        <section></section>
        <section></section>
        <section></section>
      </main>
    </>
  );
}

export default App;
