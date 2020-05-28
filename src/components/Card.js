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
    {!!(props.mediaOrientation === 'bottom' || props.mediaOrientation === 'right') && <CardText {...props} />}
    <div className='cardMedia' style={props.logoSVG ? { backgroundImage: `url(${props.logoSVG})`, backgroundSize: '50%', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundColor: '#F2F2F2' } : {}}>
      <Image {...imagePropsObject(props)} />
    </div>
    {!!(props.mediaOrientation === 'top' || props.mediaOrientation === 'left') && <CardText {...props} />}
    <style jsx>{`
      .cardMedia {
        display: inline-block;
        width: ${props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? 'calc(50% - 12px)' : '100%'};
      }
      .withBorder-top {
        border-top: 1px black solid;
        padding-top: 25px;
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
  widesetImage: PropTypes.bool
}

Card.defaultProps = {
  fullBleed: false
}
export default Card
