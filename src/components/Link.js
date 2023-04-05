import styled from 'styled-components'
import { forwardRef } from 'react'

const A = styled.a`
`
const Link = forwardRef(({ href, isInternal = false, children, ...props}, forwardedRef) => {
  //Set default targets for internal and external links
  //Passing a "target" attribute to the component will override the default
  const getTarget = () => {
    if(isInternal) {
      return '_self'
    }
      return '_blank'
  }

  const attributes = {
    href: href,
    target: getTarget()
  }
  
  if(!isInternal) {
    attributes.rel = "noreferrer"
  }

  return (
    <A {...attributes} {...props} ref={forwardedRef}>
      {children}
    </A>
  )
})

export default Link

