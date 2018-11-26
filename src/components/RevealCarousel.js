import React, { Component } from 'react'
import { RightArrow, LeftArrow } from './SliderArrows'
import Slide from './Slide'
import { Caption } from './Type'
import { getPaddingTop } from '../utils/aspectRatio'

export default class RevealCarousel extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentIndex: 0,
      teaseState: ''
    }
    this.goToNextSlide = this.goToNextSlide.bind(this)
    this.goToPrevSlide = this.goToPrevSlide.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.getCarouselStyle = this.getCarouselStyle.bind(this)
    this.hoverTeasePrev = this.hoverTeasePrev.bind(this)
    this.hoverTeaseNext = this.hoverTeaseNext.bind(this)
    this.hoverTeaseReset = this.hoverTeaseReset.bind(this)
  }

  goToPrevSlide () {
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.props.images.length - 1,
        teaseState: ''
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      teaseState: ''
    }))
  }

  goToNextSlide () {
    if (this.state.currentIndex === this.props.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        teaseState: ''
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      teaseState: ''
    }))
  }

  handleKeyDown (e) {
    if (e.keyCode === 39) {
      this.goToNextSlide()
    }
    if (e.keyCode === 37) {
      this.goToPrevSlide()
    }
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyDown, false)
  }

  hoverTeasePrev () {
    this.setState({
      teaseState: 'tease-prev'
    })
  }
  hoverTeaseNext () {
    this.setState({
      teaseState: 'tease-next'
    })
  }
  hoverTeaseReset () {
    this.setState({
      teaseState: ''
    })
  }

  getCarouselStyle (index) {
    const active = this.state.currentIndex
    const prev = this.state.currentIndex - 1 >= 0 ? this.state.currentIndex - 1 : this.props.images.length - 1
    const next = this.state.currentIndex + 1 <= this.props.images.length - 1 ? this.state.currentIndex + 1 : 0
    switch (index) {
      case active :
        return {
          display: 'block',
          transition: 'none',
          zIndex: '7'
        }
      case prev :
        return {
          display: 'block',
          overflow: 'hidden',
          top: '0',
          zIndex: '9',
          transition: 'transform 0.5s',
          backfaceVisibility: 'hidden',
          transform: this.state.teaseState === 'tease-prev' ? 'translateX(-93%) translateZ(0' : 'translateX(-100%) translateZ(0)',
          width: '100%',
          boxShadow: this.state.teaseState === 'tease-prev' ? '2px 0px 30px 0px rgba(0,0,0,0.23)' : '2px 0px 30px 0px rgba(0,0,0,0)'     
        }
      case next :
        return {
          display: 'block',
          overflow: 'hidden',
          top: '0',
          zIndex: this.state.teaseState === 'tease-next' ? '8' : '9',
          transition: 'transform 0.5s',
          transform: this.state.teaseState === 'tease-next' ? 'translateX(93%) translateZ(0)' : 'translateX(100%) translateZ(0)',
          boxShadow: this.state.teaseState === 'tease-next' ? '-2px 0px 30px 0px rgba(0,0,0,0.23)' : '-2px 0px 30px 0px rgba(0,0,0,0)'
        }
      default :
        return ''
    }
  }
  render () {
    return (
      <figure
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
              transition: 'transform .3s ease, box-shadow .3s ease'
            }}
            className='carousel__images-container'>
            {
              this.props.images.map((image, i) => (
                <div
                  key={`carouselImage${i}`}
                  style={Object.assign({
                    display: 'none',
                    height: this.props.aspectRatio === 'noAspect' ? 'auto' : '100%',
                    width: this.props.aspectRatio === 'noAspect' ? 'auto' : '100%',
                    position: 'absolute',
                    zIndex: '3'
                  }, this.getCarouselStyle(i))}>
                  <Slide key={i} image={image} classAdd='carousel__image-wrapper' renderImage={this.props.aspectRatio === 'noAspect'} />
                </div>
              ))
            }

          </div>

        </div>

        {this.props.caption && this.props.caption.length > 0 ? <Caption classAdd='col-6 skip-3'>{this.props.caption}</Caption> : ''}
      </figure>
    )
  }
}
