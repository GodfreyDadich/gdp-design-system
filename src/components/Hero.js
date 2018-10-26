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
              imageTitle='Image Title'
              aspectRatio='sixteen'
              fullBleed='true'
              imgSource={this.props.source} 
              ref='hero__image'
              classAdd={this.state.zoomClass} />
          case 'video':
            return <Video
              videoTitle='Video Title'
              aspectRatio='sixteen'
              fullBleed='true'
              loop='true'
              controls='false'
              vidSource={this.props.source} />
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
