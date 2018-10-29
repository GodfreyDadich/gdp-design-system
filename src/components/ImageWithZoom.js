import React from 'react'
import ImageZoom from 'react-medium-image-zoom'

const vertRef = {
  'sixteen' : 56.25,
  'standard' : 75,
  'cropped' : 39.06,
  'square' : 100,
}
const hAlignRef = {
  'left': 0,
  'center': 50,
  'right': 100,
}
const vAlignRef = {
  'top': 0,
  'center': 2,
  'bottom': 1
}

const ImageWithZoom = ({
  imageTitle,
  aspectRatio,
  fullBleed,
  imgSource,
  verticalAlign,
  horizontalAlign,
  classAdd,
  stretchH
}) =>
<div className={`imageWrap ${aspectRatio} ${fullBleed ? 'fullBleed' : ''} ${classAdd}`}>
  <ImageZoom
    image={{
      src: imgSource,
      alt: imageTitle,
      className: `img wrappedImage`,
      style: Object.assign({ 
        width: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        overflow: 'hidden'      
      }, stretchH ? {
        height: 'auto',
        width: '100%',
        minHeight: '100%',
        minWidth: '0',
        marginTop: verticalAlign === 'top' ? '' : `-${vertRef[aspectRatio]/vAlignRef[verticalAlign]}%`,
        transform: verticalAlign === 'top' ? '' : `translateY(${vertRef[aspectRatio]/vAlignRef[verticalAlign]}%)`
      } : {
        height: '100%',
        width: 'auto',
        minWidth: '100%',
        minHeight: 0,
        marginLeft: `${hAlignRef[horizontalAlign]}%`,
        transform: `translateX(-${hAlignRef[horizontalAlign]}%)`        
      })
    }}
    zoomImage={{
      src: imgSource,
      alt: imageTitle
    }}
    />
    <style jsx>{`
      .wrappedImage {
        position: absolute;
        top: 0;
        left: 0;
        min-width: 100%;
        height: auto;
        min-height: 100%;
        opacity: 0;
      }    
      .imageWrap {
        position: relative;
        overflow: hidden;
        height: auto;
        background: ${aspectRatio !== 'noAspect' ? `url(${imgSource})` : '#f2f2f2'};
        background-position-x: ${horizontalAlign};
        background-position-y: ${verticalAlign};
        background-size: cover;
        background-repeat: no-repeat;
        transition: transform 0.5s;

        &.sixteen {
          padding-top: 56.25%;
        }
        &.standard {
          padding-top: 75%;
        }
        &.cropped {
          padding-top: 39.06%;
        }
        &.square {
          padding-top: 100%;
        }
        &.zoomedIn {
          transform: scale(1.5);
        }
        &.noAspect {
          .wrappedImage {
            position: relative;
            width: 100%;
            opacity: 1;
          }
        }        
      }

    `}</style>
  </div>  
export default ImageWithZoom