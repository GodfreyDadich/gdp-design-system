import React from 'react'
import ImageWrap from './ImageWrap'
import ConditionalLink from './ConditionalLink'
import ImageZoom from 'react-medium-image-zoom'
import { Caption } from './Type'

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
      imgSource,
      linkUrl,
      caption,
      sideBar,
      aspectRatio,
      stretchH,
      verticalAlign,
      horizontalAlign
    } = this.props

    return (
      <figure className='zoomFigure'>
        <ImageWrap {...this.props}>
          <ConditionalLink linkUrl={linkUrl}>
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
          </ConditionalLink>
          {(sideBar && sideBar.text.length > 0)
            ? <div className={`sideBar ${sideBar.location ? sideBar.location : 'topLeft'}`}>
              {sideBar.image ? <img className='sideBar__logo' src={sideBar.image} /> : ''}
              {sideBar.text.length > 0 ? <span className='sideBar__text'>{sideBar.text}</span> : ''}
            </div>
            : ''}          
        </ImageWrap>
        {caption && caption.length > 0 ? <Caption classAdd='col-6 col-6-tab'>{caption}</Caption> : ''}
        <style jsx>{`
          figure {
            position: relative;
          }
        
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
          .sideBar {
            position: absolute;
            top: 0;
            left: -126px;
            width: 102px;
            font-family: 'Atlas Grotesk';
            font-weight: 900;
            color: #000;
            
            &.left-bottom {
              top: auto;
              bottom: 0;
            }
            &.right-top {
              left: auto;
              right: -126px;
            }
            &.right-bottom {
              top: auto;
              left: auto;
              right: -126px;
              bottom: 0;
            }

            &__logo {
              display: block;
              width: 100%;
              margin-bottom: 12px;
            }
            &__text {
              display: block;
              border-top: 7px solid #000;
              padding-top: 9px;
              font-size: 12px;
              line-height: 12.8px;
              letter-spacing: -0.1px;

              p {
                margin: 0;
              }
            }      
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
}
export default ImageWithZoom