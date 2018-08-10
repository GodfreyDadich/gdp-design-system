import React from 'react'
import Image from './Image'

const ImageWithCaption = props =>
  <div className={`caption-left`}>
    {props.captionLocation.startsWith('top') || props.captionLocation.startsWith('left') ? 
    <figcaption>{props.caption}</figcaption> : ''}
    <Image 
      classAdd="withCaption"
      {...props}
    />
    {props.captionLocation.startsWith('bottom') || props.captionLocation.startsWith('right') ? 
    <figcaption>{props.caption}</figcaption> : ''}    
  </div>

export default ImageWithCaption