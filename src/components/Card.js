import React, { useState } from 'react'
import Image from './Image'
import CardText from './CardText'
import HoverVideo from './HoverVideo'
import ConditionalLink from './ConditionalLink'
import PropTypes from 'prop-types'

const imagePropsObject = props => {
  const newObj = Object.assign({}, props)
  delete newObj.classAdd
  return newObj
}

const Card = props => {
  const [mediaLoaded, setMediaLoaded] = useState(false)

  return (
    <div className={props.classAdd} style={props.style} >
      <ConditionalLink linkUrl={props.linkUrl}>
        <div className={`${props.hoverSVG ? 'hoverCard' : ''}`}>
          {!!(props.mediaOrientation === 'bottom' || props.mediaOrientation === 'right') && <CardText {...props} />}
          <div className='cardMedia' style={props.logoSVG && !mediaLoaded ? { backgroundImage: `url(${props.logoSVG})`, backgroundColor: '#FAFAFA' } : {}}>
            {props.hoverSVG
              ? <div className='overlay' style={{ backgroundImage: `url(${props.hoverSVG})`, backgroundColor: props.bgColor || 'orange' }} />
              : ''
            }
            {props.videoSource
              ? <HoverVideo
                vidSource={props.videoSource}
                thumb={props.imgSource}
                aspectRatio={props.aspectRatio}
                customPadding={props.customPadding || 0}
                loadIndex={props.loadIndex}
                loadIndicator={setMediaLoaded}
              />
              : <Image {...imagePropsObject(props)}
                loadIndicator={setMediaLoaded}
              />}
          </div>
          {!!(props.mediaOrientation === 'top' || props.mediaOrientation === 'left') && <CardText {...props} />}
        </div>
      </ConditionalLink>
      <style jsx>{`
      .cardMedia {
        position: relative;
        display: inline-block;
        overflow: hidden;
        width: ${props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? 'calc(50% - 12px)' : '100%'};
        background-size: auto 35.46% contain;
        background-position: center center;
        background-repeat: no-repeat; 
      }
      .withBorder-top {
        border-top: 1px black solid;
        padding-top: 24px;
      }
      .hoverCard:hover .overlay {
        top: 0;
      }
      .overlay {
        position: absolute;
        top: 100%;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 999;
        transition: top .2s ease-out;
        background-size: 50%;
        background-position: center center;
        background-repeat: no-repeat;
      }
      
      .hoverFade {
        opacity: 1;
        transition: opacity .2s;
        &:hover {
          opacity: 0.7;
        }
      }
      `}</style>
    </div>
  )
}

Card.propTypes = {
  cardTitle: PropTypes.string,
  cardSubtitle: PropTypes.string,
  cardContent: PropTypes.string,
  linkText: PropTypes.string,
  linkURL: PropTypes.string,
  mediaOrientation: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
  imageTitle: PropTypes.string,
  aspectRatio: PropTypes.oneOf(['sixteen', 'standard', 'square', 'cropped', 'noAspect', 'doubleWide', 'custom']),
  fullBleed: PropTypes.bool,
  imgSource: PropTypes.string,
  verticalAlign: PropTypes.oneOf(['top', 'center', 'bottom']),
  horizontalAlign: PropTypes.oneOf(['left', 'center', 'right']),
  classAdd: PropTypes.string,
  cardSubtitleClass: PropTypes.string,
  hoverCard: PropTypes.bool,
  bgColor: PropTypes.string,
  hoverSVG: PropTypes.string
}

Card.defaultProps = {
  fullBleed: false
}
export default Card
