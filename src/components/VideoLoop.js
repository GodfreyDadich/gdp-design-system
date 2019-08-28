import React from 'react'
import Video from './Video'

class VideoLoop extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      hover: props.autoplay
    }

    this.hoverOver = this.hoverOver.bind(this)
    this.hoverOut = this.hoverOut.bind(this)
  }

  hoverOver () {
    this.setState({ hover: true })
  }
  hoverOut () {
    this.setState({ hover: false })
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
        autoplay={this.props.autoplay || false}
        active={this.state.hover}
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
