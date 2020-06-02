import React from 'react'
import Image from './Image'
import CardText from './CardText'
import PropTypes from 'prop-types'

const imagePropsObject = props => {
  const newObj = Object.assign({}, props)
  delete newObj.classAdd
  return newObj
}

const Card = props => (
  <div className={props.classAdd} style={props.style} >
    <div className={`${props.hoverSVG ? 'hoverCard' : ''}`}>
      {!!(props.mediaOrientation === 'bottom' || props.mediaOrientation === 'right') && <CardText {...props} />}
      <div className='cardMedia' style={props.logoSVG ? { backgroundImage: `url(${props.logoSVG})`, backgroundColor: '#F2F2F2' } : {}}>
        { props.hoverSVG
          ? <div className='overlay' style={{ backgroundImage: `url(${props.hoverSVG})`, backgroundColor: props.bgColor || 'orange' }} />
          : ''
        }
        <Image {...imagePropsObject(props)} />
      </div>
      {!!(props.mediaOrientation === 'top' || props.mediaOrientation === 'left') && <CardText {...props} />}
    </div>
    <style jsx>{`
      .cardMedia {
        position: relative;
        display: inline-block;
        background-size: 50%;
        background-position: center center;
        background-repeat: no-repeat;
        background-color: #F2F2F2;
        width: ${props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? 'calc(50% - 12px)' : '100%'};
        background-size: 50%;
        background-position: center center;
        background-repeat: no-repeat; 
      }
      .withBorder-top {
        border-top: 1px black solid;
        padding-top: 25px;
      }
      .hoverCard:hover .overlay {
        height: 100%;
      }
      .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 0%;
        width: 100%;
        z-index: 999;
        transition: .25s ease;
        background-size: 50%;
        background-position: center center;
        background-repeat: no-repeat;
      }
      `}</style>
  </div>
)

Card.propTypes = {
  cardTitle: PropTypes.string,
  cardSubtitle: PropTypes.string,
  cardContent: PropTypes.string,
  linkText: PropTypes.string,
  linkURL: PropTypes.string,
  mediaOrientation: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
  imageTitle: PropTypes.string,
  aspectRatio: PropTypes.oneOf(['sixteen', 'standard', 'square', 'cropped', 'noAspect']),
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
