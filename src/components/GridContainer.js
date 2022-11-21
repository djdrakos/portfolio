import { formatClassName } from '../helpers/formatting-helpers'
import styled from 'styled-components';
import breakpoints from '../styles/breakpoints';

const StyledGridContainer = styled.div.attrs( props => ({ style:  props }))`
  --section-short: calc(5 * var(--stack-block100));
  --section-med: calc(12 * var(--stack-block100));
  --section-tall: calc(15 * var(--stack-block100));
  --section-height: var(--section-tall);
  --top-offset: calc(var(--stack-block) + var(--header100) - var(--stack-offset) - var(--section-height));

  display: grid;
  grid-template-columns: repeat(12, minmax(1rem, 6rem));
  column-gap: 1rem;
  padding-left: 12vw;
  padding-right: 18vw;
  top: var(--top-offset);
  height: var(--section-height);

  @media screen and (${breakpoints.large}) {
    padding-left: 10vw;
    padding-right: 16vw;
  }
  
  @media screen and (${breakpoints.medium}) {
    padding-inline: 3rem;
    display: flex; 
    flex-direction: column;
  }

  @media screen and (${breakpoints.small}) {
    padding-inline: 2rem;
    --section-short: calc(6 * var(--stack-block100));
    --section-med: calc(15 * var(--stack-block100));
    --section-tall: calc(20 * var(--stack-block100));
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