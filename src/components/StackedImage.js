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
      <div className={this.props.classAdd} >
          <div
            className={`imagesWrapper ${this.props.fullBleed ? ' full-bleed' : ''}${this.props.caption && this.props.caption.length > 0 ? ' withCaption' : ''}`}>
              {this.props.images.map((img, index) => {
                return <div
                  className='imageWrap'
                  key={`image${index}`}
                  >
                  <Image
                    key={`img-${index}`}
                    aspectRatio={this.props.aspectRatio ? this.props.aspectRatio : 'noAspect'}
                    imgSource={img}
                  />
                </div>
              })}
            </div>
            {this.props.caption && this.props.caption.length > 0 ? <Caption classAdd='col-6 col-6-tab'>{this.props.caption}</Caption> : ''}
    
        <style jsx>
          {`
          .imagesWrapper {
            line-height: 0;
          }
          .imageWrap {
            position: relative;
            vertical-align: top;
            display: inline-block;
            margin-left: ${this.props.caption && this.props.caption.length > 0 ? '2vw' : '1.17vw'};
            width: calc((100% - ${this.props.caption && this.props.caption.length > 0 ? '2vw' : '1.17vw'}) / 2);

            &:first-child {
              margin-left: 0;
            }

            @media only screen and (max-width: 500px) {
              width: 100%;
              margin-left: 0;
              margin-top: 2.13vw;

              &:first-child {
                margin-top: 0;
              }
            }            
          }
          `}
        </style>
      </div>
    )
  }
}
