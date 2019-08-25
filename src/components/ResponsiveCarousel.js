import React, { Component } from 'react'
import { RightArrow, LeftArrow } from './SliderArrows'
import { Caption } from './Type'
import { getPaddingTop } from '../utils/aspectRatio'
import { isMobile } from 'react-device-detect'
import { DotIndicator } from './DotIndicator'
import { CountIndicator } from './CountIndicator';

export default class ResponsiveCarousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0,
      teaseState: '',
      direction: 'next',
      lastIndex: this.props.children.length - 2
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
  }

  goToPrevSlide() {
    this.setState(prevState => ({
      currentIndex: this.state.currentIndex === 0 ? this.props.children.length - 1 : prevState.currentIndex - 1,
      teaseState: '',
      direction: 'prev',
      lastIndex: prevState.lastIndex === 0 ? this.props.children.length - 1 : prevState.lastIndex - 1
    }))
  }

  goToNextSlide() {
    const nextSlide = (this.state.currentIndex === this.props.children.length - 1) ? 0 : this.state.currentIndex + 1

    this.setState(prevState => {
      return {
        currentIndex: nextSlide,
        teaseState: '',
        direction: 'next',
        lastIndex: prevState.lastIndex === this.props.children.length - 1 ? 0 : prevState.lastIndex + 1
      }
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
    e.preventDefault()
    const firstTouch = this.getTouches(e)[0]
    this.xDown = firstTouch.clientX
    this.yDown = firstTouch.clientY
  }

  handleTouchMove(e) {
    e.preventDefault()
    if (!this.xDown || !this.yDown) { return }
    const xLeft = e.touches[0].clientX
    const xDiff = this.xDown - xLeft
    const yUp = e.touches[0].clientY;
    const yDiff = this.yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        this.goToNextSlide()
      } else {
        this.goToPrevSlide()
      }
    } else {
      this.carouselElem.removeEventListener('touchstart', this.handleTouchStart)
      this.carouselElem.removeEventListener('touchmove', this.handleTouchMove)
      this.carouselElem.addEventListener('touchstart', this.handleTouchStart, { passive: false })
      this.carouselElem.addEventListener('touchmove', this.handleTouchMove, { passive: false })
    }
    /* reset values */
    this.xDown = null
    this.yDown = null
  }

  componentDidMount() {
    if (isMobile) {
      this.carouselElem.addEventListener('touchstart', this.handleTouchStart, { passive: false })
      this.carouselElem.addEventListener('touchmove', this.handleTouchMove, { passive: false })
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
          transform: this.state.direction === 'prev' ? 'translateX(55%) translateY(-50%) translateZ(0) scale(0.5, 0.5)' : 'translateX(-155%) translateY(-50%) translateZ(0) scale(0.5, 0.5)'
        }
      default:
        return {
          opacity: '1',
          zIndex: '6',
          transition: 'none',
          transform: this.state.direction === 'prev' ? 'translateX(-175%) translateY(-50%) translateZ(0) scale(0.5, 0.5)' : 'translateX(55%) translateY(-50%) translateZ(0) scale(0.5, 0.5)'
        }
    }
  }
  render() {
    const {
      style = {},
      fullBleed,
      caption,
      aspectRatio,
      children,
      classAdd,
      imageAspect,
      shadow,
      countIndicator
    } = this.props

    return (
      <div
        style={Object.assign({}, {
          position: 'relative',
          overflow: 'visible'
        })}
        className={`carouselWrapper ${fullBleed ? ' full-bleed' : ''}${caption && caption.length > 0 ? ' withCaption' : ''}${classAdd ? ` ${classAdd}` : ''}`}>
        <div
          style={{
            position: 'relative',
            height: '100%',
            width: '100%',
            overflow: 'visible',
            touchAction: 'pan-y',
            userSelect: 'none',
            paddingTop: getPaddingTop(aspectRatio),
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
            ref={elem => this.carouselElem = elem}
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
                    boxShadow: shadow === 'yes' ? '0px 7px 20px rgba(0, 0, 0, 0.4)' : '',
                    display: 'block',
                    verticalAlign: 'middle',
                    position: 'absolute',
                    transform: 'translateX(-50%) translateY(-50%)',
                    transition: 'transform 0.75s',
                    zIndex: '3',
                    top: '50%',
                    left: '50%',
                    width: imageAspect === 'noAspect' ? 'auto' : '75%',
                    maxHeight: imageAspect === 'noAspect' ? '80%' : 'auto'
                  }, this.getCarouselStyle(i))}>
                  {React.cloneElement(child, { active: (this.state.currentIndex === i) })}
                </div>
              ))
            }

          </div>
          {isMobile ? countIndicator === 'counter' ?
            <CountIndicator currentIndex={this.state.currentIndex} imageAspect={imageAspect} children={children} />
            : countIndicator === 'dots' ?
              <DotIndicator currentIndex={this.state.currentIndex} imageAspect={imageAspect} children={children} /> : '' : ''}
        </div>

        {caption && caption.length > 0 ? <Caption classAdd='col-6 skip-3 col-6-tab skip-1-tab'>{caption}</Caption> : ''}
      </div>
    )
  }
}
