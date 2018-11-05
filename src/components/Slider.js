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

  goToSlide (slideNum, clickRef) {
    console.log(clickRef)
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
      <div className={`sliderWrap ${this.props.aspectRatio}`}>
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
          <LeftArrow clickAction={this.goToPrevSlide} />
          <RightArrow clickAction={this.goToNextSlide} />
        </div>
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
            padding-top: 39.06%;
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
          bottom: 10px;
          width: 100%;
          padding: 0;
          margin: 0;
          text-align: center;
          z-index: 102;
        }
        .slideDot {
          position: relative;
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid #fff;
          margin: 0 5px;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);

          &:hover:before,
          &.current:before {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            width: 6px;
            height: 6px;
            background-color: #fff;
            border-radius: 50%;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
          }
        }
      `}</style>
      </div>
    )
  }
}
