import { formatClassName } from '../helpers/formatting-helpers'
import styled from 'styled-components';
import breakpoints from '../styles/breakpoints';

const StyledGridContainer = styled.div.attrs( props => ({ style:  props }))`
  --section-height: var(--section-tall);
  --stack-block: var(--stack-block100);
  --top-offset: calc(var(--stack-block) + var(--header100) - var(--stack-offset) - var(--section-height));
  display: grid;
  grid-template-columns: repeat(12, minmax(1rem, 4rem));
  column-gap: max(2rem, 3rem);
  padding-inline: clamp(1rem, 15vw, 9rem);
  top: var(--top-offset);
  height: var(--section-height);
  @media screen and (${breakpoints.tablet}) {
  }
`

export default function GridContainer({ title, children,...props }) {
  const className = props.className ?? formatClassName(title);
  return (
    <StyledGridContainer className={className} {...props}>
      {children}
    </StyledGridContainer>
  )
}