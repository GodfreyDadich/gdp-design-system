import React, { Component } from 'react'
import { RightArrow, LeftArrow } from './SliderArrows'
import Slide from './Slide'
import { Caption } from './Type'

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
    this.getCarouselClass = this.getCarouselClass.bind(this)
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

  getCarouselClass (index) {
    const active = this.state.currentIndex
    const prev = this.state.currentIndex - 1 >= 0 ? this.state.currentIndex - 1 : this.props.images.length - 1
    const next = this.state.currentIndex + 1 <= this.props.images.length - 1 ? this.state.currentIndex + 1 : 0
    switch (index) {
      case active :
        return 'carousel__image active'
      case prev :
        return 'carousel__image prev'
      case next :
        return 'carousel__image next'
      default :
        return 'carousel__image'
    }
  }
  render () {
    return (
      <figure className={`carouselWrapper ${this.props.fullBleed ? ' full-bleed' : ''}${this.props.caption && this.props.caption.length > 0 ? ' withCaption' : ''}`}>
        <div className={`carousel__container ${this.props.aspectRatio} ${this.state.teaseState}`}>
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
          <div className='carousel__images-container'>
            {
              this.props.images.map((image, i) => (
                <div key={`carouselImage${i}`} className={this.getCarouselClass(i)}>
                  <Slide key={i} image={image} classAdd='carousel__image-wrapper' renderImage={this.props.aspectRatio === 'noAspect'} />
                </div>
              ))
            }

          </div>

        </div>

        {this.props.caption && this.props.caption.length > 0 ? <Caption classAdd='col-6 skip-3'>{this.props.caption}</Caption> : ''}
        <style jsx>{`

        .carouselWrapper {
          position: relative; 
          width: 100%;
          height: 100%;
        }
        
        .carousel {

          &__container {
            position: relative;
            height: 100%;
            width: 100%;
            overflow: hidden;
            touch-action: pan-y; 
            user-select: none; 
            -webkit-user-drag: none; 
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);  
            
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
              .carousel__images-container {
                position: relative;
                width: 100%;
                .carousel__image {
                  height: auto;
                  width: auto;
                }
              }
            }  
            &.tease-next {
              .next {
                z-index: 8;
                transform: translateX(93%) translateZ(0);
                box-shadow: -2px 0px 30px 0px rgba(0,0,0,0.23)
              }
            }
            &.tease-prev {
              .prev {
                transform: translateX(-93%) translateZ(0);
                box-shadow: 2px 0px 30px 0px rgba(0,0,0,0.23)
              }
            }                             
          }          

          &__images-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: transform .3s ease, box-shadow .3s ease;
          }

          &__image {
            display: none;
            height: 100%;
            position: absolute;
            width: 100%;
            z-index: 3;    
            
            &.active {
              display: block;
              transition: none;
              z-index: 7;              
            }
            &.prev,
            &.next {
              display: block;
              overflow: hidden;
              top: 0;
              z-index: 9;
              transition: transform 0.5s;
            }

            &.prev {
              backface-visibility: hidden;
              transform: translateX(-100%) translateZ(0);
              width: 100%;
              box-shadow: 2px 0px 30px 0px rgba(0,0,0,0)
            }
            &.next {
              transform: translateX(100%) translateZ(0);
              box-shadow: -2px 0px 30px 0px rgba(0,0,0,0)
            }
          }         
        }
      `}</style>
      </figure>
    )
  }
}
