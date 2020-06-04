import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import moment from 'moment-timezone/builds/moment-timezone-with-data'
import TrackVisibility from 'react-on-screen'

const Slideshow = props => {
  const [imagesArr, setImagesArr] = useState([])
  const [timeStamp, setTimeStamp] = useState(moment().tz("America/Los_Angeles").format('hh:mm a'))
  const [currentTimeConvertedMilitary, setcurrentTimeConvertedMilitary] = useState(moment().tz("America/Los_Angeles").format('HH:mm:ss'))

  const [transitionEvent, setTransitionEvent] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const [currentImage, setCurrentImage] = useState('')
  const [prevImage, setPrevImage] = useState('')


  let testData = [{ begin: '09:00 AM', end: '12:00 PM' }, { begin: '12:00 PM', end: '05:00 PM' }, { begin: '11:00 PM', end: '10:00 PM' }]

  useEffect(() => {
    setImagesArr(props.images)

    let slideshowInterval
    // slideshowInterval = setTimeout(iterateSlideshowImg, 7000)

    // loop and check if > / < begin and end time
    // current time needs to be greater than the start time  and less than end time

    // var dataConvertedMilitary = convertTime12to24(testData[1].begin)
    // var currentTimeConvertedMilitary = moment().tz("America/Los_Angeles").format('HH:mm:ss')
    // console.log(currentTimeConvertedMilitary)

    // if (dataConvertedMilitary.substring(0, 2) === currentTimeConvertedMilitary.substring(0, 2)) {
    //   console.log('hours match')
    //   // setTransitionEvent('active')
    //   // setTimeout(() => {
    //   //   setTransitionEvent('')
    //   // }, 2000)
    //   // iterateSlideshowImg()

    // }
  }, [activeIndex])

  useEffect(() => {

    // "timeStart": "09:00:00",
    // "timeEnd": "12:00:00",
    console.log('---===', currentTimeConvertedMilitary)

    // get current west coast time
    const found = props.images.find(elem => currentTimeConvertedMilitary > elem.timeStart && currentTimeConvertedMilitary < elem.timeEnd);
    // setCurrentImage(props.images[1])
    setPrevImage(props.images[0])
    setTimeout(() => {
      setCurrentImage(props.images[1])
      setTransitionEvent('active')

      setTimeout(() => {
        setTransitionEvent('')
      }, 3000)
    }, 3000)
    // based on the time, go to the index, find the right one, then go back one (active index) (set previous and current image)
    // then when it comes fully into view, you'll iterate the index
  }, [])

  const updateTime = () => {
    setTimeStamp(moment().tz("America/Los_Angeles").format('hh:mm a'))
  }

  // const iterateSlideshowImg = () => {
  //   console.log(activeIndex)
  //   let featuredImage

  //   if (activeIndex < props.images.length - 1) {
  //     console.log('true')
  //     featuredImage = activeIndex + 1
  //   } else {
  //     featuredImage = 0
  //   }

  //   setActiveIndex(featuredImage)

  //   if ((activeIndex + 1) <= props.images.length - 1) {
  //     setActiveIndex(activeIndex + 1)
  //   } else {
  //     setActiveIndex(0)
  //   }

  // }

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


  return <TrackVisibility partialVisibility once>
    {({ isVisible }) => {
      updateTime()

      return (
        <div className={`${props.aspectRatio}`} style={{ position: 'relative', width: '100%' }}>
          <div
            style={{
              position: 'absolute',
              top: '0',
              zIndex: 2,
              height: '100%',
              width: '100%',
              transition: 'opacity 0.75s',
              opacity: currentImage ? 1 : 0
            }}
          >
            <Image
              aspectRatio={`${props.aspectRatio}`}
              imgSource={currentImage}
              skipIntro
              visibilityOverride
            />
          </div>
          <div
            style={{
              position: 'absolute',
              top: '0',
              zIndex: 1,
              height: '100%',
              width: '100%'
            }}>
            <Image
              aspectRatio={`${props.aspectRatio}`}
              imgSource={prevImage}
              skipIntro
              visibilityOverride
            />
          </div>

          <div className={`timeStamp ${transitionEvent}`}>GDP HQ | {timeStamp} PACIFIC TIME</div>

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
        font-size: 15px;
        line-height: 20px;
        font-weight: 600;
        letter-spacing: 2px;
        z-index: 99;
        color: #FFF;
        bottom: 26px;
        right: 40px;
        transform: translateY(20px);
        opacity: 0;
      }
      .timeStamp.active {
        transform: translateY(0px);
        opacity: 1;
        transition: transform .5s 1s, opacity .5s 1s ease-in-out;
      }
      .sixteen {
        padding-top: 56.25%;
      }
      .standard {
        padding-top: 75%;
      }
      .cropped {
        padding-top: 41.67%;
      }
      .cinema {
        padding-top: 46.89%;
      }
      .square {
        padding-top: 100%;
      }
    `}</style>
        </div>
      )
    }}
  </TrackVisibility>

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