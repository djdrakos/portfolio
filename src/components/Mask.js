import { forwardRef } from 'react'

const TextMask = forwardRef(({className, ...props}, ref) => {
return (
  <div className='wrapper masked'>
  <svg className='mask' xmlns="http://www.w3.org/2000/svg"  >
      <defs>
      <linearGradient id="lgrad" x1="50%" y1="100%" x2="50%" y2="0%" >
              <stop offset="0%" style={{ 'stopColor':'rgb(255,255,255)','stopOpacity':'0.00'}} />
              <stop offset="12%" style={{'stopColor':'rgb(200, 50, 50)','stopOpacity':'0.10'}} />
              <stop offset="40%" style={{'stopColor':'rgb(200, 50, 50)','stopOpacity':'0.43'}} />
              <stop offset="59%" style={{'stopColor':'rgb(200, 50, 50)','stopOpacity':'0.61'}} />
              <stop offset="93%" style={{'stopColor':'rgb(200, 50, 50)','stopOpacity':'1.00'}} />
              <stop offset="100%" style={{'stopColor':'rgb(200, 50, 50)','stopOpacity':'1.00'}} />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#lgrad)"/>
    </svg>
  </div> 
  )}
)

export default TextMask

// .mask {
//   position: sticky;
//   width: 100%;
//   top: 0;
// }


// .masked {
//   position: absolute;
//   width: 100%;
//   height: var(--gap300);
//   margin-bottom: calc(-1 * var(--gap300));
//   /* bottom: ; */
//   /* -webkit-mask-image: linear-gradient(to bottom, transparent 50%, black 100%);
//   mask-image: linear-gradient(to bottom, transparent 50%, black 100%);
//   -webkit-mask-origin: border-box;
//   mask-origin: border-box;
//   mask-position: top; */
// }