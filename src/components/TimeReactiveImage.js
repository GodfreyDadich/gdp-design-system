import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import TrackVisibility from 'react-on-screen'

const TimeReactiveImage = props => {

  const jan = new Date(new Date().getFullYear(), 0, 1)
  const jul = new Date(new Date().getFullYear(), 6, 1)
  const offset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset()) / -60

  const getTime = () => new Date(new Date().getTime() + offset * 3600 * 1000).toISOString().split(':', 2).join(':').split('T')[1]

  const getFormattedTime = function (fourDigitTime) {
    var hours24 = parseInt(fourDigitTime.substring(0, 2))
    var hours = ((hours24 + 11) % 12) + 1
    var amPm = hours24 > 11 ? 'PM' : 'AM'
    var minutes = fourDigitTime.substring(2)
    return hours + ':' + minutes + ' ' + amPm
  }


  const [imagesArr, setImagesArr] = useState(props.images)
  const [timeStamp, setTimeStamp] = useState('')
  const [currentTimeConvertedMilitary, setcurrentTimeConvertedMilitary] = useState(getTime())
  const [transitionEvent, setTransitionEvent] = useState('')
  const [currentImage, setCurrentImage] = useState('')
  const [prevImage, setPrevImage] = useState('')
  const [initialized, setInitialized] = useState(false)
  const [showCurrent, setShowCurrent] = useState(false)
  const [imageOneLoaded, setImageOneLoaded] = useState(false)

  const initTRI = () => {
    setInitialized(true)
    updateTime()
    setImagesArr(props.images)

    const found = imagesArr.find(elem => {
      const startTime = Number(elem.timeStart.split(':')[0])
      const endTime = Number(elem.timeEnd.split(':')[0])
      const currentTime = Number(currentTimeConvertedMilitary.split(':')[0])
      if (startTime > endTime) {
        return currentTime < startTime || currentTime > endTime
      } else {
        return currentTime >= startTime && currentTime < endTime
      }
    })

    const prevIndex = imagesArr.indexOf(found) <= 0 ? imagesArr.length - 1 : imagesArr.indexOf(found) - 1
    setPrevImage(imagesArr[prevIndex].image)
    setCurrentImage(found.image)
  }

  useEffect(() => {
    if (imageOneLoaded) {
      setTimeout(() => {
        setShowCurrent(true)
        setTransitionEvent('active')
        setTimeout(() => {
          setTransitionEvent('')
        }, 6000)
      }, 1000)
    }
  }, [imageOneLoaded])

  const updateTime = () => {
    setTimeStamp(getFormattedTime(getTime().split(':').join("")))
  }

  return <TrackVisibility partialVisibility once >
    {({ isVisible }) => {
      if (isVisible && !initialized) {
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
              loadIndicator={setImageOneLoaded}
              slowIntro
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
              font-size: 10px;
              line-height: 12px;
              font-weight: normal;
              letter-spacing: 1.60417px;
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
