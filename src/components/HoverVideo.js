import React from 'react'
import Video from './Video'

class HoverVideo extends React.Component {
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
    return (
      <Video
        {...this.props}
        // hoverPlay
        playing={true}
        autoplay={true}
        active={this.state.hover}
        // mouseOverAction={this.hoverOver}
        // mouseOutAction={this.hoverOut}
        classAdd={this.props.classAdd ? ' ' + this.props.classAdd : ''}
        config={{
          vimeo: {
            playerOptions: {
              background: 1,
              autopause: !this.props.autoplay || true,
              autoplay: this.props.autoplay || false
            },
            preload: false
          }
        }}
      />
    )
  }
}

export default HoverVideo
