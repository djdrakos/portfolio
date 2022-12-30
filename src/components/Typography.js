import styled from 'styled-components';
import breakpoints from '../styles/breakpoints'

const H1 = styled.h1`
  display: inline;
  margin-top: 0;
  font-size: 3.052rem;

  ${`@media screen and ${breakpoints.large}`} {font-size: 1.802rem;}

  ${`@media screen and ${breakpoints.small}`} {

  }
`

const H2 = styled.h2`
  font-size: 2.441rem;

  ${`@media screen and ${breakpoints.large}`} {font-size: 1.602rem;}

  ${`@media screen and ${breakpoints.small}`} {

  }
`

const H3 = styled.h3`
  font-size: 1.953rem;

  ${`@media screen and ${breakpoints.large}`} {font-size: 1.424rem;}

  ${`@media screen and ${breakpoints.small}`} {

  }
`

const H4 = styled.h4`
  font-size: 1.563rem;

  ${`@media screen and ${breakpoints.large}`} {font-size: 1.266rem;}

  ${`@media screen and ${breakpoints.small}`} {

  }
`

const H5 = styled.h5`
  font-size: 1.25rem;

  ${`@media screen and ${breakpoints.large}`} {font-size: 1.125rem;}
`

const H6 = styled.h6`


  ${`@media screen and ${breakpoints.large}`} {font-size: 1rem;}

  ${`@media screen and ${breakpoints.small}`} {

  }
`

const P = styled.p`
  margin-bottom: 1rem;

  ${`@media screen and ${breakpoints.small}`} {

  }
`

export { H1, H2, H3, H4, H5, H6, P } 