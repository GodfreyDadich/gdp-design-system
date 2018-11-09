import React from 'react'

const paddingRef = {
  sixteen: '56.25%',
  standard: '75%',
  cropped: '41.67%',
  square: '100%'
}
const ImageWrap = ({ aspectRatio, fullBleed, classAdd, children, imgSource, horizontalAlign, verticalAlign, sideBar }) =>
  <div className={`imageWrap ${aspectRatio} ${fullBleed ? 'fullBleed' : ''}${classAdd ? ' ' + classAdd : ''}`}
    style={{
      background: `${aspectRatio !== 'noAspect' ? `url(${imgSource})` : '#f2f2f2'}`,
      backgroundSize: 'cover',
      backgroundPositionX: horizontalAlign,
      backgroundPositionY: verticalAlign,
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      height: 'auto',
      overflow: `${!sideBar ? 'hidden' : 'visible'}`,
      paddingTop: paddingRef[aspectRatio]
    }}
  >
    {children}
  </div>

export default ImageWrap
