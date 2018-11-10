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
      player: undefined,
      vidSource: ''
    }
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.videoReadyPause = this.videoReadyPause.bind(this)
    this.loadVideo = this.loadVideo.bind(this)
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
    if (this.state.player) {
      this.state.player.stop()
    }
  }

  videoReadyPause ({ player }) { // pauses the player on load if autoplay isn't set to true
    console.log(' player ready ')
    player.player.pause()
    player.player.stop()

    this.setState({
      player: player.player
    })
  }
  loadVideo (vidSource, hoverPlay) {
    this.setState({
      vidSource: vidSource
    })
    if (!hoverPlay) {
      setTimeout(() => {
        this.refs.hoverCover.style.display = 'none'
      }, 1000)
    }
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
        <LazyLoad
          offsetVertical={1000}
          debounce={false}
          onContentVisible={() => { this.loadVideo(vidSource, hoverPlay) }} >
          <div className={`vidWrap ${aspectRatio}`}
            onMouseEnter={hoverPlay ? this.play : undefined}
            onMouseLeave={hoverPlay ? this.pause : undefined}
          >
            <div
              ref='hoverCover'
              className='hoverCover'
              style={{
                backgroundImage: `url(${thumb})`
              }} />
            <ReactPlayer
              url={autoplay ? vidSource : this.state.vidSource}
              playing={playing}
              loop={loop}
              controls={controls}
              width='100%'
              height='100%'
              style={vidStyle}
              config={config}
              onReady={autoplay ? null : this.videoReadyPause}
            />
          </div>
        </LazyLoad>
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

              &.sixteen {
                padding-top: 56.25%;
              }
              &.standard {
                padding-top: 75%;
              }
              &.cropped {
                padding-top: 41.67%;
              }
              &.cinema {
                padding-top: 46.89%;
              }
              &.square {
                padding-top: 100%;
              }
            }
            .wrappedVideo,
            .hoverCover {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 15;
            }      
            .hoverCover {
              opacity: 1;
              z-index: 20;
              background-size: cover;
              background-repeat: no-repeat;

              &:hover {
                opacity: 0;
              }
            }
            `}</style>
      </div>
    )
  }
}

export default Video
