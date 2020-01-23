import React from 'react'
import { isMobile } from 'react-device-detect';

const paddingRef = {
  sixteen: '56.25%',
  standard: '75%',
  cropped: '41.67%',
  square: '100%'
}

class ImageWrap extends React.Component {
  shouldComponentUpdate (nextProps) {
    return Boolean(nextProps.imageIsVisible || nextProps.imageLoaded)
  }

  render () {
    const { aspectRatio, fullBleed, children, imgSource, horizontalAlign, verticalAlign, sideBar, imageLoaded, imageIsVisible, visibilityOverride, skipIntro, altAsset, backgroundSize } = this.props
    const showImage = visibilityOverride || imageIsVisible
    
    return (
      <div className={`imageWrap ${aspectRatio} ${fullBleed ? 'fullBleed' : ''}`}
        style={{
          backgroundImage: `${aspectRatio !== 'noAspect' && imageLoaded ? `url('${isMobile && altAsset ? altAsset : imgSource}')` : ''}`,
          backgroundSize: backgroundSize || 'cover',
          backgroundPositionX: horizontalAlign,
          backgroundPositionY: verticalAlign,
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          height: 'auto',
          lineHeight: '0',
          overflow: `${!sideBar ? 'hidden' : 'visible'}`,
          paddingTop: paddingRef[aspectRatio],
          opacity: imageLoaded ? 1 : 0,
          top: imageLoaded || skipIntro ? '0px' : '15px',
          transition: 'opacity 0.3s ease .3s, top 0.3s ease .3s, transform 0.3s ease-in-out 0s'
        }}
      >
        { showImage ? React.cloneElement(children) : ''}
      </div>
    )
  }
}
export default ImageWrap
