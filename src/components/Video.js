import React from 'react'
import ReactPlayer from 'react-player'

const vidStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'tranparent'
}

const videoReady = ({ player }) => {
  player.player.callPlayer('pause')
}
const Video = ({ vidSource, classAdd, controls, loop, autoplay, config, isHero }) =>
  <div className={`video ${classAdd}`}>
    <div className={`vidWrap sixteen`}>
      {isHero ? 
        <iframe
          src={`https://player.vimeo.com/video/${vidSource.split('.com/')[1]}?background=1&loop=0&autoplay=0`}
          width='100%' height='100%'
          style={vidStyle}
          frameborder='0' />
        : <ReactPlayer
          url={vidSource}
          playing={autoplay}
          loop={loop}
          controls={controls}
          width='100%'
          height='100%'
          style={vidStyle}
          config={config}
          onReady={videoReady}
        />
      }
      <style jsx>{`
      .vidWrap {
        position: relative;
        width: 100%;
        overflow: hidden;
        height: auto;
        background-size: cover;
        background-repeat: no-repeat;

        &.sixteen {
          padding-top: 56.25%;
        }
        &.standard {
          padding-top: 75%;
        }
        &.cropped {
          padding-top: 39.06%;
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
  </div>

export default Video
