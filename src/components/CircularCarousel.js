/// TODO: Convert to functional component.

import React, { Component, Fragment } from 'react'
import { RightArrow, LeftArrow } from './SliderArrows'
import { Caption } from './Type'
import { getPaddingTop } from '../utils/aspectRatio'
import { isMobile } from 'react-device-detect'
import { DotIndicator } from './DotIndicator'
import { CountIndicator } from './CountIndicator'
import PropTypes from 'prop-types'
import { CountIndicator } from './CountIndicator';


export default class CircularCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      teaseState: '',
      direction: 'next',
      lastIndex: this.props.children.length - 2,
      visibleArray: [0, 1, 2, this.props.children.length - 1, this.props.children.length - 2]
    }
    this.goToNextSlide = this.goToNextSlide.bind(this)
    this.goToPrevSlide = this.goToPrevSlide.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.getCarouselStyle = this.getCarouselStyle.bind(this)
    this.hoverTeasePrev = this.hoverTeasePrev.bind(this)
    this.hoverTeaseNext = this.hoverTeaseNext.bind(this)
    this.hoverTeaseReset = this.hoverTeaseReset.bind(this)
    this.handleTouchMove = this.handleTouchMove.bind(this)
    this.handleTouchStart = this.handleTouchStart.bind(this)
    this.handleTouchEnd = this.handleTouchEnd.bind(this)
    this.updateVisible = this.updateVisible.bind(this)
  }

  goToPrevSlide() {
    const currIndex = this.state.currentIndex === 0 ? this.props.children.length - 1 : this.state.currentIndex - 1
    const lastIndex = currIndex === 0 ? this.props.children.length - 1 : currIndex - 1

    this.setState(prevState => ({
      currentIndex: currIndex,
      teaseState: '',
      direction: 'prev',
      lastIndex: lastIndex
    }))
    this.updateVisible(currIndex)
  }

  goToNextSlide() {
    const nextSlide = (this.state.currentIndex === this.props.children.length - 1) ? 0 : this.state.currentIndex + 1
    const lastIndex = nextSlide === this.props.children.length - 1 ? 0 : nextSlide + 1

    this.setState(prevState => {
      return {
        currentIndex: nextSlide,
        teaseState: '',
        direction: 'next',
        lastIndex: lastIndex
      }
    })
    this.updateVisible(nextSlide)
  }

  updateVisible(currIndex) {
    const total = this.props.children.length - 1
    let visibleArray = [currIndex]
    visibleArray.push(visibleArray[0] === total ? 0 : visibleArray[0] + 1)
    visibleArray.push(visibleArray[1] === total ? 0 : visibleArray[1] + 1)
    visibleArray.push(visibleArray[0] === 0 ? total : visibleArray[0] - 1)
    visibleArray.push(visibleArray[visibleArray.length - 1] === 0 ? total : visibleArray[visibleArray.length - 1] - 1)
    this.setState({
      visibleArray: visibleArray
    })
  }

  handleKeyDown(e) {
    if (e.keyCode === 39) {
      this.goToNextSlide()
    }
    if (e.keyCode === 37) {
      this.goToPrevSlide()
    }
  }

  getTouches(e) {
    return e.touches || // browser API
      e.originalEvent.touches // jQuery
  }

  handleTouchStart(e) {
    this.carouselElem.addEventListener('touchend', this.handleTouchEnd, { passive: false })
    const firstTouch = this.getTouches(e)[0]
    this.xDown = firstTouch.clientX
    this.yDown = firstTouch.clientY
  }

  handleTouchEnd(e) {
    e.preventDefault()
    if (e.target.classList.contains('nextArrow')) {
      this.goToNextSlide()
    }
    else if (e.target.classList.contains('backArrow')) {
      this.goToPrevSlide()
    } else {
      return
    }
  }

  handleTouchMove(e) {
    this.carouselElem.removeEventListener('touchend', this.handleTouchEnd)
    if (!this.xDown || !this.yDown) { return }
    const xLeft = e.touches[0].clientX
    const xDiff = this.xDown - xLeft
    if (Math.abs(xDiff) > 6) {
      e.preventDefault()
      const direction = (xDiff > 0) ? 'right' : 'left'
      if (direction === 'right') {
        this.goToNextSlide()
      } else {
        this.goToPrevSlide()
      }
    }

    /* reset values */
    this.xDown = null
    this.yDown = null
  }

  componentDidMount() {
    if (isMobile) {
      this.carouselElem.addEventListener('touchstart', this.handleTouchStart, { passive: false })
      this.carouselElem.addEventListener('touchmove', this.handleTouchMove, { passive: false })
      this.carouselElem.addEventListener('touchend', this.handleTouchEnd, { passive: false })
    } else {
      document.addEventListener('keydown', this.handleKeyDown, false)
    }
  }

  componentWillUnmount() {
    this.killListeners()
  }

  killListeners() {
    if (isMobile) {
      this.carouselElem.removeEventListener('touchstart', this.handleTouchStart)
      this.carouselElem.removeEventListener('touchmove', this.handleTouchMove)
      this.carouselElem.removeEventListener('touchend', this.handleTouchEnd)
    } else {
      document.removeEventListener('keydown', this.handleKeyDown)
    }
  }

  hoverTeasePrev() {
    this.setState({
      teaseState: 'tease-prev'
    })
  }
  hoverTeaseNext() {
    this.setState({
      teaseState: 'tease-next'
    })
  }
  hoverTeaseReset() {
    this.setState({
      teaseState: ''
    })
  }

  getCarouselStyle(index) {
    const active = this.state.currentIndex
    const prev = this.state.currentIndex - 1 >= 0 ? this.state.currentIndex - 1 : this.props.children.length - 1
    const next = this.state.currentIndex + 1 <= this.props.children.length - 1 ? this.state.currentIndex + 1 : 0
    const last = this.state.lastIndex
    switch (index) {
      case active:
        return {
          opacity: '1',
          zIndex: '10'
        }
      case prev:
        return {
          opacity: '1',
          zIndex: this.state.direction === 'prev' ? '9' : '8',
          transition: this.state.direction === 'next' ? 'transform 0.75s' : this.state.teaseState === 'tease-prev' ? 'transform 0.5s' : 'none',
          transform: this.state.teaseState === 'tease-prev' ? 'translateX(-150%) translateY(-50%) translateZ(0) scale(0.8, 0.8)' : 'translateX(-155%) translateY(-50%) translateZ(0) scale(0.75, 0.75)'
        }
      case next:
        return {
          opacity: '1',
          zIndex: this.state.direction === 'next' ? '9' : '8',
          transition: this.state.direction === 'prev' ? 'transform 0.75s' : this.state.teaseState === 'tease-next' ? 'transform 0.5s' : 'none',
          transform: this.state.teaseState === 'tease-next' ? 'translateX(50%) translateY(-50%) translateZ(0) scale(0.8, 0.8)' : 'translateX(55%) translateY(-50%) translateZ(0) scale(0.75, 0.75)'
        }
      case last:
        return {
          opacity: '1',
          zIndex: '6',
          transition: 'transform 0.75s',
          transform: this.state.direction === 'prev' ? 'translateX(55%) translateY(-50%) translateZ(0) scale(0.5, 0.5)' : 'translateX(-160%) translateY(-50%) translateZ(0) scale(0.5, 0.5)'
        }
      default:
        return {
          opacity: '0',
          zIndex: '6',
          transition: 'transform 0.75s, opacity 1s',
          transform: this.state.direction === 'prev' ? 'translateX(65%) translateY(-50%) translateZ(0) scale(0.5, 0.5)' : 'translateX(-180%) translateY(-50%) translateZ(0) scale(0.5, 0.5)'
        }
    }
  }
  render() {
    const {
      fullBleed,
      caption,
      aspectRatio,
      children,
      classAdd,
      shadow,
      countIndicator,
      imageAspect,
      gridGallery,
      altRatio
    } = this.props

    const {
      visibleArray
    } = this.state

    return (
      <div
        style={Object.assign({}, {
          position: 'relative',
          overflow: 'visible'
        })}
        className={`carouselWrapper ${fullBleed ? ' full-bleed' : ''}${caption && caption.length > 0 ? ' withCaption' : ''}${classAdd ? ` ${classAdd}` : ''}`}>
        <div
          ref={elem => { this.carouselElem = elem }}
          style={{
            position: 'relative',
            height: '100%',
            width: '100%',
            overflow: 'visible',
            touchAction: 'pan-y',
            userSelect: 'none',
            paddingTop: isMobile && altRatio ? getPaddingTop(altRatio) : getPaddingTop(aspectRatio),
            backgroundColor: 'rgb(242,242,242)'
          }}
          className={`carousel__container ${this.state.teaseState}`}>
          <LeftArrow
            clickAction={this.goToPrevSlide}
            over={this.hoverTeasePrev}
            out={this.hoverTeaseReset}
          />
          <RightArrow
            clickAction={this.goToNextSlide}
            over={this.hoverTeaseNext}
            out={this.hoverTeaseReset}
          />
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              transition: 'transform .3s ease, box-shadow .3s ease'
            }}
            className='carousel__images-container'>
            {
              children.map((child, i) => (
                <div
                  key={`carouselImage${i}`}
                  style={Object.assign({
                    boxShadow: shadow === 'yes' ? '0px 4px 25px rgba(0, 0, 0, 0.4)' : '',
                    display: 'block',
                    verticalAlign: 'middle',
                    position: 'absolute',
                    transform: 'translateX(-50%) translateY(-50%) scale(1.1)',
                    transition: 'transform 0.75s',
                    zIndex: '3',
                    top: '50%',
                    left: '50%',
                    width: imageAspect && imageAspect === 'noAspect' ? 'auto' : '75%',
                    maxHeight: imageAspect && imageAspect === 'noAspect' ? '80%' : 'auto',
                    height: 'auto'
                  }, this.getCarouselStyle(i))}>
                  {visibleArray.includes(i)
                    ? React.cloneElement(child, {
                      active: (this.state.currentIndex === i),
                      visibilityOverride: true
                    })
                    : <Fragment />}
                </div>
              ))
            }

          </div>
          {isMobile ? countIndicator === 'counter' ?
            <CountIndicator currentIndex={this.state.currentIndex} imageAspect={imageAspect || aspectRatio} children={children} />
            : countIndicator === 'dots'
              ? <DotIndicator currentIndex={this.state.currentIndex} imageAspect={imageAspect || aspectRatio} children={children} /> : '' : ''}
        </div>
        {caption && caption.length > 0 ? <Caption classAdd={`${gridGallery ? 'col-6 skip-2 col-6-tab skip-0-tab' : 'col-6 skip-2 col-6-tab skip-1-tab'}`}>{caption}</Caption> : ''}
      </div>
    )
  }
}

CircularCarousel.propTypes = {
  fullBleed: PropTypes.bool,
  caption: PropTypes.string,
  aspectRatio: PropTypes.oneOf(['sixteen', 'standard', 'square', 'cropped', 'noAspect']),
  classAdd: PropTypes.string,
  shadow: PropTypes.bool,
  countIndicator: PropTypes.oneOf(['counter', 'dots', 'none']),
  imageAspect: PropTypes.oneOf(['sixteen', 'standard', 'square', 'cropped', 'noAspect']),
  altRatio: PropTypes.oneOf(['sixteen', 'standard', 'square', 'cropped', 'noAspect'])
}

CircularCarousel.defaultProps = {
  aspectRatio: 'standard',
  fullBleed: false,
  shadow: false,
  countIndicator: 'none',
  imageAspect: 'standard'
}
