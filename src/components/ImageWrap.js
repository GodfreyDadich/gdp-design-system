import React from 'react'

const paddingRef = {
  sixteen: '56.25%',
  standard: '75%',
  cropped: '41.67%',
  square: '100%'
}
const ImageWrap = ({ aspectRatio, fullBleed, classAdd, children, imgSource, horizontalAlign, verticalAlign, sideBar, isVisible }) =>
  <div className={`imageWrap ${aspectRatio} ${fullBleed ? 'fullBleed' : ''}`}
    style={{
      backgroundImage: `${aspectRatio !== 'noAspect' && isVisible ? `url(${imgSource})` : ''}`,
      backgroundColor: '#f2f2f2',
      backgroundSize: 'cover',
      backgroundPositionX: horizontalAlign,
      backgroundPositionY: verticalAlign,
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      height: 'auto',
      overflow: `${!sideBar ? 'hidden' : 'visible'}`,
      paddingTop: paddingRef[aspectRatio],
      opacity: isVisible ? 1 : 0,
      top: isVisible ? '0px' : '15px',
      transition: 'opacity 0.5s, top 0.5s',
      transitionDelay: '0.25s'
    }}
  >
    {React.cloneElement(children, { isVisible: isVisible })}
  </div>

export default ImageWrap
