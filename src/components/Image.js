import React from 'react'
import ConditionalLink from './ConditionalLink'
import { Caption } from './Type'

const Image = ({
  imageTitle,
  aspectRatio,
  fullBleed,
  imgSource,
  linkUrl,
  verticalAlign,
  horizontalAlign,
  classAdd,
  caption,
  sideBar,
  imgHover
}) =>

  <figure className={imgHover ? ' hoverWrap' : ''}>
    <div className={`imageWrap ${aspectRatio} ${fullBleed ? 'fullBleed' : ''} ${classAdd}`}>
      <ConditionalLink linkUrl={linkUrl}>
        <img className='wrappedImage' alt={imageTitle} src={imgSource} />
        {imgHover ? <img className='wrappedImage imageHover' alt={imageTitle} src={imgHover} /> : ''}
      </ConditionalLink>
      {(sideBar && sideBar.text.length > 0)
        ? <div className={`sideBar ${sideBar.location ? sideBar.location : 'topLeft'}`}>
          {sideBar.image ? <img className='sideBar__logo' src={sideBar.image} /> : ''}
          {sideBar.text.length > 0 ? <span className='sideBar__text'>{sideBar.text}</span> : ''}
        </div>
        : ''}
    </div>
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
      }    
      .imageWrap {
        position: relative;
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
      .hoverWrap .noAspect{
        .wrappedImage {
          transition: opacity 0.4s;

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

export default Image
