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
              imgSource='http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg' 
              ref='hero__image'
              classAdd={this.state.zoomClass} />
          case 'video':
            return <Video
              videoTitle='Video Title'
              aspectRatio='sixteen'
              fullBleed='true'
              loop='true'
              controls='false'
              vidSource='https://s3-us-west-1.amazonaws.com/gdp-site/videos/ADMN012_Abstract1_Devlin_loop_clip.mp4' />
          default:
            return null
        }
      })()}
      <style jsx>{`
        .hero {
          overflow: hidden;
        }
      `}</style>
    </div>
    )
  }
}

export default Hero
