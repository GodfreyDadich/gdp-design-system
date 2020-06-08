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
  const [initialized, setInitialized] = useState(false)
  const [showCurrent, setShowCurrent] = useState(false)

  const initTRI = () => {
    setInitialized(true)
    setImagesArr(props.images)
    const found = imagesArr.find(elem => currentTimeConvertedMilitary > elem.timeStart && currentTimeConvertedMilitary < elem.timeEnd)
    const prevIndex = imagesArr.indexOf(found) === 0 ? imagesArr.length - 1 : imagesArr.indexOf(found) - 1
    setPrevImage(imagesArr[prevIndex].image)
    setCurrentImage(found.image)
    setTimeout(() => {
      setShowCurrent(true)
      setTransitionEvent('active')
      setTimeout(() => {
        setTransitionEvent('')
      }, 6000)
    }, 2000)
  }

  const updateTime = () => {
    setTimeStamp(moment().tz("America/Los_Angeles").format('hh:mm a'))
  }

  return <TrackVisibility partialVisibility once >
    {({ isVisible }) => {
      if (isVisible && !initialized) {
        updateTime()
        initTRI()
      }
      return (
        <div className={`${props.aspectRatio} timedImageContainer`}>
          <div
            style={{
              position: 'absolute',
              top: '0',
              zIndex: 2,
              height: '100%',
              width: '100%',
              transition: 'opacity 3s 1s',
              opacity: showCurrent ? 1 : 0
            }}
          >
            <Image
              imgSource={currentImage}
              {...props}
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
              imgSource={prevImage}
              {...props}
            />
          </div>

          <div className={`timeStamp ${transitionEvent}`}>GDP HQ | {timeStamp} PACIFIC TIME</div>

          <style jsx>{`
      .timedImageContainer {
        position: relative;
        width: 100%;
        height: 0; 
        overflow: hidden;
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
        bottom: -50px;
        right: 40px;
        transition: bottom 1s 2s ease-in-out;
      }
      .timeStamp.active {
        bottom: 26px;
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
