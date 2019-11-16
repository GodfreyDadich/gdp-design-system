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
            className={`imagesWrapper ${this.props.fullBleed ? ' full-bleed' : ''}${this.props.caption && this.props.caption.length > 0 ? ' withCaption' : ''}`}>
            {this.props.images.map((img, index) => {
              return <div
                className={`itemWrap ${(index === this.props.images.length - 1) ? 'withCaption' : ''}`}
                key={`image${index}`}
              >
                <Image
                  stackedImage
                  key={`img-${index}`}
                  aspectRatio={this.props.aspectRatio ? this.props.aspectRatio : 'noAspect'}
                  skipIntro
                  imgSource={img}
                  visibilityOverride
                  caption={(index === this.props.images.length - 1) ? this.props.caption : ''}
                />
              </div>
            })}
          </div>
          :
          <div
            className={`imagesWrapper ${this.props.fullBleed ? ' full-bleed' : ''}${this.props.caption && this.props.caption.length > 0 ? ' withCaption' : ''}`}>
            <div
              style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                height: '100%'
              }}>
              {this.props.images.map((img, index) => {
                return <div
                  className='imageWrapDesktop'
                  key={`image${index}`}
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                    width: '100%',
                    height: '100%',
                    marginTop: 0
                  }}>
                  <Image
                    key={`img-${index}`}
                    aspectRatio={this.props.aspectRatio ? this.props.aspectRatio : 'noAspect'}
                    skipIntro
                    imgSource={img}
                    visibilityOverride
                  />
                </div>
              })}
            </div>
            {this.props.caption && this.props.caption.length > 0 ? <Caption classAdd='col-6 skip-1 col-6-tab skip-0-tab'>{this.props.caption}</Caption> : ''}
          </div>
        }
        <style jsx>
          {`
          .imageWrapDesktop {
            margin-left: 2vw;
          }
          .imageWrapDesktop:first-child {
            margin-left: 0;
          }
          .itemWrap {
            margin: 3.5vw 0;
          }
          .itemWrap:first-child {
            margin: 0 0 3.5vw 0;
          }
          `}
        </style>
      </div>
    )
  }
}