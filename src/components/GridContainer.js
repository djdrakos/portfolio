import { formatClassName } from '../helpers/formatting-helpers'
import styled from 'styled-components';
import breakpoints from '../styles/breakpoints';
import { forwardRef } from 'react';

const StyledGridContainer = styled.div.attrs( props => ({ style:  props }))`
  --section-short: calc(29rem + var(--stack-block100));
  --section-med: calc(36.8rem + var(--stack-block100));
  --section-tall: calc(45rem + var(--stack-block100));
  --section-xtall: calc(45rem + var(--stack-block100));
  --section-height: var(--section-tall);
  --top-offset: calc(var(--stack-block) + var(--header100) - var(--stack-offset) - var(--section-height));

  display: grid;
  grid-template-columns: repeat(12, minmax(1rem, 6rem));
  column-gap: 1rem;
  padding-left: 12vw;
  padding-right: 18vw;
  top: var(--top-offset);
  height: var(--section-height);
  scroll-margin-top: var(--top-offset);

  ${`@media screen and ${breakpoints.large}`} {
    --section-short: calc(31rem + var(--stack-block100));
    --section-med: calc(40rem + var(--stack-block100));
    --section-tall: calc(45rem + var(--stack-block100));
    --section-xtall: calc(48rem + var(--stack-block100));
    padding-left: 10vw;
    padding-right: 12vw;
  }
  
  ${`@media screen and ${breakpoints.medium}`} {
    --section-short: calc(32rem + var(--stack-block100));
    --section-med: calc(41rem + var(--stack-block100));
    --section-tall: calc(45rem + var(--stack-block100));
    --section-xtall: calc(48rem + var(--stack-block100));
    padding-inline: 3rem;
    display: flex; 
    flex-direction: column;
    column-gap: none;
  }

  ${`@media screen and ${breakpoints.small}`} {
    padding-inline: 2rem;
    --section-short: calc(38rem + var(--stack-block100));
    --section-med: calc(48rem + var(--stack-block100));
    --section-tall: calc(57rem + var(--stack-block100));
    --section-xtall: calc(63rem + var(--stack-block100));
  }

  ${`@media screen and ${breakpoints.xSmall}`} {
    --section-short: calc(48rem + var(--stack-block100));
    --section-med: calc(64rem + var(--stack-block100));
    --section-tall: calc(72rem + var(--stack-block100));
    --section-xtall: calc(78rem + var(--stack-block100));
  }


`

const GridContainer = forwardRef(({ title, children,...props }, forwardRef) => {
  const className = props.className ?? formatClassName(title);
  return (
    <StyledGridContainer className={className} ref={forwardRef} {...props}>
      {children}
    </StyledGridContainer>
  )
})

export default GridContainer