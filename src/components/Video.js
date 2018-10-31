import React from 'react'
import ReactPlayer from 'react-player'

const vidStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'tranparent'
}

const Video = ({ vidSource, classAdd, controls, loop, autoplay }) =>
  <div className={`video ${classAdd}`}>
    <div className={`vidWrap sixteen`}>
      <ReactPlayer url={vidSource} autoplay={autoplay} loop={loop} controls={controls} width='100%' height='100%' style={vidStyle} />

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
