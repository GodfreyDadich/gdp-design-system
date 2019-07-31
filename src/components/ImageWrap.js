import React from 'react'

const paddingRef = {
  sixteen: '56.25%',
  standard: '75%',
  cropped: '41.67%',
  square: '100%'
}

class ImageWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isVisible: false
    }
  }
  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.isVisible
  }
  render () {
    const { aspectRatio, fullBleed, children, imgSource, horizontalAlign, verticalAlign, sideBar, isVisible, visibilityOverride, skipIntro, backgroundSize } = this.props
    const showImage = visibilityOverride ? true : isVisible
    return (
      <div className={`imageWrap ${aspectRatio} ${fullBleed ? 'fullBleed' : ''}`}
        style={{
          backgroundImage: `${aspectRatio !== 'noAspect' && showImage ? `url('${imgSource}')` : ''}`,
          backgroundSize: backgroundSize || 'cover',
          backgroundPositionX: horizontalAlign,
          backgroundPositionY: verticalAlign,
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          height: 'auto',
          overflow: `${!sideBar ? 'hidden' : 'visible'}`,
          paddingTop: paddingRef[aspectRatio],
          opacity: showImage ? 1 : 0,
          top: showImage || skipIntro ? '0px' : '15px',
          transition: 'opacity 0.5s, top 0.5s',
          transitionDelay: '1s'
        }}
      >
        { showImage ? React.cloneElement(children) : ''}
      </div>
    )
  }
}
export default ImageWrap
