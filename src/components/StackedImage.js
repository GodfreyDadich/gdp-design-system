import React, { Component } from 'react'
import Image from './Image'
import { Caption } from './Type'
import { getPaddingTop } from '../utils/aspectRatio'
import { isMobile } from 'react-device-detect'

export default class StackedImage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isMobile: isMobile
    }
  }

  render() {
    return (
      <div>
        {isMobile ?
          <figure
            ref={elem => { this.carouselElem = elem }}
            style={{
              position: 'relative',
              display: 'block',
              width: '100%',
              height: '100%'
            }}
            className={`carouselWrapper ${this.props.fullBleed ? ' full-bleed' : ''}${this.props.caption && this.props.caption.length > 0 ? ' withCaption' : ''}`}>
            {this.props.images.map((img, index) => {
                return <div
                key={`image${index}`}
                style={{
                  margin: '1.5vw 0'
                }}>
                <Image
                  key={`img-${index}`}
                  aspectRatio='noAspect'
                  skipIntro
                  imgSource={img}
                  visibilityOverride
                />
                </div>
            })}
            {this.props.caption && this.props.caption.length > 0 ? <Caption classAdd='col-6 skip-3 col-6-tab skip-1-tab'>{this.props.caption}</Caption> : ''}
          </figure>
          :
          <figure
            ref={elem => { this.carouselElem = elem }}
            style={{
              position: 'relative',
              display: 'inline-block',
              width: '100%',
              height: '100%'
            }}
            className={`carouselWrapper ${this.props.fullBleed ? ' full-bleed' : ''}${this.props.caption && this.props.caption.length > 0 ? ' withCaption' : ''}`}>
            <div
              ref={elem => { this.carouselElem = elem }}
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                height: '100%'
              }}>
              {this.props.images.map((img, index) => {
                return <div
                key={`image${index}`}
                style={{
                  margin: '0 1vw'
                }}>
                <Image
                  key={`img-${index}`}
                  aspectRatio='noAspect'
                  skipIntro
                  imgSource={img}
                  visibilityOverride
                />
                </div>
              })}
            </div>
            {this.props.caption && this.props.caption.length > 0 ? <Caption classAdd='col-6 skip-3 col-6-tab skip-1-tab'>{this.props.caption}</Caption> : ''}
          </figure>
        }
      </div>
    )
  }
}