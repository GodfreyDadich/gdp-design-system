import React from 'react'
import Video from './Video'

class HoverVideo extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      hover: false
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
        hoverPlay
        playing={false}
        autoplay={this.props.autoplay || false}
        active={this.state.hover}
        mouseOverAction={this.hoverOver}
        mouseOutAction={this.hoverOut}
        classAdd={this.props.classAdd ? ' ' + this.props.classAdd : ''}
        config={{
          vimeo: {
            playerOptions: {
              background: 1,
              autopause: true,
              autoplay: false
            },
            preload: false
          }
        }}
      />
    )
  }
}

export default HoverVideo
