import React from 'react'

const ImageWrap = ({ aspectRatio, fullBleed, classAdd, children, imgSource, horizontalAlign, verticalAlign, sideBar}) =>
  <div className={`imageWrap ${aspectRatio} ${fullBleed ? 'fullBleed' : ''}${classAdd ? ' ' + classAdd : ''}`}>
    {children}
    <style jsx>{`
      .imageWrap {
        position: relative;
        height: auto;
        background: ${aspectRatio !== 'noAspect' ? `url(${imgSource})` : '#f2f2f2'};
        background-position-x: ${horizontalAlign};
        background-position-y: ${verticalAlign};
        background-size: cover;
        background-repeat: no-repeat;
        transition: transform 0.5s;
        ${!sideBar ? 'overflow: hidden;' : ''}

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
      }
    `}</style>
  </div>

export default ImageWrap