import React, { Component } from 'react'
import Slide from './Slide'
import { RightArrow, LeftArrow } from './SliderArrows'

export default class Slider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentIndex: 0,
      translateValue: 0
    }
    this.goToNextSlide = this.goToNextSlide.bind(this)
    this.goToPrevSlide = this.goToPrevSlide.bind(this)
    this.slideWidth = this.slideWidth.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  goToPrevSlide () {
    if (this.state.currentIndex === 0) {
      return this.setState({
        currentIndex: this.props.images.length - 1,
        translateValue: -(this.props.images.length - 1) * this.slideWidth()
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide () {
    if (this.state.currentIndex === this.props.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
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

  slideWidth () {
    return document.querySelector('.slide').clientWidth
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyDown, false)
  }

  render () {
    return (
      <div className='slider' style={{ width: '100%', height: '100%', overflow: 'hidden' }} onKeyDown={this.onKeyDown}>
        <div className='slider-wrapper'
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s',
            width: '100%',
            height: '100%',
            whiteSpace: 'nowrap'
          }}>
          {
            this.props.images.map((image, i) => (
              <Slide key={i} image={image} />
            ))
          }
        </div>
        <LeftArrow clickAction={this.goToPrevSlide} />
        <RightArrow clickAction={this.goToNextSlide} />
      </div>
    )
  }
}
