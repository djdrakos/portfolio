import './App.css';

function App() {
  return (
    <>
      <header>
        <img className="logo" src="./djd_icon.svg" alt="DJD icon" />
      </header>
      <main className="App">
        <button className="toggle-mode">
          <img className="weather" src="./sun.svg" alt="sun icon" />
        </button>
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
