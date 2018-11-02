import React from 'react'
import Image from './Image'

const ImageWithCaption = props =>
  <figure className={`figureWithCaption`}>
    <Image 
      classAdd="withCaption"
      {...props}
    />
    <figcaption className='captionText col-6 skip-3'>{props.caption}</figcaption>
    <style jsx>{`
    .figureWithCaption {
      margin: 0;
      position: relative;

      .captionText {
        color: #7F7F81;
        font-family: 'Atlas Grotesk';
        font-weight: 500;
        display: block;

        font-size: 0.94vw;

        font-size: 12px;
        line-height: 1.35;
        letter-spacing: 0.2px;
        margin-top: 25px;
        margin-bottom: 89px;
        text-align: center;
      }
    }
    `}</style>
  </figure>

export default ImageWithCaption