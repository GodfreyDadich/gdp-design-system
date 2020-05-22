import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import moment from 'moment-timezone/builds/moment-timezone-with-data'

const Slideshow = props => {
  const [imagesArr, setImagesArr] = useState([])
  const [timer, setTimer] = useState([])

 console.log(moment().tz("America/Los_Angeles").format('hh:mm a z'))
  useEffect(() => {
    let currentPST = moment().tz("America/Los_Angeles").format('hh:mm a z')
    setTimer
  })

  return <div>
    <div className='slider-wrapper'
      style={{
        // transform: `translateX(${translateValue}%)`,
        transition: 'transform ease-out 0.45s',
        width: '100%',
        height: '100%',
        whiteSpace: 'nowrap'
      }}>
      {
        props.images.map((image, i) => (
          <div
            key={`item-${i}`}
            style={{
              height: '80%',
              width: '100%',
              margin: 'auto',
              top: '10%',
              position: 'relative',
              display: 'inline-block'
            }}>
              <Image
                // aspectRatio={thumbAspect}
                imgSource={image}
                skipIntro
                visibilityOverride
              />
          </div>
        ))
      }
    </div>
    <style jsx>{`
 
    `}</style>
  </div>
}

Slideshow.propTypes = {
  linkText: PropTypes.string,
  linkURL: PropTypes.string,
  aspectRatio: PropTypes.oneOf(['sixteen', 'standard', 'square', 'cropped', 'noAspect']),
  imgArray: PropTypes.array,
}

Slideshow.defaultProps = {
  fullBleed: false
}
export default Slideshow