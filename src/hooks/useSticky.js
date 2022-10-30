import { useCallback, useState } from 'react'
import { generateThresholds } from '../helpers/array-helpers'

const useSticky = () => {
  const [isIntersecting, setIsIntersecting] = useState(null)

  const createIntersectionObserver = useCallback((callback) => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: generateThresholds(1),
    }

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if(entry.intersectionRatio < 1) {
          callback(true)
        } 
        if(entry.intersectionRatio === 1) {
          callback(false)
        }
      })
    }
    
    return new IntersectionObserver(handleIntersect, options)
    }, [])
    
    const nodeRef = useCallback((node) => {
      if(node) {
        const observer = createIntersectionObserver(setIsIntersecting);
        const { current } = node
        current ? observer.observe(current) : observer.observe(node)
      }
    }, [createIntersectionObserver])
    
    return [nodeRef, isIntersecting]
  }

export default useSticky