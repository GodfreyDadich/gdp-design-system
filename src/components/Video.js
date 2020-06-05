import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { Caption, SideBar } from './Type'
import TrackVisibility from 'react-on-screen'
import Loader from './Loader'
import { isMobile, isMobileOnly } from 'react-device-detect'
import supportsWebP from 'supports-webp'

const Video = (props) => {
  const {
    vidSource,
    classAdd,
    controls = true,
    autoplay,
    loop,
    config,
    hoverPlay,
    skipIntro,
    loadActive,
    caption,
    sideBar,
    style,
    playsinline,
    active,
    mouseOverAction,
    mouseOutAction,
    muted = true,
    aspectRatio = 'sixteen',
    customPadding = '0',
    onEnd,
    loader,
    thumb,
    loadIndex
  } = props

  const [playing, setPlaying] = useState(false)
  const [player, setPlayer] = useState(undefined)
  const [coverVisible, setCoverVisible] = useState(true)
  const [isLoading, setIsLoading] = useState(loader)
  const [playerReady, setPlayerReady] = useState(false)
  const [isMobileDevice, setIsMobileDevice] = useState(true)
  const [isMobileDeviceOnly, setIsMobileDeviceOnly] = useState(true)
  const [videoThumb, setVideoThumb] = useState('')
  const [loadVideo, setLoadVideo] = useState(false)

  const vidStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    pointerEvents: hoverPlay ? 'none' : ''
  }

  const pause = () => {
    setPlaying(false)
    if (player) {
      player.stop()
    }
  }

  const videoReady = ({ player }) => { // pauses the player on load if autoplay isn't set to true
    if (!autoplay) {
      pause()
      player.player.stop()
    }

    setPlayer(player.player)
    setIsLoading(isLoading ? autoplay : false)
    setPlayerReady(true)
    setTimeout(() => {
      setCoverVisible(hoverPlay || loadActive ? !active : false)
      setPlaying(autoplay)
    }, 1500)
  }

  const videoOnPlay = () => {
    if (!hoverPlay) {
      setCoverVisible(false)
      setIsLoading(false)
    }
  }

  const videoOnEnd = () => {
    if (typeof onEnd === 'function') {
      onEnd()
    }
  }

  const translateThumbUrl = (thumbUrl, isMobileDeviceOnly) => {
    if (thumbUrl.indexOf('vimeo') > 0) {
      const ext = supportsWebP ? 'webp' : 'jpg'
      const vidID = thumbUrl.split('video/')[1].split('_')[0]
      const imgParams = isMobileDeviceOnly ? 'mw=400&q=70' : 'mw=2800&q=70'
      return `https://i.vimeocdn.com/video/${vidID}.${ext}?${imgParams}`
    } else {
      return thumbUrl
    }
  }

  useEffect(() => {
    setIsMobileDevice(isMobile)
    setIsMobileDeviceOnly(isMobileOnly)
  }, [])

  useEffect(() => {
    setPlaying(active)
    setCoverVisible(!active)
    if (!active) {
      if (player) {
        player.stop()
      }
    }
  }, [active])

  return (
    <div
      onMouseEnter={mouseOverAction}
      onMouseLeave={mouseOutAction}
      style={style}
      className={`video${hoverPlay ? ' hoverVid' : ''}${playerReady ? ' playerReady' : ''}${caption && caption.length > 0 ? ' withCaption' : ''}`}
    >
      <TrackVisibility partialVisibility className={classAdd}>
        {({ isVisible }) => {
          if (isVisible || autoplay || (hoverPlay && !loadIndex)) {
            loadIndex ?
            setTimeout(() => {
              setLoadVideo(true)
            }, 50 * loadIndex) :
            setLoadVideo(true)
          }
          return (
            <div
              style={{
                position: 'relative',
                top: loadVideo || skipIntro ? '0px' : '15px',
                opacity: loadVideo || skipIntro ? '1' : '0',
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
                      backgroundImage: `url(${thumb && translateThumbUrl(thumb, isMobileDeviceOnly)})`,
                      backgroundPosition: `${loadVideo && !isLoading ? 'center center' : '100vw 100vw'}`,
                      backgroundColor: hoverPlay ? 'transparent' : '#000',
                      display: coverVisible ? 'inline-block' : 'none',
                      opacity: playerReady && (hoverPlay || loadActive ? active : true) ? 0 : 100,
                      transition: 'opacity 0.5s',
                      transitionDelay: '0.75s'
                    }}>
                    { isLoading ? <Loader /> : '' } </div>
                  { isMobileDevice && hoverPlay ? ''
                    : <ReactPlayer
                      url={loadVideo || skipIntro ? vidSource : ''}
                      playing={playing && isVisible}
                      volume={autoplay ? 0 : 1}
                      muted={muted}
                      loop={loop}
                      controls={controls}
                      width='100%'
                      height='100%'
                      style={vidStyle}
                      config={config}
                      onReady={videoReady}
                      onPlay={videoOnPlay}
                      onEnded={videoOnEnd}
                      playsinline={playsinline}
                    />
                  }
                </div>
              </div>
              {sideBar
                ? <SideBar sideBar={sideBar} loadVideo />
                : ''}
            </div>
          )
        }}
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
            &.doubleWide {
              padding-top: calc( 50% - 12px );
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

export default Video
