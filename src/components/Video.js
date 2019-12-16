import React from 'react'
import ReactPlayer from 'react-player'
import { Caption, SideBar } from './Type'
import TrackVisibility from 'react-on-screen'
import Loader from './Loader'
import { isMobile, isMobileOnly } from 'react-device-detect'
import supportsWebP from 'supports-webp'

const vidStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  backgroundColor: 'transparent',
  border: 'none'
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
      isMobileOnly: true,
      thumb: '',
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
    this.pause()
    player.player.stop()
    this.setState({
      player: player.player,
      coverVisible: this.state.hoverPlay,
      isLoading: this.state.isLoading ? this.state.autoplay : false,
      playerReady: true,
      playing: this.state.autoplay
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
      isMobile: isMobile,
      isMobileOnly: isMobileOnly,
      thumb: this.translateThumbUrl(this.props.thumb, isMobileOnly)
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

  translateThumbUrl (thumbUrl, isMobileOnly) {
    const ext = supportsWebP ? 'webp' : 'jpg'
    const vidID = thumbUrl.split('video/')[1].split('_')[0]
    const imgParams = isMobileOnly ? 'mw=400&q=70' : 'mw=2800&q=70'
    return `https://i.vimeocdn.com/video/${vidID}.${ext}?${imgParams}`
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
      loadActive,
      caption,
      sideBar,
      style,
      regPlay,
      playsinline,
      active,
      mouseOverAction,
      mouseOutAction,
      muted = true,
      aspectRatio = 'sixteen',
      customPadding = '0'
    } = this.props
    const {
      playing,
      playerReady,
      thumb
    } = this.state

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
                opacity: isVisible || loadActive ? '1' : '0',
                transition: 'opacity 0.5s, top 0.5s',
                transitionDelay: '0.75s'
              }}
            >
              <div className={`vidWrap ${aspectRatio}${active ? ' active' : ''}`} style={aspectRatio === 'custom' ? { paddingTop: customPadding } : {}}>
                <div>
                  <div
                    ref='videoCover'
                    className='videoCover'
                    style={{
                      backgroundImage: `url(${thumb})`,
                      backgroundPosition: `${isVisible && !this.state.isLoading ? 'center center' : '100vw 100vw'}`,
                      backgroundColor: hoverPlay || regPlay ? 'transparent' : '#000',
                      display: this.state.coverVisible ? 'inline-block' : 'none'
                    }}>
                    { this.state.isLoading ? <Loader /> : '' } </div>
                  { this.state.isMobile && (regPlay || hoverPlay) ? ''
                    : <ReactPlayer
                      url={autoplay ? vidSource : isVisible || loadActive ? vidSource : ''}
                      playing={playing}
                      volume={autoplay ? 0 : 1}
                      muted={muted}
                      loop={loop}
                      autoplay={autoplay}
                      controls={controls}
                      width='100%'
                      height='100%'
                      style={vidStyle}
                      config={config}
                      onReady={this.videoReady}
                      onPlay={this.videoOnPlay}
                      onEnded={this.videoOnEnd}
                      playsinline={playsinline}
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
              transition: opacity 0s;
              transition-delay: 0s;
            }
            .hoverVid.playerReady {
              .vidWrap.active {
                .videoCover {
                  opacity: 0;
                  transition: opacity 0.2s;
                  transition-delay: 0.15s;
                }
              }
            }
            `}</style>
      </div>
    )
  }
}

export default Video
