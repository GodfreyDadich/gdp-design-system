import React from 'react'
import ImageWrap from './ImageWrap'
import ImageZoom from 'react-medium-image-zoom'

class ImageWithZoom extends React.Component {

  render () {
    const vertRef = {
      'sixteen': 56.25,
      'standard': 75,
      'cropped': 39.06,
      'square': 100,
    }
    const hAlignRef = {
      'left': 0,
      'center': 50,
      'right': 100
    }
    const vAlignRef = {
      'top': 0,
      'center': 2,
      'bottom': 1
    }

    const {
      imageTitle,
      aspectRatio,
      imgSource,
      verticalAlign,
      horizontalAlign,
      stretchH
    } = this.props

    return (
      <ImageWrap {...this.props}>
        <ImageZoom
          image={{
            src: imgSource,
            alt: imageTitle,
            className: `img wrappedImage`,
            style: Object.assign({ 
              width: '100%',
              position: aspectRatio !== 'noAspect' ? 'absolute' : 'relative',
              opacity: aspectRatio !== 'noAspect' ? '0' : '1',
              top: '0',
              left: '0',
              overflow: 'hidden'      
            }, stretchH ? {
              height: 'auto',
              width: '100%',
              minHeight: '100%',
              minWidth: '0',
              marginTop: verticalAlign === 'top' ? '' : `-${vertRef[aspectRatio] / vAlignRef[verticalAlign]}%`,
              transform: verticalAlign === 'top' ? '' : `translateY(${vertRef[aspectRatio] / vAlignRef[verticalAlign]}%)`
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
            ${aspectRatio === 'noAspect'
        ? `position: relative;
            width: 100%;
            opacity: 1;
            ` : ''}            
          }  
          `}</style>
      </ImageWrap>
    )
  }
}
export default ImageWithZoom