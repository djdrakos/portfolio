import { useCallback, useState } from 'react'

const useIntersection = () => {
  const [node, setNode] = useState(null)
  const [isIntersecting, setIsIntersecting] = useState(null)

  const createIntersectionObserver = (callback) => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [0, .25, .5, .75, 1]
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
    }
    
    const nodeRef = useCallback((node) => {
      if(node) {
        const { current } = node
        current ? setNode(current) : setNode(node)
      }
    }, [])
    
    const referenceRef = useCallback((referenceNode) => {
      if(referenceNode && node) {
        const observer = createIntersectionObserver(setIsIntersecting);
        const { current } = referenceNode
        current ? observer.observe(current) : observer.observe(referenceNode)
      }
    }, [node])
    
    return [ nodeRef, referenceRef, isIntersecting ]
  }

export default useIntersection