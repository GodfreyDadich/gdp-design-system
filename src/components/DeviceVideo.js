import React from 'react'
import Video from './Video'

const DeviceVideo = props =>
  <div style={{
    // backgroundImage: 'url(http://gdp-node-test.appspot.com/w1280/For_Blaine/Google/DEVICES/Black_Galaxy_Shadow.png)',
    // backgroundSize: 'cover'
  }}>
    <Video
      {...props}
      deviceVid
      playing
      autoplay
      loop
      aspectRatio='standard'
      classAdd={`${props.classAdd ? ' ' + props.classAdd : ''}`}
      config={{
        vimeo: {
          playerOptions: {
            background: 1,
            autopause: false,
            autoplay: true
          },
          preload: true
        }
      }}
    />
  </div>
export default DeviceVideo
