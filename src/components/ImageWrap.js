import React from 'react'
import { isMobile } from 'react-device-detect';

class ImageWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loadImage: false
    }

    this.paddingRef = {
      sixteen: '56.25%',
      standard: '75%',
      cropped: '41.67%',
      square: '100%',
      doubleWide: 'calc( 50% - 12px )',
      custom: props.customPadding
    }
  }

  shouldComponentUpdate (nextProps) {
    if (nextProps.imageIsVisible && !this.state.loadImage) {
      this.setState({
        loadImage: true
      })
    }
    return Boolean(nextProps.imageIsVisible || nextProps.imageLoaded)
  }

  render () {
    const { aspectRatio, fullBleed, children, imgSource, horizontalAlign, verticalAlign, sideBar, imageLoaded, visibilityOverride, skipIntro, altAsset, backgroundSize } = this.props
    const { loadImage } = this.state
    const showImage = visibilityOverride || loadImage

    return (
      <div className={`imageWrap ${aspectRatio} ${fullBleed ? 'fullBleed' : ''}`}
        style={{
          backgroundImage: `${aspectRatio !== 'noAspect' && imageLoaded ? `url('${isMobile && altAsset ? altAsset : imgSource}')` : ''}`,
          backgroundSize: backgroundSize || 'cover',
          backgroundPositionX: horizontalAlign,
          backgroundPositionY: verticalAlign,
          backgroundRepeat: 'no-repeat',
          height: 'auto',
          lineHeight: '0',
          overflow: `${!sideBar ? 'hidden' : 'visible'}`,
          paddingTop: this.paddingRef[aspectRatio],
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
