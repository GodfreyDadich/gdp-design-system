import React, { useState, useEffect, useRef } from 'react'
import { AltRightArrow, AltLeftArrow } from './SliderArrows'
import { isMobile } from 'react-device-detect'

const SimpleGallery = ({ images, view, index }) => {
  const [currentIndex, setCurrentIndex] = useState(index || 0)
  const [translateValue, setTranslateValue] = useState(-(index * 100) || 0)
  const [visibleArray, setVisibleArray] = useState([index, index + 1, index + 2, index - 1, index - 2])

  const goToPrevSlide = () => {
    const nextIndex = currentIndex === 0
      ? images.length - 1
      : currentIndex - 1
    const nextTranslateValue = currentIndex === 1
      ? 0
      : -(nextIndex * 100)

    setCurrentIndex(nextIndex)
    setTranslateValue(nextTranslateValue)
    updateVisible(currentIndex)
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
    updateVisible(nextIndex)
  }

  const handleKeyDown = e => {
    if (e.keyCode === 39) {
      goToNextSlide()
    }
    if (e.keyCode === 37) {
      goToPrevSlide()
    }
  }

  const updateVisible = currIndex => {
    const total = images.length - 1
    let visibleArray = [currIndex]
    visibleArray.push(visibleArray[0] === total ? 0 : visibleArray[0] + 1)
    visibleArray.push(visibleArray[1] === total ? 0 : visibleArray[1] + 1)
    visibleArray.push(visibleArray[0] === 0 ? total : visibleArray[0] - 1)
    visibleArray.push(visibleArray[visibleArray.length - 1] === 0 ? total : visibleArray[visibleArray.length - 1] - 1)
    setVisibleArray(visibleArray)
  }

  useEffect(() => {
    updateVisible(currentIndex)
    if (isMobile) {
      return
    } else {
      window.addEventListener('keydown', handleKeyDown)
      return () => {
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [currentIndex])

  const progressStyle = {
    position: 'absolute',
    top: '-4px',
    left: '0',
    height: '4px',
    width: `${100 / images.length * (currentIndex + 1)}%`,
    backgroundColor: '#48FF00',
    transition: '.5s'
  }
  const footerStyle = {
    bottom: `0px`
  }

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
                // opacity: currentIndex === i ? 1 : 0,
                transition: 'opacity .3s, transform .3s'
              }}
              src={visibleArray.includes(i) ? image : ''}
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
    <footer className='consumptions-footer' style={footerStyle}>
      <div style={progressStyle} />
      <a href='/contact' className='footer-link'>Get in Touch</a>
    </footer>
    <style jsx>{`
    .slider {
      position: absolute;
      width: 80%;
      height: 100%;
      margin: 0 10%;
      top: 50%;
      transform: translateY(-50%);    
    }
    .consumptions-footer {
      position: absolute;
      width: 121%;
      bottom: -47px;
      text-align: right;
      padding: 11px 42px;
      margin-top: 10px;
      background-color: #fff;
      border-top: 4px solid #eeeeee;
      z-index: 99998; 
      transition: bottom .5s;
      margin-left: -13%;

      @media only screen and (max-width: 500px) {
        width: 100%;
        padding: 6px 19px;
      }
    }
    .footer-link {
      font-family: 'Atlas Grotesk';
      font-weight: 900;        
      font-size: 14px;
      letter-spacing: -0.3px;
      padding-bottom: 2px;

      @media only screen and (max-width: 500px) {
        font-size: 9px;
        box-shadow: inset 0 -2px 0 #06ff02;
        padding-bottom: 0;
      }            
    }
  `}</style>
  </div>
}

export default SimpleGallery