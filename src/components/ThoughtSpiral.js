import styled from 'styled-components'
import useIntersection from '../hooks/useIntersection'

const StyledSpiral = styled.div`
  z-index: 10;
  position: absolute;
  padding-left: 5rem;
  padding-top: 2.5rem;
  /* display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end; */
  height: fit-content;
  width: 7rem;

  > div {
    padding-top: .5rem;
  }
  
  .spiral {
    padding-top: .5rem;
    height: fit-content;
    width: fit-content;
    font-size: 2rem;
    cursor: pointer;
  }

  .fixed {
    position: fixed;
    top: 0;
  }
`

export default function ThoughtSpiral() {
  const [nodeRef, referenceRef, isFixed] = useIntersection({ rootMargin: '5rem' })

  return (
    <StyledSpiral >
      <div ref={referenceRef}>
        <span ref={nodeRef} className={isFixed ? 'spiral fixed' : 'spiral'}>
          🌀
        </span>
      </div>
    </StyledSpiral>
  )
}