import React from 'react'
import ReactPlayer from 'react-player'
import { Caption, SideBar } from './Type'
import TrackVisibility from 'react-on-screen'

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
      playing: props.autoplay,
      player: undefined,
      vidSource: '',
      hoverPlay: props.hoverPlay,
      autoplay: props.autoplay
    }
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.videoReady = this.videoReady.bind(this)
    this.loadVideo = this.loadVideo.bind(this)
    this.videoOnPlay = this.videoOnPlay.bind(this)
    // this.videoOnEnd = this.videoOnEnd.bind(this)
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

  videoReady ({ player }) { // pauses the player on load if autoplay isn't set to true
    console.log(' player ready ')
    if (!this.state.autoplay) {
      player.player.pause()
      player.player.stop()
    }
    if (!this.state.hoverPlay) {
      this.refs.hoverCover.style.display = 'none'
    }
    this.setState({
      player: player.player
    })
  }
  loadVideo (vidSource) {
    this.setState({
      vidSource: vidSource
    })
  }
  videoOnPlay () {
    if (!this.state.hoverPlay) {
      this.refs.hoverCover.style.display = 'none'
    }
  }
  // videoOnEnd (hoverPlay) {

  // }

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
      <div className={`video${hoverPlay ? ' hoverVid' : ''}`}>
        <TrackVisibility once partialVisibility className={classAdd}>
          {({ isVisible }) =>
            <div
              style={{
                position: 'relative',
                top: isVisible ? '0px' : '15px',
                opacity: isVisible ? '1' : '0',
                transition: 'opacity 0.5s, top 0.5s',
                transitionDelay: '0.25s'
              }}
            >
              <div className={`vidWrap ${aspectRatio}`}
                onMouseEnter={hoverPlay ? this.play : undefined}
                onMouseLeave={hoverPlay ? this.pause : undefined}
              >
                <div>
                  <div
                    ref='hoverCover'
                    className='hoverCover'
                    style={{
                      backgroundImage: `url(${isVisible ? thumb : ''})`
                    }} />
                  <ReactPlayer
                    url={isVisible ? vidSource : ''}
                    playing={playing}
                    loop={loop}
                    controls={controls}
                    width='100%'
                    height='100%'
                    style={vidStyle}
                    config={config}
                    onReady={this.videoReady}
                    onPlay={this.videoOnPlay}
                    // onEnded={() => { this.videoOnEnd(hoverPlay) }}
                  />
                </div>
              </div>
              {sideBar
                ? <SideBar sideBar={sideBar} isVisible />
                : ''}
            </div>
          }
        </TrackVisibility>
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
              transition: 0s opacity;

              &:hover {
                opacity: 0;
                transition-delay:.2s;
              }
            }
            `}</style>
      </div>
    )
  }
}

export default Video
