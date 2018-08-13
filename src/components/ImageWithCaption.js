import React from 'react'
import Image from './Image'

const ImageWithCaption = props =>
  <figure className={`figureWithCaption caption-${props.captionLocation}`}>
    {props.captionLocation.startsWith('top') || props.captionLocation.startsWith('left') ? 
    <figcaption className='captionText'>{props.caption}</figcaption> : ''}
    <Image 
      classAdd="withCaption"
      {...props}
    />
    {props.captionLocation.startsWith('bottom') || props.captionLocation.startsWith('right') ? 
    <figcaption className='captionText'>{props.caption}</figcaption> : ''}
    <style jsx>{`
    .figureWithCaption {
      margin: 0;
      position: relative;

      .captionText {
        display: inline-block;
        width: 33%;
        font-size: 11px;
        vertical-align: top;
      }
      .withCaption {
        display: inline-block;
        vertical-align: top;
      }
    }
    .caption-topRight,
    .caption-bottomRight {
      .captionText {
        float: right;
      }
    }
    
    .caption-leftBottom,
    .caption-leftTop,
    .caption-rightTop,
    .caption-rightBottom {
      width: 66%;

      .captionText {
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    .caption-leftTop,
    .caption-leftBottom {
      padding-left: 33%;
    }
    
    .caption-leftBottom {
      .captionText {
        top: auto;
        bottom: 0;
      }
    }

    .caption-rightTop,
    .caption-rightBottom {
      padding-right: 33%;
      .captionText {
        right: 0;
        left: auto;
      }
    }

    .caption-rightBottom {
      .captionText {
        top: auto;
        bottom: 0;
      }
    }

    `}</style>
  </figure>

export default ImageWithCaption