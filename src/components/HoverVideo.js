import React from 'react'
import Video from './Video'

const HoverVideo = props =>
  <Video
    {...props}
    hoverPlay
    playing={false}
    autoplay={false}
    classAdd={props.classAdd ? ' ' + props.classAdd : ''}
    config={{
      vimeo: {
        playerOptions: {
          background: 1,
          autopause: true,
          autoplay: false
        },
        preload: false
      }
    }}
  />

export default HoverVideo
