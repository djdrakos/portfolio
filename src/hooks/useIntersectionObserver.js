import { useCallback, useLayoutEffect, useState } from 'react'
import { generateThresholds } from '../helpers/array-helpers'

const useIntersectionObserver = () => {
  const [triggerNode, setTriggerNode] = useState(null)
  const [isIntersecting, setIsIntersecting] = useState()
  
  const createIntersectionObserver = useCallback(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: generateThresholds(4),
    }

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if(entry.intersectionRect.top === 0) {
          setIsIntersecting(true)
        } 
        else {
          setIsIntersecting(false)
        }
      })
    }

    return new IntersectionObserver(handleIntersect, options)
  }, [])
  
  const triggerRef = useCallback((node) => {
    if(node !== null) {
      setTriggerNode(node)
    }
  }, [])

  useLayoutEffect(() => {
    if(triggerNode !== null) {
      const observer = createIntersectionObserver();
      const { current } = triggerNode
      current ? observer.observe(current) : observer.observe(triggerNode)
      
      return () => {
        observer.disconnect()
      }
    };
  }, [triggerNode, createIntersectionObserver])
  
    return [triggerRef, isIntersecting]
  }

export default useIntersectionObserver