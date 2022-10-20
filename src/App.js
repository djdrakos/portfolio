// import './djd_icon.svg'
import './App.css';

function App() {
  return (
    <>
      <header>
        <img src="./djd_icon.svg" alt="DJD icon" />
      </header>
      <main className="App">
        <section></section>
          <button className="toggle-mode">
            <img src="./sun.png" alt="sun icon" width="40px" />
          </button>
        <section className="projects">
          <h2>
          Projects
          </h2>
        </section>
        <section className="experience">
          <h2>
            Experience
          </h2>
        </section>
        <section className="contact">
          <h2>
          Contact
          </h2>
        </section>
        <section className="about">
          <h2>
          About
          </h2>
        </section>
        <section></section>
      </main>
    </>
  );
}

export default App;
