import React, { Component } from 'react'
import { RightArrow, LeftArrow } from './SliderArrows'
import { Caption } from './Type'
import { getPaddingTop } from '../utils/aspectRatio'

export default class CircularCarousel extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentIndex: 0,
      teaseState: '',
      direction: 'next'
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
        currentIndex: this.props.children.length - 1,
        teaseState: '',
        direction: 'prev'
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      teaseState: '',
      direction: 'prev'
    }))
  }

  goToNextSlide () {
    if (this.state.currentIndex === this.props.children.length - 1) {
      return this.setState({
        currentIndex: 0,
        teaseState: '',
        direction: 'next'
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      teaseState: '',
      direction: 'next'
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
    const prev = this.state.currentIndex - 1 >= 0 ? this.state.currentIndex - 1 : this.props.children.length - 1
    const next = this.state.currentIndex + 1 <= this.props.children.length - 1 ? this.state.currentIndex + 1 : 0
    switch (index) {
      case active :
        return {
          display: 'block',
          opacity: 1,
          transition: 'transform 0.75s',
          zIndex: '10'
        }
      case prev :
        return {
          display: 'block',
          opacity: 1,
          top: '0',
          zIndex: '9',
          transition: 'transform 0.75s',
          backfaceVisibility: 'hidden',
          transform: this.state.teaseState === 'tease-prev' ? 'translateX(-45%) translateZ(0) scale(0.8, 0.8)' : 'translateX(-50%) translateZ(0) scale(0.75, 0.75)',
        }
      case next :
        return {
          display: 'block',
          opacity: 1,
          top: '0',
          zIndex: '8',
          transition: 'transform 0.75s',
          transform: this.state.teaseState === 'tease-next' ? 'translateX(145%) translateZ(0) scale(0.8, 0.8)' : 'translateX(150%) translateZ(0) scale(0.75, 0.75)',
        }
      default :
        return {
          display: 'block',
          opacity: 0,
          top: '0',
          zIndex: '8',
          transition: 'transform 0.75s',
          backfaceVisibility: 'hidden',
          transform: this.state.direction === 'prev' ? 'translateX(-80%) translateZ(0) scale(0.5, 0.5)' : 'translateX(155%) translateZ(0) scale(0.5, 0.5)',
        }
    }
  }
  render () {
    return (
      <div
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
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              transition: 'transform .3s ease, box-shadow .3s ease'
            }}
            className='carousel__images-container'>
            {
              this.props.children.map((child, i) => (
                <div
                  key={`carouselImage${i}`}
                  style={Object.assign({
                    display: 'none',
                    height: '50%',
                    width: '50%',
                    position: 'absolute',
                    transform: 'translateX(50%)',
                    zIndex: '3'
                  }, this.getCarouselStyle(i))}>
                  {React.cloneElement(child)}
                </div>
              ))
            }

          </div>

        </div>

        {this.props.caption && this.props.caption.length > 0 ? <Caption classAdd='col-6 skip-3'>{this.props.caption}</Caption> : ''}
      </div>
    )
  }
}
