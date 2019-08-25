import React, { Component } from 'react'
import { RightArrow, LeftArrow } from './SliderArrows'
import Image from './Image'
import ResponsiveCarousel from './ResponsiveCarousel'
import Slide from './Slide'
import { Caption } from './Type'
import { getPaddingTop } from '../utils/aspectRatio'
import { isMobile } from 'react-device-detect'

export default class RevealCarousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: 0,
      teaseState: '',
      hoverPause: false,
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
      currentIndex: this.state.currentIndex === 0 ? this.props.images.length - 1 : prevState.currentIndex - 1,
      teaseState: '',
      hoverPause: true
    }))
    setTimeout(() => {
      this.setState({
        hoverPause: false
      })
    }, 1000)
  }

  goToNextSlide() {
    this.setState(prevState => ({
      currentIndex: (this.state.currentIndex === this.props.images.length - 1) ? 0 : prevState.currentIndex + 1,
      teaseState: '',
      hoverPause: true
    }))
    setTimeout(() => {
      this.setState({
        hoverPause: false
      })
    }, 1000)
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
      return (this.carouselElem.removeEventListener('touchstart', this.handleTouchStart) && this.carouselElem.removeEventListener('touchmove', this.handleTouchMove))
    }
    /* reset values */
    this.xDown = null
    this.yDown = null
  }

  componentDidMount() {
    if (isMobile) {
      return
    } else {
      this.carouselElem.addEventListener('keydown', this.handleKeyDown, false)
    }
  }

  componentWillUnmount() {
    this.killListeners()
  }

  killListeners() {
    if (isMobile) {
      return
    } else {
      this.carouselElem.removeEventListener('keydown', this.handleKeyDown)
    }
  }

  hoverTeasePrev() {
    this.setState({
      teaseState: this.state.hoverPause ? '' : 'tease-prev'
    })
  }
  hoverTeaseNext() {
    this.setState({
      teaseState: this.state.hoverPause ? '' : 'tease-next'
    })
  }
  hoverTeaseReset() {
    this.setState({
      teaseState: ''
    })
  }

  getCarouselStyle(index) {
    const active = this.state.currentIndex
    const prev = this.state.currentIndex - 1 >= 0 ? this.state.currentIndex - 1 : this.props.images.length - 1
    const next = this.state.currentIndex + 1 <= this.props.images.length - 1 ? this.state.currentIndex + 1 : 0
    switch (index) {
      case active:
        return {
          display: 'block',
          transition: 'transform 0.75s',
          zIndex: this.state.teaseState !== '' ? '7' : '10'
        }
      case prev:
        return {
          display: 'block',
          zIndex: this.state.teaseState === 'tease-prev' ? '9' : '6',
          backfaceVisibility: 'hidden',
          transform: this.state.teaseState === 'tease-prev' ? 'translateX(-93%) translateZ(0' : 'translateX(-100%) translateZ(0)',
          transition: this.state.teaseState === 'tease-prev' ? 'transform 0.75s' : 'transform 0s',
          transitionDelay: this.state.teaseState === 'tease-prev' ? '0s' : '0.76s',
          boxShadow: this.state.teaseState === 'tease-prev' ? '2px 0px 30px 0px rgba(0,0,0,0.23)' : '2px 0px 30px 0px rgba(0,0,0,0)'
        }
      case next:
        return {
          display: 'block',
          zIndex: this.state.teaseState === 'tease-next' ? '8' : '6',
          transition: this.state.teaseState === 'tease-next' ? 'transform 0.75s' : 'transform 0s',
          transitionDelay: this.state.teaseState === 'tease-next' ? '0s' : '0.76s',
          transform: this.state.teaseState === 'tease-next' ? 'translateX(93%) translateZ(0)' : 'translateX(100%) translateZ(0)',
          boxShadow: this.state.teaseState === 'tease-next' ? '-2px 0px 30px 0px rgba(0,0,0,0.23)' : '-2px 0px 30px 0px rgba(0,0,0,0)'
        }
      default:
        return {
        }
    }
  }
  render() {
    return (
      <div>
        {isMobile ?
          <ResponsiveCarousel countIndicator={this.props.countIndicator} caption={this.props.caption} imageAspect={this.props.thumbAspect} aspectRatio={this.props.containerAspect} >
            {
              this.props.images.map((image, i) => (
                <div
                  key={`carouselImage${i}`}
                  style={{
                    position: 'relative'
                  }}>
                  <Image
                    aspectRatio={this.props.aspectRatio}
                    imgSource={image}
                    skipIntro
                    visibilityOverride
                  />
                </div>
              ))
            }
          </ResponsiveCarousel>
          :
          <figure
            ref={elem => { this.carouselElem = elem }}
            style={{
              position: 'relative',
              width: '100%',
              height: '100%'
            }}
            className={`carouselWrapper ${this.props.fullBleed ? ' full-bleed' : ''}${this.props.caption && this.props.caption.length > 0 ? ' withCaption' : ''}`}>
            <div
              style={{
                position: 'relative',
                height: '100%',
                width: '100%',
                overflow: 'hidden',
                touchAction: 'pan-y',
                userSelect: 'none',
                paddingTop: getPaddingTop(this.props.aspectRatio)
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
                  position: this.props.aspectRatio === 'noAspect' ? 'relative' : 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  transition: 'transform .75s ease, box-shadow .3s ease'
                }}
                className='carousel__images-container'>
                {
                  this.props.images.map((image, i) => (
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
                      }, this.getCarouselStyle(i))}>
                      <Slide key={i} image={image} classAdd='carousel__image-wrapper' renderImage={this.props.aspectRatio === 'noAspect'} />
                    </div>
                  ))
                }

              </div>

            </div>

            {this.props.caption && this.props.caption.length > 0 ? <Caption classAdd='col-6 skip-3 col-6-tab skip-1-tab'>{this.props.caption}</Caption> : ''}
          </figure>}
      </div>
    )
  }
}
