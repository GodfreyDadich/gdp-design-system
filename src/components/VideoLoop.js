import React from 'react'
import Video from './Video'

class VideoLoop extends React.Component {
  constructor (props) {
    super(props)
    this.state = {   
    }
  }

  render () {
    const {
        thumb
      } = this.props
    return (
      <Video
        {...this.props}
        playing={true}
        thumb={thumb}
        loop={true}
        autoplay={true}
        active={true}
        regPlay
        classAdd={this.props.classAdd ? ' ' + this.props.classAdd : ''}
        config={{
          vimeo: {
            playerOptions: {
              background: 1,
              autopause: !this.props.autoplay || true,
              autoplay: this.props.autoplay || true
            },
            preload: false
          }
        }}
      />
    )
  }
}

export default VideoLoop
