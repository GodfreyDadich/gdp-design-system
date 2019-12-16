import React from 'react'
import Image from './Image'
import Video from './Video'
import supportsWebP from 'supports-webp'
// import PropTypes from 'prop-types'

class Hero extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      zoomClass: '',
      heroReady: false,
      imgSource: '',
      source: props.source,
      title: props.title,
      thumb: props.thumb,
      type: props.type
    }
  }
  componentDidMount () {
    if (this.props.type === 'image' && this.props.withZoom === 'true') {
      this.initZoom()
    }
    this.setState({
      heroReady: true,
      imgSource: supportsWebP && this.props.type === 'image' && this.props.source.includes('d36aj1cv2i74vd') ? this.props.source.replace('/attachments', '/filters:format(webp)/attachments') : this.props.source
    })
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.source !== this.props.source) {
      this.setState({
        imgSource: supportsWebP && nextProps.type === 'image' && nextProps.source.includes('d36aj1cv2i74vd') ? nextProps.source.replace('/attachments', '/filters:format(webp)/attachments') : nextProps.source,
        source: nextProps.source,
        title: nextProps.title,
        thumb: nextProps.thumb,
        type: nextProps.type
      })
    }
  }
  initZoom () {
    setTimeout(() => {
      this.setState({ zoomClass: 'zoomedIn' })
    }, 1000)
  }
  render () {
    const {
      source,
      title,
      thumb,
      heroReady,
      imgSource,
      type
    } = this.state

    const {
      loop
    } = this.props

    return (<div className='hero'>
      {(() => {
        switch (type) {
          case 'image':
            return <Image
              imageTitle={title}
              aspectRatio='sixteen'
              fullBleed='true'
              verticalAlign='center'
              skipIntro
              horizontalAlign='center'
              imgSource={heroReady ? imgSource : ''}
              classAdd={this.state.zoomClass} />
          case 'video':
            return <Video
              videoTitle={title}
              aspectRatio='sixteen'
              fullBleed='true'
              controls={false}
              autoplay
              skipIntro
              loop={loop}
              vidSource={source}
              thumb={thumb}
              loader
              muted
              config={{
                vimeo: {
                  playerOptions: {
                    background: 1,
                    transparent: 0,
                    muted: 1,
                    autoplay: 1,
                    playsinline: 1
                  },
                  preload: false
                }
              }}
            />
          default:
            return null
        }
      })()}
      <style jsx>{`
        .hero {
          overflow: hidden;
          margin-bottom: 59px;
        }
      `}</style>
    </div>
    )
  }
}

// this component will need to be converted to a functional component to work with proptypes
// Hero.PropTypes = {
//   type: PropTypes.oneOf(['image', 'video'])
// }
// Hero.defaultProps = {
//   type: 'image'
// }

export default Hero
