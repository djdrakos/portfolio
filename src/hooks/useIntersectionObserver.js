import { useCallback, useLayoutEffect, useState } from 'react'
import { generateThresholds } from '../helpers/array-helpers'

const useIntersectionObserver = () => {
  const [triggerNode, setTriggerNode] = useState(null)
  const [isIntersecting, setIsIntersecting] = useState()
  
  const createIntersectionObserver = useCallback(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: generateThresholds(2),
    }

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if(entry.intersectionRatio < 1 && entry.intersectionRect.top === 0 && entry.intersectionRect.height !== 0) {
          setIsIntersecting(true)
        } 
        if(entry.intersectionRatio === 1) {
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


// import { useCallback, useEffect, useState } from 'react'
// import { generateThresholds } from '../helpers/array-helpers'

// const useIntersectionObserver = () => {
//   const [stickyNode, setStickyNode] = useState(null)
//   const [isIntersecting, setisIntersecting] = useState(null)

//   useEffect(() => {
//     if(stickyNode !== null) {
//       isIntersecting && stickyNode.classList.add('fixed')
//       isIntersecting === false && stickyNode.classList.contains('fixed') && stickyNode.classList.remove('fixed')
//       }
//   }, [stickyNode, isIntersecting])

//   const createIntersectionObserver = useCallback((callback) => {
//     const options = {
//       root: null,
//       rootMargin: '0px',
//       threshold: generateThresholds(1),
//     }

//     const handleIntersect = (entries) => {
//       entries.forEach((entry) => {
//         if(entry.intersectionRatio < 1) {
//           callback(true)
//         } 
//         if(entry.intersectionRatio === 1) {
//           callback(false)
//         }
//       })
//     }
    
//     return new IntersectionObserver(handleIntersect, options)
//     }, [])
    
//     const stickyRef = useCallback((node) => {
//       if(node) {
//         setStickyNode(node)
//       }
//     }, [])

//     const triggerRef = useCallback((node) => {
//       if(node) {
//         const observer = createIntersectionObserver(setisIntersecting);
//         const { current } = node
//         current ? observer.observe(current) : observer.observe(node)
//       }
//     }, [createIntersectionObserver])
    
//     return [stickyRef, triggerRef]
//   }

// export default useIntersectionObserver