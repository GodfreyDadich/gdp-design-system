import React from 'react'
import ConditionalLink from './ConditionalLink'
import ImageWrap from './ImageWrap'
import { Caption, SideBar } from './Type'
// import LazyLoad from 'react-lazy-load'
import TrackVisibility from 'react-on-screen'

class Image extends React.Component {

  render () {
    const {
      imageTitle,
      imgSource,
      linkUrl,
      caption,
      sideBar,
      imgHover,
      aspectRatio,
      classAdd
    } = this.props

    return (
      <figure className={imgHover ? 'hoverWrap' : ''}>
        <TrackVisibility once partialVisibility>
          <ImageWrap {...this.props} >
            <ConditionalLink linkUrl={linkUrl}>
              <img className='wrappedImage' alt={imageTitle} src={imgSource} />
              {imgHover ? <img className='wrappedImage imageHover' alt={imageTitle} src={imgHover} /> : ''}
              {(sideBar && sideBar.text.length > 0)
                ? <SideBar sideBar={sideBar} isVisible />
                : ''}
            </ConditionalLink>
          </ImageWrap>
        </TrackVisibility>

        {caption && caption.length > 0 ? <Caption classAdd='col-6 skip-3'>{caption}</Caption> : ''}
        <style jsx>{`
          figure {
            position: relative;
            margin: 0;
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

export default Image
