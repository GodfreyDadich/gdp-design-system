import React from 'react'

const Video = ({vidSource, controls, loop}) =>
  <div className='vidWrap sixteen'>
    <video loop autoplay='true' muted='true' className='wrappedVideo'>
      <source src={vidSource} type="video/mp4"/>
      Your browser does not support the video tag.
    </video>

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

export default Video
