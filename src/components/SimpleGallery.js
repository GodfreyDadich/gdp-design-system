import React, { useState, useEffect } from 'react'
import { RightArrow, LeftArrow } from './SliderArrows'

const SimpleGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [translateValue, setTranslateValue] = useState(0)

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
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentIndex])

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
              opacity: currentIndex === i ? 1 : .5,
              transform: currentIndex === i ? 'scale(1)' : 'scale(.9)',
              transition: 'opacity .3s, transform .3s'
            }}
            src={image}
            key={`slide-image-${i}`}
          />
        ))
      }
    </div>
    <LeftArrow
      clickAction={goToPrevSlide}
      style={{
        width: '10%',
        left: '-10%'
      }}
    />
    <RightArrow
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

export default SimpleGallery