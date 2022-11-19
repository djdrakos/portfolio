import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

/*
  Adapted from Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html, body, #root {
  height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.background};
  font-family: 'Source Serif Pro', 'serif';
  font-weight: 400;
  line-height: 1.5;
  scroll-behavior: smooth;
  -webkit-transition: background-color .25s ease-out, color .25s ease-out;
  -moz-transition: background-color .25s ease-out, color .25s ease-out;
  -o-transition: background-color .25s ease-out, color .25s ease-out;
  transition: background-color .25s ease-out, color .25s ease-out;
}

#root {
  margin: 0 auto;
}

img, picture {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
  background: inherit;
  padding: 0;
}

ul, ol {
  list-style-type: none;
  padding: 0;
}

button, a {
  overflow: hidden;
  cursor: pointer;
  color: inherit;
  border: none;
}

p {
  margin-bottom: 1rem;
}

h1, h2, h3, h4, h5 {
  margin: 3rem 0 1.38rem;
  font-family: 'Source Serif Pro', serif;
  font-weight: 600;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2 {
  font-size: 2.441rem;
}

h3 {
  font-size: 1.953rem;
}

h4 {
  font-size: 1.563rem;
}

h5 {
  font-size: 1.25rem;
}

small, .text_small {
  font-size: 0.8rem;
}

a {
  text-decoration: none;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  -webkit-transition: all .1s;
  -moz-transition: all .1s;
  -o-transition: all .1s;
  transition: all .1s;
}

a:hover {
  border-bottom-style: solid; 
  border-bottom-width: .1rem;
}

:root {
  --header100: 4rem;
  --bio-pic100: 15rem;
  --bio-pic200: calc(2 * var(--bio-pic100));
  --bio-pic300: calc(3 * var(--bio-pic100));
  --gap100: 3rem;
  --gap50: calc(var(--gap100) / 2);
  --gap150: calc(1.5 * var(--gap100));
  --gap200: calc(2 * var(--gap100));
  --gap300: calc(3 * var(--gap100));
  --stack-block100: 3rem;
  --stack-block200: calc(2 * var(--stack-block100));
  --stack-block300: calc(3 * var(--stack-block100));
  --stack-block400: calc(4 * var(--stack-block100));
  --stack-offset: .25rem;
  --stack-start: calc(var(--header100) + var(--stack-offset));
  --section-short: var(--bio-pic100);
  --section-med: var(--bio-pic200);
  --section-tall: var(--bio-pic300);
  --section-height: var(--section-short);
}
`
