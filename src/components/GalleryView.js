import React, { useState, useEffect } from 'react'
import { AltRightArrow, AltLeftArrow } from './SliderArrows'
import { isMobile } from 'react-device-detect'

const GalleryView = ({ images, index }) => {
  const [currentIndex, setCurrentIndex] = useState(index)
  const [translateValue, setTranslateValue] = useState(index * -100)
  const [xDown, setXDown] = useState(null)
  const [yDown, setYDown] = useState(null)

  const goToPrevSlide = () => {
    const nextIndex = currentIndex === 0
      ? images.length - 1
      : currentIndex - 1
    const nextTranslateValue = currentIndex === 1
      ? 0
      : -(nextIndex * 100)

    setCurrentIndex(nextIndex)
    setTranslateValue(nextTranslateValue)
  }

  const goToNextSlide = () => {
    const nextIndex = (currentIndex === images.length - 1)
      ? 0
      : currentIndex + 1
    const nextTranslateValue = (currentIndex === images.length - 1)
      ? 0
      : -(nextIndex * 100)

    setCurrentIndex(nextIndex)
    setTranslateValue(nextTranslateValue)
  }

  const getTouches = (e) => {
    return e.touches || // browser API
      e.originalEvent.touches // jQuery
  }

  const handleTouchStart = (e) => {
    e.preventDefault()
    const firstTouch = getTouches(e)[0]
    setXDown(firstTouch.clientX)
    setYDown(firstTouch.clientY)
  }

  const handleTouchMove = (e) => {
    e.preventDefault()
    if (!xDown || !yDown) { return }
    const xLeft = e.touches[0].clientX
    const xDiff = xDown - xLeft
    const direction = (xDiff > 0) ? 'right' : 'left'
    if (direction === 'right') {
      goToNextSlide()
    } else {
      goToPrevSlide()
    }

    /* reset values */
    setXDown(null)
    setXDown(null)
  }

  const handleKeyDown = e => {
    if (e.keyCode === 39) {
      goToNextSlide()
    }
    if (e.keyCode === 37) {
      goToPrevSlide()
    }
  }

  useEffect(() => {
    if (isMobile) {
      window.addEventListener('touchstart', handleTouchStart, { passive: false })
      window.addEventListener('touchmove', handleTouchMove, { passive: false })
      return () => {
        window.removeEventListener('touchstart', handleTouchStart, { passive: false })
        window.removeEventListener('touchmove', handleTouchMove, { passive: false })
      }
    } else {
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [currentIndex, xDown, yDown])

  return <div className='slider'>
    <div className='slider-wrapper'
      style={{
        transform: `translateX(${translateValue}%)`,
        transition: 'transform ease-out 0.45s',
        width: '100%',
        height: '100%',
        whiteSpace: 'nowrap'
      }}>
      {
        images.map((image, i) => (
          <img
            className='slide'
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '100%',
              display: 'inline-block',
              verticalAlign: 'middle',
              backgroundColor: '#f2f2f2',
              position: 'relative',
              margin: '0 auto',
              opacity: currentIndex === i ? 1 : .2,
              transition: 'opacity .3s, transform .3s'
            }}
            src={image}
            key={`slide-image-${i}`}
          />
        ))
      }
    </div>
    <AltLeftArrow
      clickAction={goToPrevSlide}
      style={{
        width: '10%',
        left: '-10%'
      }}
    />
    <AltRightArrow
      clickAction={goToNextSlide}
      style={{
        width: '10%',
        right: '-10%'
      }}
    />
    <style jsx>{`
    .slider {
      position: absolute;
      width: 80%;
      margin: 0 10%;
      height: auto;
      top: 50%;
      transform: translateY(-50%);      
    }
  `}</style>
  </div>
}

export default GalleryView