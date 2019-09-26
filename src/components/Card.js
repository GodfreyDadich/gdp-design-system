import React from 'react'
import Image from './Image'
import CardText from './CardText'
import PropTypes from 'prop-types'
import { contentOrientations, aspectRationsArray, verticalAligns, horizontalAligns } from '../utils/defaults'

const imagePropsObject = props => {
  const newObj = Object.assign({}, props)
  delete newObj.classAdd
  return newObj
}

const Card = props =>
  <div className={props.classAdd} style={props.style} >
    {!!(props.mediaOrientation === 'bottom' || props.mediaOrientation === 'right') && <CardText {...props} />}
    <div className='cardMedia'>
      <Image {...imagePropsObject(props)} />
    </div>
    {!!(props.mediaOrientation === 'top' || props.mediaOrientation === 'left') && <CardText {...props} />}
    <style jsx>{`
      .cardMedia {
        display: inline-block;
        width: ${props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? 'calc(50% - 12px)' : '100%'};
      }
    `}</style>
  </div>

Card.propTypes = {
  cardTitle: PropTypes.string,
  cardSubtitle: PropTypes.string,
  cardContent: PropTypes.string,
  linkText: PropTypes.string,
  linkURL: PropTypes.string,
  mediaOrientation: PropTypes.oneOf(contentOrientations),
  imageTitle: PropTypes.string,
  aspectRatio: PropTypes.oneOf(aspectRationsArray),
  fullBleed: PropTypes.bool,
  imgSource: PropTypes.string,
  verticalAlign: PropTypes.oneOf(verticalAligns),
  horizontalAlign: PropTypes.oneOf(['left', 'center', 'right'])
}

Card.defaultProps = {
  mediaOrientation: 'top',
  aspectRatio: 'standard',
  fullBleed: false,
  verticalAlign: 'center',
  horizontalAlign: 'center'
}
export default Card
