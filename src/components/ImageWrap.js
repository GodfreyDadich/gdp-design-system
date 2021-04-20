import React from 'react'

class ImageWrap extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loadImage: false
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
    const { aspectRatio, fullBleed, children, sideBar, imageLoaded, visibilityOverride, skipIntro, slowIntro } = this.props
    const { loadImage } = this.state
    const showImage = visibilityOverride || loadImage

    return (
      <div className={`imageWrap ${aspectRatio} ${fullBleed ? 'fullBleed' : ''}`}
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          lineHeight: '0',
          overflow: `${!sideBar ? 'hidden' : 'visible'}`,
          opacity: imageLoaded || visibilityOverride ? 1 : 0,
          top: imageLoaded || skipIntro ? '0px' : '15px',
          transition: slowIntro ? 'opacity 1s ease, top 1s ease, transform 1s ease-in-out' : 'opacity 0.3s ease .3s, top 0.3s ease .3s, transform 0.3s ease-in-out 0s',
          boxSizing: 'border-box'
        }}
      >
        { showImage ? React.cloneElement(children) : ''}
      </div>
    )
  }
}
export default ImageWrap
