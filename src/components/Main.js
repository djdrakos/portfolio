import styled from 'styled-components'
import { useEffect, useRef, useReducer } from 'react'
import About from './About'
import Career from './Career'
import Hero from './Hero'
import Projects from './Projects'
import TechStack from './TechStack'
import { generateThresholds } from '../helpers/array-helpers'
import { formatCamelCase } from '../helpers/formatting-helpers';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  row-gap: var(--gap300);
  padding-top: var(--gap300);
  padding-bottom: calc(100vh - var(--header100) - var(--stack-block400));
`
const initialState = {}

function reducer(state, { type, payload }) {
  switch (type) {
    case 'updateMask': {
        return { 
          ...state, 
          ...payload
        }
    }
    default: {
      throw new Error('Unsupported dispatch type')
    }
  }
}

export default function Main({ currentTheme, toggleTheme }) {
  const maskHelper1 = useRef()
  const maskHelper2 = useRef()
  const maskHelper3 = useRef()
  const [state, dispatch] = useReducer(reducer, initialState)
  
  useEffect(() => {
    const options = { 
      root: null, 
      rootMargin: '0px', 
      threshold: generateThresholds(100)
    }

    const observer = new IntersectionObserver(
      (entries) => { 
        entries.forEach((entry, index) => {
          if(entry.intersectionRatio < 1 && entry.intersectionRect.top === 0 && entry.intersectionRect.height !== 0) {
              const target = formatCamelCase(entry.target.classList[0])
              const maskLength = `${-1 * entry.boundingClientRect.top}px`
              const object = { 
                [target]: maskLength
              }
              dispatch({type: 'updateMask', payload: object})
        }
      })
    },
      options)
    
    if(maskHelper1 && maskHelper2 && maskHelper3) {
      const nodeArr = [maskHelper1.current, maskHelper2.current, maskHelper3.current]
      nodeArr.forEach((node) => observer.observe(node))
    }

    return () => observer.disconnect()
  }, [maskHelper1, maskHelper2, maskHelper3])


  // const nodeRef = useCallback((node, setNode) => {
  //   if(node) {
  //     setNode(node)
  //   }
  // }, [])

  return (
    <StyledMain className="App" >
      <Hero currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Projects />
      <TechStack mask={state.techStack ? state.techStack : '0px'} ref={maskHelper1}/>
      <Career mask={state.career ? state.career : '0px'} ref={maskHelper2}/>
      <About mask={state.about ? state.about : '0px'} ref={maskHelper3}/>
    </StyledMain>
  )
}