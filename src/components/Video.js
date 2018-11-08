import React from 'react'
import LazyLoad from 'react-lazy-load'
import ReactPlayer from 'react-player'
import { Caption, SideBar } from './Type'

const vidStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'tranparent'
}

class Video extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      playing: false,
      player: undefined
    }
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.videoReadyPause = this.videoReadyPause.bind(this)
  }

  play () {
    this.setState({
      playing: true
    })
    if (this.state.player) {
      this.state.player.callPlayer('setLoop', true)
    }
  }
  pause () {
    this.setState({
      playing: false
    })
    this.state.player.stop()
  }

  videoReadyPause ({ player }) { // pauses the player on load if autoplay isn't set to true
    player.player.pause()
    player.player.stop()

    this.setState({
      player: player.player
    })
  }

  render () {
    const {
      vidSource,
      classAdd,
      controls,
      autoplay,
      loop,
      config,
      hoverPlay,
      thumb,
      caption,
      sideBar,
      aspectRatio = 'sixteen'
    } = this.props
    const { playing } = this.state
    return (
      <div className={`video ${classAdd}`}>
        <div className={`vidWrap ${aspectRatio}`}
          onMouseEnter={hoverPlay ? this.play : undefined}
          onMouseLeave={hoverPlay ? this.pause : undefined}
        >
          <LazyLoad offsetVertical={500} debounce={false}>
            <ReactPlayer
              url={`${vidSource}`}
              playing={playing}
              loop={loop}
              controls={controls}
              width='100%'
              height='100%'
              style={vidStyle}
              config={config}
              onReady={autoplay ? null : this.videoReadyPause}
            />
          </LazyLoad>
        </div>
        {sideBar
          ? <SideBar sideBar={sideBar} />
          : ''}
        {caption && caption.length > 0 ? <Caption classAdd='col-6 skip-3'>{caption}</Caption> : ''}
        <style jsx>{`
            .video {
              position: relative;
            }
            .vidWrap {
              position: relative;
              width: 100%;
              overflow: hidden;
              height: auto;
              background-size: cover;
              background-repeat: no-repeat;
              background-image: url(${thumb});

              &.sixteen {
                padding-top: 56.25%;
              }
              &.standard {
                padding-top: 75%;
              }
              &.cropped {
                padding-top: 41.67%;
              }
              &.square {
                padding-top: 100%;
              }
            }
            .wrappedVideo {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }      
            `}</style>
      </div>
    )
  }
}

export default Video
