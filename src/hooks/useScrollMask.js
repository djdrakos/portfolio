import { useCallback, useEffect, useState } from 'react'
import { generateThresholds } from '../helpers/array-helpers'

const useScrollMask = () => {
  const [node, setNode] = useState()
  const [intRatio, setIntRatio] = useState(null)
  //you will need:
  //- a reference to the node to change
  // - the degree of intersection stored in state
  // a useeffect to re-render the dom based on state

  const createIntersectionObserver = useCallback((callback) => {
    const options = {
      root: null,
      rootMatrix: '0px',
      threshold: generateThresholds(50)
    }

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        const topIntersectionRatio = (entry.boundingClientRect.height + entry.boundingClientRect.top) / entry.boundingClientRect.height
        if(topIntersectionRatio < 1) {
          callback(Math.floor(topIntersectionRatio * 100))
          console.log(Math.floor(topIntersectionRatio * 100))
        }
      })
    }

    return new IntersectionObserver(handleIntersect, options)
  }, [])

  //ref callback to store node in state
  const nodeRef = useCallback((node) => {
    if(node) {
      setNode(node)
      const observer = createIntersectionObserver(setIntRatio)
      const { current } = node
      current ? observer.observe(current) : observer.observe(node)
    }
  }, [createIntersectionObserver])

  return [nodeRef, intRatio]

}

export default useScrollMask