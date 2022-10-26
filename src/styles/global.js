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
  cursor: pointer;
  color: inherit;
}

p {
  margin-bottom: 1rem;
}

h1, h2, h3, h4, h5 {
  margin: 3rem 0 1.38rem;
  font-family: 'Source Sans Pro', sans-serif;
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
  font-size: 101%;
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
`


/* @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,300..700;1,200..700&family=Source+Sans+Pro:ital,wght@0,200..900;1,200..900&family=Source+Serif+Pro:ital,wght@0,200..900;1,200..900&family=DM+Mono:ital,wght@0,300..500;1,300..500&family=Sanchez&family=Space+Mono&display=swap'); */

