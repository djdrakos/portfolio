import SectionContent from './SectionContent'
import styled from 'styled-components'

const StyledTechStack = styled(SectionContent)`
  z-index: 3;
  top: calc(var(--stack-block200) + var(--header100) - var(--stack-offset) - var(--section-med));
  height: var(--section-med);
  background-color: hsla(150, 70%, 60%, .15);
  border-bottom: .1rem solid hsla(150, 70%, 60%, .01);
  border-bottom-left-radius: 1rem;
  
  .content {
    margin-bottom: var(--stack-block200);
  }

  h4 {
    top: calc(var(--stack-start) + var(--stack-block100));
  }

  h5:first-of-type {
    margin-top: 0;
  }
`

export default function TechStack(props) {
  return (
    <StyledTechStack title="Tech Stack" {...props}>
      <h5>Lorem Ipsum</h5>
      <p>dolor sit amet, consectetur adipiscing elit. Phasellus porta et diam in vestibulum. Aliquam nunc enim, condimentum in volutpat viverra, ultricies non sem. Phasellus eu nisi mauris. Nunc at molestie enim. Curabitur finibus suscipit felis ut congue. Phasellus sed justo velit. Aenean neque purus, fermentum sit amet scelerisque tempus, ultrices eget massa. Etiam eget ante augue.</p>
      <p>Vivamus eu orci id nisl cursus fermentum in sed elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi efficitur nunc a quam faucibus egestas. Pellentesque viverra arcu eu suscipit sollicitudin.</p>
    </StyledTechStack>
  )
}