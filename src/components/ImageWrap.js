import React from 'react'

const paddingRef = {
  sixteen: '56.25%',
  standard: '75%',
  cropped: '41.67%',
  square: '100%'
}
const ImageWrap = ({ aspectRatio, fullBleed, classAdd, children, imgSource, horizontalAlign, verticalAlign, sideBar, opacity }) =>
  <div className={`imageWrap ${aspectRatio} ${fullBleed ? 'fullBleed' : ''}`}
    style={{
      background: `${aspectRatio !== 'noAspect' ? `url(${imgSource})` : '#f2f2f2'}`,
      backgroundSize: 'cover',
      backgroundPositionX: horizontalAlign,
      backgroundPositionY: verticalAlign,
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      height: 'auto',
      opacity: opacity,
      transition: 'opacity .5s',
      overflow: `${!sideBar ? 'hidden' : 'visible'}`,
      paddingTop: paddingRef[aspectRatio]
    }}
  >
    {children}
  </div>

export default ImageWrap
