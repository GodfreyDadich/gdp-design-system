import React, { useState, useEffect, useRef } from 'react'
import { RevealRightArrow, RevealLeftArrow, LeftArrow, RightArrow } from './SliderArrows'
import Slide from './Slide'
import { Caption } from './Type'
import { getPaddingTop } from '../utils/aspectRatio'
import { isMobile, isMobileOnly, isTablet } from 'react-device-detect'
const RevealCarousel = props => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [teaseState, setTeaseState] = useState('')
  const [hoverPause, setHoverPause] = useState(false)
  const [currentCapIndex, setCurrentCapIndex] = useState(0)
  const [captionMargin, setCaptionMargin] = useState('0')
  const carouselElem = useRef(null)
  const paddingTop = getPaddingTop(props.aspectRatio)

  useEffect(() => {
    setCaptionMargin(isMobileOnly ? '0 24px' : isTablet ? '0 30px' : '0 42px')
    if (!isMobile) {
      carouselElem.current.addEventListener('keydown', handleKeyDown, false)
    }
    return () => {
      killListeners()
    }
  }, [])

  const killListeners = () => {
    if (!isMobile) {
      carouselElem.current.removeEventListener('keydown', handleKeyDown)
    }
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
    setHoverPause(true)

    setTimeout(() => {
      setHoverPause(false)
      setCurrentCapIndex(slideIndex)
    }, 750)
  }
  const goToPrevSlide = () => {
    const prevSlide = currentIndex === 0 ? props.images.length - 1 : currentIndex - 1
    goToSlide(prevSlide)
  }
  const goToNextSlide = () => {
    const nextSlide = (currentIndex === props.images.length - 1) ? 0 : currentIndex + 1
    goToSlide(nextSlide)
  }
  const handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      goToNextSlide()
    }
    if (e.keyCode === 37) {
      goToPrevSlide()
    }
  }
  const hoverTeasePrev = () => {
    setTeaseState('tease-prev')
  }
  const hoverTeaseNext = () => {
    setTeaseState('tease-next')
  }
  const hoverTeaseReset = () => {
    setTeaseState('')
  }

  const getCarouselImageClass = imgIndex => {
    const active = currentIndex
    const prev = currentIndex - 1 >= 0 ? currentIndex - 1 : props.images.length - 1
    const next = currentIndex + 1 <= props.images.length - 1 ? currentIndex + 1 : 0

    switch (imgIndex) {
      case active:
        return 'active'
      case prev:
        return 'prev'
      case next:
        return 'next'
      default:
        return ''
    }
  }

  return <div>
    <figure
      ref={carouselElem}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}
      className={`carouselWrapper ${props.fullBleed ? ' full-bleed' : ''}${props.caption && props.caption.length > 0 ? ' withCaption' : ''}`}>
      <div
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
          overflow: 'hidden',
          touchAction: 'pan-y',
          userSelect: 'none',
          paddingTop: paddingTop
        }}
        className={`carousel__container ${teaseState}`}>
        {isMobile
          ? <RevealLeftArrow
            clickAction={hoverPause ? null : goToPrevSlide}
            over={hoverTeasePrev}
            out={hoverTeaseReset}
          />
          : <LeftArrow
            clickAction={goToPrevSlide}
            over={hoverTeasePrev}
            out={hoverTeaseReset}
            style={{
              left: hoverPause ? '-100%' : 0,
              width: '50%'
            }}
          />}
        {isMobile
          ? <RevealRightArrow
            clickAction={hoverPause ? null : goToNextSlide}
            over={hoverTeaseNext}
            out={hoverTeaseReset}
          />
          : <RightArrow
            clickAction={goToNextSlide}
            over={hoverTeaseNext}
            out={hoverTeaseReset}
            style={{
              right: hoverPause ? '-100%' : 0,
              width: '50%'
            }}
          />
        }
        <div
          style={{
            position: props.aspectRatio === 'noAspect' ? 'relative' : 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            transition: 'transform .75s ease, box-shadow .3s ease'
          }}
          className={`carousel__images-container`}>
          {
            props.images.map((image, i) => (
              <div
                className={`carouselImage ${getCarouselImageClass(i)}`}
                key={`carouselImage${i}`}
              >
                <Slide key={i} image={image} classAdd='carousel__image-wrapper' renderImage={props.aspectRatio === 'noAspect'} />
              </div>
            ))
          }
        </div>
      </div>
      {props.captionsArray ?
        <div style={{ height: isMobile ? '11vw' : '2vw', margin: captionMargin }}>
          <Caption classAdd='col-6 skip-3 col-6-tab skip-1-tab'>
            <span style={{
              opacity: hoverPause ? 0 : 1,
              transition: 'opacity .2s ease-in-out'
            }}>{props.captionsArray[currentCapIndex]}</span>
          </Caption>
        </div>
        : props.caption && props.caption.length > 0
          ? <Caption classAdd='col-6 skip-3 col-6-tab skip-1-tab'>{props.caption}</Caption> : ''}
    </figure>
    <style jsx>{`
      .carouselImage {
        display: block;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0%;
        transition: all 0s 0.76s, left 0s 0s, z-index 0s 0s;
        transition-timing-function: linear;
        transform: translateX(0%);
        overflow: hidden;
        z-index: 3;
        opacity: 0;

        &.active {
          transition: transform 0.75s 0s, left 0s 0s, z-index 0s 0s;
          transform: translateX(0%);
          z-index: 10;
          opacity: 1;
        }

        &.prev {
          transform: translateX(-100%);
          transition: all 0s 0.76s, left 0.75s 0.2s, z-index 0s 0s;
          box-shadow: 2px 0px 30px 0px rgba(0,0,0,0);
          opacity: 1;
          z-index: 8;
          opacity: 1;
        }

        &.next {
          transition: all 0s 0.76s, left 0.75s 0.2s, z-index 0s 0s;
          transform: translateX(100%);
          boxShadow: -2px 0px 30px 0px rgba(0,0,0,0); 
          opacity: 1;
          z-index: 8;
          opacity: 1;
        }
      }

      @media only screen and (min-width: 769px) {
        .tease-prev {
          .carouselImage {
            &.prev {
              left: 5%;
              transition: left 0.75s 0.2s;
              box-shadow: 2px 0px 30px 0px rgba(0,0,0,0.23);
              z-index: 11;
            }       
          }
        }
        .tease-next {
          .carouselImage {
            &.next {
              left: -5%;
              transition: left 0.75s 0.2s;
              box-shadow: -2px 0px 30px 0px rgba(0,0,0,0.23);
              z-index: 11;
            }   
          }
        }
      }

    
    `}</style>
  </div>
}
export default RevealCarousel
