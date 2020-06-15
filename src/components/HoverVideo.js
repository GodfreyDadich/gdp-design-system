import React, { useState } from 'react'
import Video from './Video'

const HoverVideo = (props) => {
  const [hover, setHover] = useState(false)

  return (
    <Video
      {...props}
      hoverPlay
      loop
      active={hover}
      mouseOverAction={() => { setHover(true) }}
      mouseOutAction={() => { setHover(false) }}
      classAdd={props.classAdd ? ' ' + props.classAdd : ''}
      config={{
        playerOptions: {
          controls: 0
        },
        preload: false
      }}
    />
  )
}

export default HoverVideo
