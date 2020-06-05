import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import moment from 'moment-timezone/builds/moment-timezone-with-data'
import TrackVisibility from 'react-on-screen'

const TimeReactiveImage = props => {
  const [imagesArr, setImagesArr] = useState(props.images)
  const [timeStamp, setTimeStamp] = useState(moment().tz("America/Los_Angeles").format('hh:mm a'))
  const [currentTimeConvertedMilitary, setcurrentTimeConvertedMilitary] = useState(moment().tz("America/Los_Angeles").format('HH:mm:ss'))
  const [transitionEvent, setTransitionEvent] = useState('')
  const [currentImage, setCurrentImage] = useState('')
  const [prevImage, setPrevImage] = useState('')

  const initTRI = () => {
    setImagesArr(props.images)
    const found = imagesArr.find(elem => currentTimeConvertedMilitary > elem.timeStart && currentTimeConvertedMilitary < elem.timeEnd)
    const prevIndex = imagesArr.indexOf(found) === 0 ? imagesArr.length - 1 : imagesArr.indexOf(found) - 1
    setPrevImage(imagesArr[prevIndex].image)
    setTimeout(() => {
      setCurrentImage(found.image)
      setTransitionEvent('active')

      setTimeout(() => {
        setTransitionEvent('')
      }, 3000)
    }, 3000)
  }

  const updateTime = () => {
    setTimeStamp(moment().tz("America/Los_Angeles").format('hh:mm a'))
  }

  return <TrackVisibility partialVisibility once>
    {({ isVisible }) => {
      if (isVisible) {
        updateTime()
        initTRI()
      }
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
        transition: transform .5s 1s, opacity .5s 1s ease-in-out;

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

TimeReactiveImage.propTypes = {
  linkText: PropTypes.string,
  linkURL: PropTypes.string,
  aspectRatio: PropTypes.oneOf(['sixteen', 'standard', 'square', 'cropped', 'noAspect']),
  imgArray: PropTypes.array,
}

TimeReactiveImage.defaultProps = {
  fullBleed: false
}
export default TimeReactiveImage
