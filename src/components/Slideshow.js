import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import moment from 'moment-timezone/builds/moment-timezone-with-data'

const Slideshow = props => {
  const [imagesArr, setImagesArr] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)

  let testData = [{ begin: '09:00 AM', end: '12:00 PM' }]
  console.log(moment().tz("America/Los_Angeles").format('hh:mm a z'))

  useEffect(() => {
    let currentPST = moment().tz("America/Los_Angeles").format('hh a')
    setImagesArr(props.images)

    // if ((activeIndex + 1) <= props.images.length - 1) {
    //   setActiveIndex(activeIndex + 1)
    // } else {
    //   setActiveIndex(0)
    // }
    // if the image time is set to the current time 
    if (testData[0].begin === currentPST) {
      console.log('hello')
    }

    console.log(convertTime12to24(testData[0].begin))

  }, [activeIndex])


  const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(' ');

    let [hours, minutes] = time.split(':');

    if (hours === '12') {
      hours = '00';
    }

    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
  }


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