import React, { Component } from 'react'
import Image from './Image'
import { Caption } from './Type'
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
          <div
            style={{
              position: 'relative',
              display: 'block',
              width: '100%',
              height: '100%'
            }}
            className={`carouselWrapper ${this.props.fullBleed ? ' full-bleed' : ''}${this.props.caption && this.props.caption.length > 0 ? ' withCaption' : ''}`}>
            {this.props.images.map((img, index) => {
              return <figure
                key={`image${index}`}
                style={{
                  margin: '1.5vw 0'
                }}>
                <Image
                  key={`img-${index}`}
                  aspectRatio={this.props.aspectRatio ? this.props.aspectRatio : 'noAspect'}
                  skipIntro
                  imgSource={img}
                  visibilityOverride
                />
              </figure>
            })}
            {this.props.caption && this.props.caption.length > 0 ? <Caption classAdd='col-6 skip-1 col-4-tab skip-1-tab'>{this.props.caption}</Caption> : ''}
          </div>
          :
          <div
            className={`carouselWrapper ${this.props.fullBleed ? ' full-bleed' : ''}${this.props.caption && this.props.caption.length > 0 ? ' withCaption' : ''}`}>
            <div
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                height: '100%'
              }}>
              {this.props.images.map((img, index) => {
                return <figure
                  key={`image${index}`}
                  style={{
                    margin: '0 1vw',
                    position: 'relative',
                    display: 'inline-block',
                    width: '100%',
                    height: '100%'
                  }}>
                  <Image
                    key={`img-${index}`}
                    aspectRatio={this.props.aspectRatio ? this.props.aspectRatio : 'noAspect'}
                    skipIntro
                    imgSource={img}
                    visibilityOverride
                  />
                </figure>
              })}
            </div>
            {this.props.caption && this.props.caption.length > 0 ? <Caption classAdd='col-6 skip-1 col-4-tab skip-1-tab'>{this.props.caption}</Caption> : ''}
          </div>
        }
      </div>
    )
  }
}