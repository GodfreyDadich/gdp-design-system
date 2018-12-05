import React from 'react'
import Video from './Video'

class HoverVideo extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      hover: false
    }

    this.updateHoverState = this.updateHoverState.bind(this)
  }

  updateHoverState (hover) {
    this.setState({ hover: hover })
  }

  render () {
    return (
      <div
        onMouseEnter={() => this.updateHoverState(true)}
        onMouseLeave={() => this.updateHoverState(false)} >
        <Video
          {...this.props}
          hoverPlay
          playing={false}
          autoplay={false}
          active={this.state.hover}
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
      </div>
    )
  }
}


export default HoverVideo
