import { useCallback, useState } from 'react'

const useSticky = () => {
  const [node, setNode] = useState(null)
  const [isIntersecting, setIsIntersecting] = useState(null)

  const createIntersectionObserver = useCallback((callback) => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: [0, ., .5, .75, 1],
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
        const { current } = node
        current ? setNode(current) : setNode(node)
      }
    }, [])
    
    const referenceRef = useCallback((referenceNode) => {
      if(referenceNode && node) {
        const observer = createIntersectionObserver(setIsIntersecting, options);
        const { current } = referenceNode
        current ? observer.observe(current) : observer.observe(referenceNode)
      }
    }, [node, createIntersectionObserver, options])
    
    return [ nodeRef, referenceRef, isIntersecting, node, setOptions ]
  }

export default useSticky