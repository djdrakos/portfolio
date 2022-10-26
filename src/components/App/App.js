
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../../styles/theme'
import { GlobalStyles } from '../../styles/global';
import { useDarkMode } from '../../hooks/useDarkMode';
import './App.css';
import About from '../About'
import Career from '../Career'
import TechStack from '../TechStack'
import Intro from '../Intro'
import Projects from '../Projects'

export default function App() {
const [currentTheme, toggleTheme] = useDarkMode()
let themeMode = currentTheme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
    <>
      <GlobalStyles />
        <header>
          <img className="logo" src="./djd_icon.svg" alt="DJD icon" />
        </header>
        <main className="App">
          <Intro currentTheme={currentTheme} toggleTheme={toggleTheme} />
          <Projects />
          <TechStack />
          <Career />
          <About />
          <section></section>
          <section></section>
          <section></section>
        </main>
      </>
    </ThemeProvider>
  );
}
