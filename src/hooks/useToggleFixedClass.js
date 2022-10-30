import { useCallback, useEffect, useState } from 'react'
import { generateThresholds } from '../helpers/array-helpers'

const useToggleFixedClass = () => {
  const [stickyNode, setStickyNode] = useState(null)
  const [isIntersecting, setisIntersecting] = useState(null)

  useEffect(() => {
    if(stickyNode !== null) {
      isIntersecting && stickyNode.classList.add('fixed')
      isIntersecting === false && stickyNode.classList.contains('fixed') && stickyNode.classList.remove('fixed')
      }
  }, [stickyNode, isIntersecting])

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
    
    const stickyRef = useCallback((node) => {
      if(node) {
        setStickyNode(node)
      }
    }, [])

    const triggerRef = useCallback((node) => {
      if(node) {
        const observer = createIntersectionObserver(setisIntersecting);
        const { current } = node
        current ? observer.observe(current) : observer.observe(node)
      }
    }, [createIntersectionObserver])
    
    return [stickyRef, triggerRef]
  }

export default useToggleFixedClass