import styled, { css } from 'styled-components';
import { forwardRef } from 'react'
import breakpoints from '../styles/breakpoints';

const StyledDiv = styled.div.attrs( props => ({ style:  props }))`
  display: flex;
  align-items: flex-start;
  
  ${ ({ options }) => options && css`
    @media screen and ${breakpoints.desktop} {
      grid-column:  ${options.l.colStart} / ${options.l.colSpan};
    }
  `}

  ${ ({ options }) => options && css`
    @media screen and ${breakpoints.tablet} {
      grid-column: ${options.m.colStart} / ${options.m.colSpan};
    }
  `}

  ${ ({ options }) => options && css`
    @media screen and ${breakpoints.mobile} {
      grid-column: ${options.s.colStart} / ${options.s.colSpan};
    }
  `}
`

const GridItem = forwardRef(({children, s, m, l, ...props}, forwardedRef) => {

const sizePropsArray = [ 
    { s }, 
    { m }, 
    { l }, 
  ]

const createGridOptions = (sizeProps) => {
  return sizeProps.reduce((options, currentSize, i) => {
    const [[ sizeName, sizeValue ]] = Object.entries(currentSize)

    if(sizeValue === undefined){
      options[sizeName] = options.default
    }

    if(typeof sizeValue === 'number') {
      options[sizeName] = { 
        colStart: 'auto', 
        colSpan: `span ${sizeValue}`
      }
      options.default = { 
        colStart: 'auto', 
        colSpan: `span ${sizeValue}`
      }
    }

    if(Array.isArray(sizeValue)) {
      options[sizeName] = { 
        colStart: sizeValue[0], 
        colSpan: `span ${sizeValue[1]}`
      }
      options.default = { 
        colStart: sizeValue[0], 
        colSpan: `span ${sizeValue[1]}`
      }
    }

    return options
  }, { default: {
    colStart: 1, 
    colSpan: 'span 12'
    }
  })
}
  

return (
  <StyledDiv options={createGridOptions(sizePropsArray)} {...props} ref={forwardedRef}>
      {children}
    </StyledDiv>
  )
})

export default GridItem
