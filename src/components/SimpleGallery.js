import React, { useState, useEffect, useRef } from 'react'
import { AltRightArrow, AltLeftArrow } from './SliderArrows'
import { isMobile } from 'react-device-detect'

const SimpleGallery = ({ images, view }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [translateValue, setTranslateValue] = useState(0)
  const [xDown, setXDown] = useState(null)
  const [yDown, setYDown] = useState(null)
  const galleryContainer = useRef(null)

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
    const firstTouch = getTouches(e)[0]
    setXDown(firstTouch.clientX)
    setYDown(firstTouch.clientY)
  }

  const handleTouchMove = (e) => {
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
      galleryContainer.current.addEventListener('touchstart', handleTouchStart, { passive: false })
      galleryContainer.current.addEventListener('touchmove', handleTouchMove, { passive: false })
      return () => {
        galleryContainer.current.removeEventListener('touchstart', handleTouchStart, { passive: false })
        galleryContainer.current.removeEventListener('touchmove', handleTouchMove, { passive: false })
      }
    } else {
      galleryContainer.current.addEventListener('keydown', handleKeyDown)
      return () => {
        galleryContainer.current.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [])

  return <div className='slider' ref={galleryContainer}>
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
          <div
            style={{
              height: '100%',
              width: '100%',
              position: 'relative',
              display: 'inline-block'
            }}>
            <img
              className='slide'
              style={{
                top: '50%',
                left: '50%',
                height: '100%',
                transform: 'translateX(-50%) translateY(-50%)',
                display: 'inline-block',
                verticalAlign: 'middle',
                backgroundColor: '#f2f2f2',
                position: 'absolute',
                margin: '0 auto',
                opacity: currentIndex === i ? 1 : 0,
                transition: 'opacity .3s, transform .3s'
              }}
              src={image}
              key={`slide-image-${i}`}
            />
          </div>
        ))
      }
    </div>
    <AltLeftArrow
      clickAction={goToPrevSlide}
      view={view}
      style={{
        width: '10%',
        left: '-10%'
      }}
    />
    <AltRightArrow
      clickAction={goToNextSlide}
      view={view}
      style={{
        width: '10%',
        right: '-10%'
      }}
    />
    <style jsx>{`
    .slider {
      position: absolute;
      width: 80%;
      height: 100%;
      margin: 0 10%;
      top: 50%;
      transform: translateY(-50%);    
    }
  `}</style>
  </div>
}

export default SimpleGallery