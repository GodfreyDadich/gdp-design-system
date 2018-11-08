import React from 'react'
import Video from './Video'

const HoverVideo = props =>
  <Video
    {...props}
    hoverPlay
    playing={false}
    loop
    config={{
      vimeo: {
        playerOptions: {
          background: 1
        },
        preload: true
      }
    }}
  />

export default HoverVideo
