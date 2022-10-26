import { useState } from 'react'

const useDarkMode = () => {
  const [currentTheme, setTheme] = useState(() => window.localStorage.getItem('theme') || 'light')
  const toggleTheme = () => {
    if(currentTheme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  return [currentTheme, toggleTheme]
}

export default useDarkMode