import { useEffect, useState } from 'react'

export const useDarkMode = () => {
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

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme 
      ? setTheme(localTheme)
      : window.localStorage.setTheme('theme', 'light')
  }, [])

  return [currentTheme, toggleTheme]
}

