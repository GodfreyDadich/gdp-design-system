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
    visibilityOverride,
    loadIndex,
    logoSVG,
    loadIndicator
  } = props

  const paddingRef = {
    sixteen: '56.25%',
    standard: '75%',
    cropped: '41.67%',
    square: '100%',
    doubleWide: 'calc( 50% - 12px )',
    cover: '133%',
    custom: props.customPadding
  }

  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageInView, setImageInView] = useState(false)
  const [imageAspect, setImageAspect] = useState(1)

  const handleImageLoaded = e => {
    setImageAspect(Number((e.target.naturalHeight/e.target.naturalWidth) * 100).toFixed(2))
    if(logoSVG) {
      setTimeout(() => {
        setImageLoaded(true)
        if (loadIndicator) {
          setTimeout(() => {
            loadIndicator(true)
          }, 1000)
        }
      }, 250 * loadIndex)
    } else {
      setImageLoaded(true)
      if (loadIndicator) {
        loadIndicator(true)
      }
    }
  }
  return (
    <figure style={style} className={`${classAdd} ${imgHover ? 'hoverWrap' : ''}${caption && caption.length > 0 ? ' withCaption' : ''}`}>
      <TrackVisibility
        partialVisibility
        // className={classAdd}
        style={{
          overflow: 'visible',
          position: 'relative',
          paddingTop: aspectRatio === 'noAspect' ? `${imageAspect}%` : paddingRef[aspectRatio],
          minHeight: '100%',
          boxSizing: 'border-box'
        }} >
        {({ isVisible }) => {
          if (isVisible && !imageInView) {
            setImageInView(true)
          }
          const imageIsVisible = imageInView || visibilityOverride
          const imageSrc = imageIsVisible ? (isMobile && altAsset) ? altAsset : imgSource : ''
          return (
            <ImageWrap {...props} imageLoaded={imageLoaded} imageIsVisible={imageIsVisible} imageAspect={imageAspect} >
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
      {caption && caption.length > 0 ? <Caption classAdd={`${stackedImage ? 'col-6 col-6-tab' : 'col-6 col-6-tab'}`}>{caption}</Caption> : ''}

      <style jsx>{`
        figure {
          position: relative;
          display: block;
        }
        .wrappedImage {
          position: absolute;
          top: 0;
          left: 0;
          min-width: 100%;
          height: auto;
          opacity: 0;         
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
            background: #fff;
          } 
        }
      `}</style>
    </figure>
  )
}

Image.propTypes = {
  linkUrl: PropTypes.string,
  imageTitle: PropTypes.string,
  aspectRatio: PropTypes.oneOf(['sixteen', 'standard', 'square', 'cropped', 'noAspect', 'doubleWide', 'custom']),
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
