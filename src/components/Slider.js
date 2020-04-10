import React, { Component } from 'react'
import Slide from './Slide'
import { RightArrow, LeftArrow } from './SliderArrows'
import { Caption } from './Type'

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

  goToSlide (slideNum, clickRef) {
    if (slideNum !== this.state.currentIndex) {
      this.setState(() => ({
        currentIndex: slideNum,
        translateValue: -(slideNum * this.slideWidth())
      }))
    }
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

  currentDot (index) {
    return this.state.currentIndex === index ? 'current' : ''
  }

  render () {
    return (
      <figure className={`sliderWrap ${this.props.aspectRatio}${this.props.fullBleed ? ' full-bleed' : ''}`}>
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
                <Slide key={i} image={image} renderImage={this.props.aspectRatio === 'noAspect'} />
              ))
            }
          </div>
          <ul className='slideDots'>
            {
              this.props.images.map((image, i) => (
                <li className={`slideDot ${this.currentDot(i)}`} key={`slide-dot-for-${i}`} onClick={() => this.goToSlide(i)} />
              ))
            }
          </ul>
          <LeftArrow clickAction={this.goToPrevSlide} lightMode={this.props.lightMode} />
          <RightArrow clickAction={this.goToNextSlide} lightMode={this.props.lightMode} />
        </div>
        {this.props.caption && this.props.caption.length > 0 ? <Caption classAdd='col-6 col-6-tab'>{this.props.caption}</Caption> : ''}
        <style jsx>{`
        .slider {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          top: 0;
        }
        .sliderWrap {
          position: relative;
          height: auto;
          background-size: cover;
          background-repeat: no-repeat;
          transition: transform 0.5s;

          &.sixteen {
            padding-top: 56.25%;
          }
          &.standard {
            padding-top: 75%;
          }
          &.cropped {
            padding-top: 41.67%;
          }
          &.square {
            padding-top: 100%;
          }
          &.zoomedIn {
            transform: scale(1.5);
          }
          &.noAspect {
            .slider {
              position: relative;
              width: 100%;
              opacity: 1;
            }
          }        
        }
        .slideDots {
          position: absolute;
          bottom: 25px;
          width: 100%;
          padding: 0;
          margin: 0;
          text-align: center;
          z-index: 102;
          opacity: 0.75;  
        }
        .slideDot {
          position: relative;
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          opacity: 0.3;
          margin: 0 5px;

          &:hover,
          &.current {
            opacity: 1;
          }
        }       
      `}</style>
      </figure>
    )
  }
}
