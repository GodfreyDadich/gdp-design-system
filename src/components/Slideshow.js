import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import moment from 'moment-timezone/builds/moment-timezone-with-data'

const Slideshow = props => {
  const [imagesArr, setImagesArr] = useState([])
  const [timeStamp, setTimeStamp] = useState(moment().tz("America/Los_Angeles").format('hh:mm a'))
  const [transitionEvent, setTransitionEvent] = useState('')


  const [activeIndex, setActiveIndex] = useState(0)

  let testData = [{ begin: '09:00 AM', end: '12:00 PM' }, { begin: '12:00 PM', end: '05:00 PM' }, { begin: '05:22 PM', end: '10:00 PM' }]

  useEffect(() => {
    let currentPST = moment().tz("America/Los_Angeles").format('hh A')
    setImagesArr(props.images)

    let slideshowInterval
    slideshowInterval = setTimeout(iterateSlideshowImg, 1000)

    // if ((activeIndex + 1) <= props.images.length - 1) {
    //   setActiveIndex(activeIndex + 1)
    // } else {
    //   setActiveIndex(0)
    // }
    // if the image time is set to the current time 

    console.log('1111', currentPST)
    console.log('2222', testData[2].begin)

    if (testData[2].begin === currentPST) {
      console.log('hello!!')
    }

    console.log('!!!', convertTime12to24(testData[0].begin))

  }, [activeIndex])





  const iterateSlideshowImg = () => {
    console.log(activeIndex)
    let featuredImage
    
    if (activeIndex < props.images.length - 1) {
      console.log('true')
      featuredImage = activeIndex + 1
    } else {
      featuredImage = 0
    }

    setActiveIndex(featuredImage)


    if ((activeIndex + 1) <= props.images.length - 1) {
      setActiveIndex(activeIndex + 1)
    } else {
      setActiveIndex(0)
    }

  }



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
        width: '100%',
        height: '100%'
      }}>
      {
        props.images.map((image, i) => (
          <div
            className={`heroImage ${i === activeIndex ? 'active' : ''}`}
            key={`item-${i}`}
            style={{
              height: '0%',
              width: '100%',
              margin: 'auto',
              position: 'relative',
            }}>
            <Image
              aspectRatio={'sixteen'}
              imgSource={image}
              skipIntro
              visibilityOverride
            />
          </div>
        ))
      }
      <div className={`timeStamp ${transitionEvent}`}>GDP HQ | {timeStamp} PACIFIC TIME</div>
    </div>
    <style jsx>{`
      .slider-wrapper {
        overflow: visible;
        position: relative;
        left: 0;
        object-fit: cover;
        object-position: center;
        position: absolute;
        top: 0;
      }
      .heroImage {
        position: absolute;
        opacity: 0;
        transition: opacity .75s ease-in;
      }
      .heroImage.active {
        opacity: 1;
      }
      .timeStamp {
        position: absolute;
        font-family: Institut;
        font-size: 28px;
        font-weight: 600;
        letter-spacing: 0.2px;
        z-index: 99;
        color: white;
        bottom: 20px;
        right: 20px;
      }
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