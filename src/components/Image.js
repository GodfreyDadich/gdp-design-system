import React, { useState } from 'react'
import ConditionalLink from './ConditionalLink'
import ImageWrap from './ImageWrap'
import { Caption, SideBar } from './Type'
import TrackVisibility from 'react-on-screen'
import { isMobile } from 'react-device-detect'
import PropTypes from 'prop-types'

// d36aj1cv2i74vd
const Image = (props) => {
  const {
    imageTitle,
    altAsset,
    imgSource,
    linkUrl,
    caption,
    sideBar,
    imgHover,
    aspectRatio,
    classAdd,
    stackedImage,
    style,
    visibilityOverride
  } = props

  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageInView, setImageInView] = useState(false)

  const handleImageLoaded = () => {
    setImageLoaded(true)
  }
  return (
    <figure style={style} className={`${imgHover ? 'hoverWrap' : ''}${caption && caption.length > 0 ? ' withCaption' : ''}`}>
      <TrackVisibility partialVisibility className={classAdd} style={imgHover ? { position: 'relative', overflow: 'visible' } : { overflow: 'hidden' }} >
        {({ isVisible }) => {
          if (isVisible) {
            setImageInView(true)
          }
          const imageIsVisible = imageInView || visibilityOverride
          const imageSrc = imageIsVisible ? (isMobile && altAsset) ? altAsset : imgSource : ''
          return (
            <ImageWrap {...props} imageLoaded={imageLoaded} imageIsVisible={imageIsVisible} >
              <ConditionalLink linkUrl={linkUrl}>
                <img className='wrappedImage' alt={imageTitle} src={imageSrc} onLoad={handleImageLoaded} />
                {imgHover ? <img className='wrappedImage imageHover' alt={imageTitle} src={imgHover} /> : ''}
                {(sideBar && sideBar.text.length > 0)
                  ? <SideBar sideBar={sideBar} isVisible />
                  : ''}
              </ConditionalLink>
            </ImageWrap>
          )
        }}
      </TrackVisibility>

      {caption && caption.length > 0 ? <Caption classAdd={`${stackedImage ? 'col-6 skip-1 col-6-tab skip-0-tab' : 'col-6 skip-3 col-6-tab skip-1-tab'}`}>{caption}</Caption> : ''}
      <style jsx>{`
        figure {
          position: relative;
          margin: 0;
          display: block;
        }
        .wrappedImage {
          position: absolute;
          top: 0;
          left: 0;
          min-width: 100%;
          height: auto;
          opacity: 0;
          ${aspectRatio === 'noAspect'
      ? `position: relative;
          width: 100%;
          opacity: 1;
          ` : ''}            
        }
        
        .hoverWrap {
          .wrappedImage {
            transition: opacity 0.4s;
            width: 100%;

            &:first-child {
              opacity: 1;
            }
          }
          &:hover {
            .wrappedImage:first-child {
              opacity: 0;
            }
            .wrappedImage.imageHover {
              opacity: 1;
            }
          }
          .wrappedImage.imageHover {
            position: absolute;
            top: 0;
            opacity: 0;
            z-index: 10;
          } 
        }
      `}</style>
    </figure>
  )
}

Image.propTypes = {
  linkUrl: PropTypes.string,
  imageTitle: PropTypes.string,
  aspectRatio: PropTypes.oneOf(['sixteen', 'standard', 'square', 'cropped', 'noAspect']),
  fullBleed: PropTypes.bool,
  imgSource: PropTypes.string,
  verticalAlign: PropTypes.oneOf(['top', 'center', 'bottom']),
  horizontalAlign: PropTypes.oneOf(['left', 'center', 'right'])
}

Image.defaultProps = {
  aspectRatio: 'standard',
  fullBleed: false
}
export default Image
