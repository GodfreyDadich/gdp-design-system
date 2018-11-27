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
      withZoom,
      title,
      loop
    } = this.props
    return (<div className='hero'>
      {(() => {
        switch (this.props.type) {
          case 'image':
            return <Image
              imageTitle={this.props.title}
              aspectRatio='sixteen'
              fullBleed='true'
              verticalAlign='center'
              skipIntro
              horizontalAlign='center'
              imgSource={this.props.source}
              classAdd={this.state.zoomClass} />
          case 'video':
            return <Video
              videoTitle={this.props.title}
              aspectRatio='sixteen'
              fullBleed='true'
              controls={false}
              autoplay
              skipIntro
              loop={false}
              vidSource={this.props.source}
              thumb={this.props.thumb}
              config={{
                vimeo: {
                  playerOptions: {
                    background: 1,
                    transparent: 0,
                    muted: 1,
                    autoplay: 1
                  },
                  preload: true
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
