import React from 'react'
import ReactPlayer from 'react-player'
import { Caption, SideBar } from './Type'
import TrackVisibility from 'react-on-screen'
import Loader from './Loader'
import { isMobile } from 'react-device-detect'

const vidStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  backgroundColor: 'transparent'
}

class Video extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      playing: props.autoplay || false,
      player: undefined,
      vidSource: '',
      hoverPlay: props.hoverPlay || false,
      autoplay: props.autoplay || false,
      coverVisible: true,
      isLoading: props.loader,
      active: props.active || false,
      playerReady: false,
      isMobile: true,
      mouseIgnore: (this.props.config && this.props.config.vimeo.playerOptions.background === 1)
    }
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.videoReady = this.videoReady.bind(this)
    this.videoOnPlay = this.videoOnPlay.bind(this)
    this.videoOnEnd = this.videoOnEnd.bind(this)
  }

  play () {
    this.setState({
      playing: true
    })
    if (this.state.player) {
      this.state.player.callPlayer('setCurrentTime', 0)
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
    if (!this.state.autoplay) {
      player.player.pause()
      player.player.stop()
    }
    this.setState({
      player: player.player,
      coverVisible: this.state.hoverPlay,
      isLoading: this.state.isLoading ? this.state.autoplay : false,
      playerReady: true
    })
  }
  videoOnPlay () {
    if (!this.state.hoverPlay) {
      this.setState({
        coverVisible: false,
        isLoading: false
      })
    }
  }
  videoOnEnd () {
    if (typeof this.props.onEnd === 'function') {
      this.props.onEnd()
    }
  }

  componentDidMount () {
    this.setState({
      isMobile: isMobile
    })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.active && !this.state.playing) {
      this.setState({
        playing: true
      })
      this.play()
    } else if (!nextProps.active && this.state.playing) {
      if (this.state.player) {
        this.state.player.stop()
      }
      this.setState({
        playing: false,
        coverVisible: true
      })
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
      skipIntro,
      thumb,
      caption,
      sideBar,
      style,
      active,
      mouseOverAction,
      mouseOutAction,
      aspectRatio = 'sixteen'
    } = this.props
    const { playing, playerReady } = this.state
    return (
      <div
        onMouseEnter={mouseOverAction}
        onMouseLeave={mouseOutAction}
        style={style}
        className={`video${hoverPlay ? ' hoverVid' : ''}${playerReady ? ' playerReady' : ''}${caption && caption.length > 0 ? ' withCaption' : ''}`}
      >
        <TrackVisibility once partialVisibility className={classAdd}>
          {({ isVisible }) =>
            <div
              style={{
                position: 'relative',
                top: isVisible || skipIntro ? '0px' : '15px',
                opacity: isVisible ? '1' : '0',
                transition: 'opacity 0.5s, top 0.5s',
                transitionDelay: '0.75s'
              }}
            >
              <div className={`vidWrap ${aspectRatio}${active ? ' active' : ''}`}>
                <div>
                  <div
                    ref='videoCover'
                    className='videoCover'
                    style={{
                      backgroundImage: `url(${thumb})`,
                      backgroundPosition: `${isVisible && !this.state.isLoading ? 'center center' : '100vw 100vw'}`,
                      backgroundColor: hoverPlay ? 'transparent' : '#000',
                      display: this.state.coverVisible ? 'inline-block' : 'none'
                    }}>
                    { this.state.isLoading ? <Loader /> : '' } </div>
                  { this.state.isMobile && hoverPlay ? ''
                    : <ReactPlayer
                      url={autoplay ? vidSource : isVisible ? vidSource : ''}
                      playing={playing}
                      volume={autoplay ? 0 : 1}
                      muted={autoplay}
                      loop={loop}
                      controls={controls}
                      width='100%'
                      height='100%'
                      style={vidStyle}
                      config={config}
                      onReady={this.videoReady}
                      onPlay={this.videoOnPlay}
                      onEnded={this.videoOnEnd}
                    />
                  }
                </div>
              </div>
              {sideBar
                ? <SideBar sideBar={sideBar} isVisible />
                : ''}
            </div>
          }
        </TrackVisibility>
        {caption && caption.length > 0 ? <Caption classAdd='col-6 skip-3 col-6-tab skip-1-tab'>{caption}</Caption> : ''}
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
            .videoCover {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 15;
            }      
            .videoCover {
              opacity: 1;
              z-index: 20;
              background-size: cover;
              background-repeat: no-repeat;
              transition: 0.2s opacity;
            }
            .hoverVid.playerReady {
              .vidWrap.active {
                .videoCover {
                  opacity: 0;
                }
              }
            }
            `}</style>
      </div>
    )
  }
}

export default Video
