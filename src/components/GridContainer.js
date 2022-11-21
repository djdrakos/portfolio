import { formatClassName } from '../helpers/formatting-helpers'
import styled from 'styled-components';
import breakpoints from '../styles/breakpoints';

const StyledGridContainer = styled.div.attrs( props => ({ style:  props }))`
  --section-height: var(--section-tall);
  --stack-block: var(--stack-block100);
  --top-offset: calc(var(--stack-block) + var(--header100) - var(--stack-offset) - var(--section-height));
  display: grid;
  grid-template-columns: repeat(12, minmax(1rem, 6rem));
  column-gap: 1rem;
  padding-inline: 15vw;
  top: var(--top-offset);
  height: var(--section-height);

  @media screen and (${breakpoints.large}) {
    padding-inline: 12vw;
  }

  @media screen and (${breakpoints.medium}) {
    padding-inline: clamp(2rem, 5vw, 3rem);
    display: flex; 
    flex-direction: column;
  }

  @media screen and (${breakpoints.medium}) {
    padding-inline: 3rem;
  }

  @media screen and (${breakpoints.small}) {
    padding-inline: 2rem;
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