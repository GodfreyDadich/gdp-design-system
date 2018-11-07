import React from 'react'
import Video from './Video'
import TrackVisibility from 'react-on-screen'

const HoverVideo = ({ title, aspectRatio, fullBleed, source }) =>
  <TrackVisibility once>
    <Video
      videoTitle={title}
      aspectRatio={aspectRatio}
      fullBleed={fullBleed}
      vidSource={source}
      hoverPlay
      loadLazy
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
