
import { ThemeProvider } from 'styled-components'
import themes  from '../../styles/theme'
import { GlobalStyles } from '../../styles/global';
import useDarkMode from '../../hooks/useDarkMode';
import './App.css';
import Header from '../Header';
import Main from '../Main';

export default function App() {
const [currentTheme, toggleTheme] = useDarkMode()
let themeMode = themes[currentTheme]

  return (
    <ThemeProvider theme={themeMode}>
    <>
      <GlobalStyles />
        <Header />
        <Main currentTheme={currentTheme} toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
}
