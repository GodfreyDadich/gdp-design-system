import React, { useState, useEffect, useRef } from 'react'
import { RevealRightArrow, RevealLeftArrow, LeftArrow, RightArrow } from './SliderArrows'
import Slide from './Slide'
import { Caption } from './Type'
import { getPaddingTop } from '../utils/aspectRatio'
import { isMobile } from 'react-device-detect'
const RevealCarousel = props => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [teaseState, setTeaseState] = useState('')
  const [hoverPause, setHoverPause] = useState(false)
  const [clickedLeftArrow, setClickedLeftArrow] = useState(false)
  const [clickedRightArrow, setClickedRightArrow] = useState(false)
  const [currentCapIndex, setCurrentCapIndex] = useState(0)
  const carouselElem = useRef(null)
  
  useEffect(() => {
    if (isMobile) {
      return
    } else {
      carouselElem.current.addEventListener('keydown', handleKeyDown, false)
    }
    return () => {
      killListeners()
    }
  }, [])
  const killListeners = () => {
    if (isMobile) {
      return
    } else {
      carouselElem.current.removeEventListener('keydown', handleKeyDown)
    }
  }
  
const goToSlide = (slideIndex) => {
  setCurrentIndex(slideIndex)
  setTeaseState('')
  setHoverPause(true)
  
  setTimeout(() => {
      setClickedRightArrow(false)
      setClickedLeftArrow(false)
      setCurrentCapIndex(slideIndex)
      setHoverPause(false)
  }, 680)
}
const goToPrevSlide = () => {
  setClickedLeftArrow(true)
  const prevSlide = currentIndex === 0 ? props.images.length -1 : currentIndex - 1
  goToSlide(prevSlide)
}
const goToNextSlide = () => {
  setClickedRightArrow(true)
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
  setTeaseState(hoverPause ? '' : 'tease-prev' )
}
const hoverTeaseNext = () => {
  setTeaseState(hoverPause ? '' : 'tease-next')
}
const hoverTeaseReset = () => {
  setTeaseState('')
}
  
const getCarouselStyle = index => {
    const active = currentIndex
    const prev = currentIndex - 1 >= 0 ? currentIndex - 1 : props.images.length - 1
    const next = currentIndex + 1 <= props.images.length - 1 ? currentIndex + 1 : 0
    switch (index) {
      case active:
        return {
          display: 'block',
          transition: 'transform 0.75s',
          zIndex: teaseState !== '' ? '7' : '10'
        }
      case prev:
        return {
          display: 'block',
          zIndex: teaseState === 'tease-prev' ? '9' : '6',
          backfaceVisibility: 'hidden',
          transform: teaseState === 'tease-prev' ? 'translateX(-93%) translateZ(0' : 'translateX(-100%) translateZ(0)',
          transition: teaseState === 'tease-prev' ? 'transform 0.75s' : 'transform 0s',
          transitionDelay: teaseState === 'tease-prev' ? '0s' : '0.76s',
          boxShadow: teaseState === 'tease-prev' ? '2px 0px 30px 0px rgba(0,0,0,0.23)' : '2px 0px 30px 0px rgba(0,0,0,0)'
        }
      case next:
        return {
          display: 'block',
          zIndex: teaseState === 'tease-next' ? '8' : '6',
          transition: teaseState === 'tease-next' ? 'transform 0.75s' : 'transform 0s',
          transitionDelay: teaseState === 'tease-next' ? '0s' : '0.76s',
          transform: teaseState === 'tease-next' ? 'translateX(93%) translateZ(0)' : 'translateX(100%) translateZ(0)',
          boxShadow: teaseState === 'tease-next' ? '-2px 0px 30px 0px rgba(0,0,0,0.23)' : '-2px 0px 30px 0px rgba(0,0,0,0)'
        }
      default:
        return {
        }
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
            paddingTop: getPaddingTop(props.aspectRatio)
          }}
          className={`carousel__container ${teaseState}`}>
          {isMobile ?
            <RevealLeftArrow
              clickedArrow={clickedLeftArrow}
              clickAction={goToPrevSlide}
              over={hoverTeasePrev}
              out={hoverTeaseReset}
            />
            :
            <LeftArrow
              clickAction={goToPrevSlide}
              over={hoverTeasePrev}
              out={hoverTeaseReset}
            />}
          {isMobile ?
            <RevealRightArrow
              clickedArrow={clickedRightArrow}
              clickAction={goToNextSlide}
              over={hoverTeaseNext}
              out={hoverTeaseReset}
            />
            :
            <RightArrow
              clickAction={goToNextSlide}
              over={hoverTeaseNext}
              out={hoverTeaseReset}
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
            className='carousel__images-container'>
            {
              props.images.map((image, i) => (
                <div
                  key={`carouselImage${i}`}
                  style={Object.assign({
                    display: 'none',
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    top: 0,
                    overflow: 'hidden',
                    zIndex: '3'
                  }, getCarouselStyle(i))}>
                  <Slide key={i} image={image} classAdd='carousel__image-wrapper' renderImage={props.aspectRatio === 'noAspect'} />
                </div>
              ))
            }
          </div>
        </div>
        {props.captionsArray ?
          <div style={{ height: '60px' }}>
            <Caption classAdd='col-6 skip-3 col-6-tab skip-1-tab'>
              <span style={{
                opacity: clickedLeftArrow || clickedRightArrow ? 0 : 1,
                transition: 'opacity .4s ease-in-out'
              }}>{props.captionsArray[currentCapIndex]}</span>
            </Caption>
          </div>
          :
          props.caption && props.caption.length > 0 ? <Caption classAdd='col-6 skip-3 col-6-tab skip-1-tab'>{props.caption}</Caption> : ''}
      </figure>
    </div>
  }
export default RevealCarousel