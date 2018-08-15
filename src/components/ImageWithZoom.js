import React from 'react'
import ImageZoom from 'react-medium-image-zoom'

const alignRef = {
  'left': 0,
  'center': 50,
  'right': 100,
  'top': 0,
  'center': 50,
  'bottom': 100
}

const ImageWithZoom = ({
  imageTitle,
  aspectRatio,
  fullBleed,
  imgSource,
  verticalAlign,
  horizontalAlign,
  classAdd
}) =>

<div className={`imageWrap ${aspectRatio} ${fullBleed ? 'fullBleed' : ''} ${classAdd}`}>
  <ImageZoom
    image={{
      src: imgSource,
      alt: imageTitle,
      className: 'img wrappedImage',
      style: { 
        width: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        width: 'auto',
        height: 'auto',
        maxHeight: '100%',
        minWidth: '100%',
        overflow: 'hidden',
        marginLeft: `${alignRef[horizontalAlign]}%`,
        transform: `translateX(-${alignRef[horizontalAlign]}%)`
      }
    }}
    zoomImage={{
      src: imgSource,
      alt: imageTitle
    }}
    />
    <style jsx>{`
      .imageWrap {
        position: relative;
        width: 100%;
        overflow: hidden;
        height: auto;

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
      }

      .wrappedImage {
        position: absolute;
        top: 0;
        left: 0;
        max-width: 100%;
        height: auto;
        min-height: 100%;
      }      
    `}</style>
  </div>  

export default ImageWithZoom