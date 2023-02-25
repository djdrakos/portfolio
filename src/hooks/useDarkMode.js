import { useEffect, useState } from 'react'

const useDarkMode = () => {
  const [currentTheme, setTheme] = useState()
  const [loading, setLoading] = useState(true)
  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
    setLoading(false)
  }
  
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if(localTheme) { 
      setMode(localTheme)
    } else {
      const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').match
      prefersDarkMode ? setMode('dark') : setMode('light')
    }
  }, [])
    
  const toggleTheme = () => {
    currentTheme === 'light' ? setMode('dark') : setMode('light')
  }

  return { currentTheme, loading, toggleTheme }
}

export default useDarkMode