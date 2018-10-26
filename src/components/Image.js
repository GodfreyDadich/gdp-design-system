import React from 'react'
import ConditionalLink from './ConditionalLink'

const Image = ({
  imageTitle,
  aspectRatio,
  fullBleed,
  imgSource,
  linkUrl,
  verticalAlign,
  horizontalAlign,
  classAdd
}) =>
  <div className={`imageWrap ${aspectRatio} ${fullBleed ? 'fullBleed' : ''} ${classAdd}`}>
    <ConditionalLink linkUrl={linkUrl}>
      <img className='wrappedImage' alt={imageTitle} src={imgSource} />
    </ConditionalLink>
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
        background: url(${imgSource});
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
          }
        }        
      }

    `}</style>
  </div>

  export default Image