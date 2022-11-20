
import styled from 'styled-components';
import breakpoints from '../styles/breakpoints'

const GridContainer = styled.div.attrs( props => ({ style:  props }))`
  display: grid;
  grid-template-columns: repeat(12, minmax(1fr, 4rem));
  column-gap: 2rem;
  align-items: flex-start;

  /* ${`@media screen and ${breakpoints.tabletLg}`} {
    grid-template-columns: repeat(12, minmax(3.125rem, 4rem));
    column-gap: .625rem;
    padding-inline: max(6rem, 10vw);
  }

  ${`@media screen and ${breakpoints.mobile}`} {
    grid-template-columns: repeat(12, minmax(1.25rem, 1fr));
    column-gap: .1875rem;
    padding-inline: max(1.625rem, 6vw);
  } */
`

export default GridContainer