import React, { useState, useEffect, useRef } from 'react'
import { AltRightArrow, AltLeftArrow } from './SliderArrows'
import { isMobile } from 'react-device-detect'

const SimpleGallery = ({ images, view }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [translateValue, setTranslateValue] = useState(0)
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
      return
    } else {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
        window.removeEventListener('keydown', handleKeyDown)
        }
      }
    }, [currentIndex])

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
            key={`item-${i}`}
            style={{
              height: '80%',
              width: '100%',
              margin: 'auto',
              top: '10%',
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