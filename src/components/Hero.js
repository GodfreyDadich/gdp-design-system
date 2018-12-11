import React from 'react'
import Image from './Image'
import Video from './Video'

class Hero extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      zoomClass: ''
    }
  }
  componentDidMount () {
    if (this.props.type === 'image' && this.props.withZoom === 'true') {
      this.initZoom()
    }
  }
  initZoom () {
    setTimeout(() => {
      this.setState({ zoomClass: 'zoomedIn' })
    }, 1000)
  }
  render () {
    const {
      type,
      source,
      title,
      thumb
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
              imgSource={source}
              classAdd={this.state.zoomClass} />
          case 'video':
            return <Video
              videoTitle={title}
              aspectRatio='sixteen'
              fullBleed='true'
              controls={false}
              autoplay
              skipIntro
              loop={false}
              vidSource={source}
              thumb={thumb}
              loader
              config={{
                vimeo: {
                  playerOptions: {
                    background: 1,
                    transparent: 0,
                    muted: 1,
                    autoplay: 1
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

export default Hero
