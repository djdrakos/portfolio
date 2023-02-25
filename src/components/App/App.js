
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme }  from '../../styles/theme'
import { GlobalStyles } from '../../styles/global';
import useDarkMode from '../../hooks/useDarkMode';
import Header from '../Header';
import Main from '../Main';

export default function App() {
const { currentTheme, mounted, toggleTheme } = useDarkMode()

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
        { mounted &&
          <>
            <Header />
            <Main toggleTheme={toggleTheme} />
          </>
        }
    </ThemeProvider>
  );
}
