import React from 'react'
import Video from './Video'
import TrackVisibility from 'react-on-screen'

const HoverVideo = props =>
  <TrackVisibility once className='hoverVid'>
    <Video
      {...props}
      hoverPlay
      autoplay={false}
      config={{
        vimeo: {
          playerOptions: {
            background: 1
          },
          preload: false
        }
      }}
    />
  </TrackVisibility>

export default HoverVideo
