import React from 'react'
import ConditionalLink from './ConditionalLink'
import ImageWrap from './ImageWrap'
import { Caption, SideBar } from './Type'
import LazyLoad from 'react-lazy-load'

class Image extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      opacity: 0
    }
    this.displayImage = this.displayImage.bind(this)
  }

  displayImage () {
    this.setState({
      opacity: 1
    })
  }
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
      <figure className={`${imgHover ? 'hoverWrap' : ''}${classAdd ? ' ' + classAdd : ''}`}>
        <ImageWrap {...this.props} opacity={this.state.opacity}>
          <LazyLoad
            offsetVertical={500}
            debounce={false}
            onContentVisible={this.displayImage}>
            <ConditionalLink linkUrl={linkUrl}>
              <img className='wrappedImage' alt={imageTitle} src={imgSource} />
              {imgHover ? <img className='wrappedImage imageHover' alt={imageTitle} src={imgHover} /> : ''}
            </ConditionalLink>
          </LazyLoad>
          {(sideBar && sideBar.text.length > 0)
            ? <SideBar sideBar={sideBar} />
            : ''}
        </ImageWrap>
        {caption && caption.length > 0 ? <Caption classAdd='col-6 skip-3'>{caption}</Caption> : ''}
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
            opacity: ${this.state.opacity};
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
