import React from 'react'
import { CardTitle, CardSubTitle, CardContent } from './Type'
import PropTypes from 'prop-types'

const CardText = props =>
  <div className='cardText'>
    {!!props.cardTitle && <CardTitle>{props.cardTitle}</CardTitle>}
    {!!props.cardSubTitle && <CardSubTitle styleObj={props.styleObj}>{props.cardSubTitle}</CardSubTitle>}
    {!!props.cardContent && <CardContent>{props.cardContent}</CardContent>}
    {!!props.linkText && <a className='cardText__link' href={props.linkUrl}>{props.linkText}</a>}

    <style jsx>{` 
      .cardText {
        display: inline-block;
        vertical-align: top;
        width: ${props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? 'calc(49% - 12px)' : '100%'};
        margin-left: ${props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '24px' : '0'};
      }
      `}</style>
  </div>

CardText.propTypes = {
  cardTitle: PropTypes.string,
  cardSubtitle: PropTypes.string,
  cardContent: PropTypes.string,
  linkText: PropTypes.string,
  linkURL: PropTypes.string
}

export default CardText
