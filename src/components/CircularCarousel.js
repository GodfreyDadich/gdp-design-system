import React, { Component } from 'react'
import { RightArrow, LeftArrow } from './SliderArrows'
import { Caption } from './Type'
import { getPaddingTop } from '../utils/aspectRatio'
import { isMobile } from 'react-device-detect'

export default class CircularCarousel extends Component {
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
    const direction = (xDiff > 0) ? 'right' : 'left'
    if (direction === 'right') {
      this.goToNextSlide()
    } else {
      this.goToPrevSlide()
    }

    /* reset values */
    this.xDown = null
    this.yDown = null
  }

  componentDidMount() {
    if (isMobile) {
      document.addEventListener('touchstart', this.handleTouchStart, { passive: false })
      document.addEventListener('touchmove', this.handleTouchMove, { passive: false })
    } else {
      document.addEventListener('keydown', this.handleKeyDown, false)
    }
  }

  componentWillUnmount() {
    this.killListeners()
  }

  killListeners() {
    if (isMobile) {
      document.removeEventListener('touchstart', this.handleTouchStart)
      document.removeEventListener('touchmove', this.handleTouchMove)
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
          transform: this.state.teaseState === 'tease-prev' ? 'translateX(-70%) translateZ(0) scale(0.8, 0.8)' : 'translateX(-75%) translateZ(0) scale(0.75, 0.75)',
        }
      case next:
        return {
          opacity: '1',
          zIndex: this.state.direction === 'next' ? '9' : '8',
          transition: this.state.direction === 'prev' ? 'transform 0.75s' : this.state.teaseState === 'tease-next' ? 'transform 0.5s' : 'none',
          transform: this.state.teaseState === 'tease-next' ? 'translateX(170%) translateZ(0) scale(0.8, 0.8)' : 'translateX(175%) translateZ(0) scale(0.75, 0.75)',
        }
      case last:
        return {
          opacity: '1',
          zIndex: '6',
          transition: 'transform 0.75s',
          transform: this.state.direction === 'prev' ? 'translateX(200%) translateZ(0) scale(0.5, 0.5)' : 'translateX(-100%) translateZ(0) scale(0.5, 0.5)'
        }
      default:
        return {
          opacity: '1',
          zIndex: '6',
          transition: 'none',
          transform: this.state.direction === 'prev' ? 'translateX(-75%) translateZ(0) scale(0.5, 0.5)' : 'translateX(175%) translateZ(0) scale(0.5, 0.5)'
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
      classAdd
    } = this.props
    return (
      <div
        style={Object.assign(style, {
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
            style={{
              position: aspectRatio === 'noAspect' ? 'relative' : 'absolute',
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
                    display: 'inline-block',
                    width: '50%',
                    height: 'auto',
                    verticalAlign: 'middle',
                    position: aspectRatio === 'noAspect' ? 'relative' : 'absolute',
                    transform: 'translateX(50%)',
                    transition: 'transform 0.75s',
                    zIndex: '3',
                    top: '15%'
                  }, this.getCarouselStyle(i))}>
                  {React.cloneElement(child, { active: (this.state.currentIndex === i) })}
                </div>
              ))
            }
          </div>
          {isMobile ? <div
            className='counter-wrapper'
            style={{
              margin: 'auto',
              width: '50%',
              textAlign: 'center',
              fontColor: '#6D6A60',
              fontFamily: 'Atlas Grotesk',
              fontSize: '9px',
              marginBottom: '9px'
            }}
          >
            <span
              className='left-arrow-wrapper'
              style={{
                top: '50%',
                margin: '0',
                transform: 'translateY(-50%)',
                left: '15%',
              }}><i
                className="left-arrow-head"
                style={{
                  border: 'solid #6D6A60',
                  borderWidth: '0 1px 1px 0',
                  display: 'inline-block',
                  padding: '2px',
                  transform: 'rotate(135deg)',

                }}></i></span>
            <span
              className='counter-content'
              style={{ 
                color: '#6D6A60',
                letterSpacing: '.75px',
                fontWeight: 400
              }}>
              &nbsp;&nbsp;{this.state.currentIndex + 1}/{children.length}&nbsp;&nbsp;
              </span>
            <span
              className='right-arrow-wrapper'
              style={{
                top: '50%',
                margin: '0',
                transform: 'translateY(-50%)',
                right: '15%',

              }}><i
                className="right-arrow-head"
                style={{
                  border: 'solid #6D6A60',
                  borderWidth: '0 1px 1px 0',
                  display: 'inline-block',
                  padding: '2px',
                  transform: 'rotate(-45deg)',

                }}></i></span></div> : ''}
        </div>

        {caption && caption.length > 0 ? <Caption classAdd='col-6 skip-3 col-6-tab skip-1-tab'>{caption}</Caption> : ''}
      </div>
    )
  }
}
