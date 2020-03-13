import React, { useRef, useState, useEffect } from 'react'
import Sketch from './Sketch'

const ImageDepthMap = ({ originalImg, depthImg, verticalThreshold, horizontalThreshold }) => {
  const containerRef = useRef()
  const [domReady, setDomReady] = useState(false)

  useEffect(() => {
    setDomReady(true)
  }, [])

  return (
    <div ref={containerRef} className='image-DepthMap'>
      {domReady && <Sketch
        container={containerRef.current}
        imageOriginal={originalImg}
        imageDepth={depthImg}
        vth={verticalThreshold}
        hth={horizontalThreshold}
        useGravity
        multiplier={3}
      />}

      <style jsx>{`
      .image-DepthMap {
        position: relative;
        width: 80%;
        height: 100%;
        margin: 0 auto;
      }
      `}</style>
    </div>
  )
}

export default ImageDepthMap
