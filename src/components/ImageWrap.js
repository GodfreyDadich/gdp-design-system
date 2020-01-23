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
    return Boolean(nextProps.isVisible || nextProps.imageLoaded)
  }

  render () {
    const { aspectRatio, fullBleed, children, imgSource, horizontalAlign, verticalAlign, sideBar, imageLoaded, isVisible, visibilityOverride, skipIntro, altAsset, backgroundSize } = this.props
    const showImage = visibilityOverride ? true : imageLoaded && isVisible
    return (
      <div className={`imageWrap ${aspectRatio} ${fullBleed ? 'fullBleed' : ''}`}
        style={{
          backgroundImage: `${aspectRatio !== 'noAspect' && showImage ? `url('${isMobile && altAsset ? altAsset : imgSource}')` : ''}`,
          backgroundSize: backgroundSize || 'cover',
          backgroundPositionX: horizontalAlign,
          backgroundPositionY: verticalAlign,
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          height: 'auto',
          lineHeight: '0',
          overflow: `${!sideBar ? 'hidden' : 'visible'}`,
          paddingTop: paddingRef[aspectRatio],
          opacity: showImage ? 1 : 0,
          top: showImage || skipIntro ? '0px' : '15px',
          transition: 'opacity 0.3s ease 0s, top 0.3s ease 0s, transform 0.3s ease-in-out 0s'
        }}
      >
        { isVisible ? React.cloneElement(children) : ''}
      </div>
    )
  }
}
export default ImageWrap
