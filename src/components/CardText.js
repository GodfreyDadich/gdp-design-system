import React from 'react'
import { CardTitle, CardSubTitle, CardContent } from './Type'

const CardText = props => 
  <div className='cardText'>
    {!!props.cardTitle && <CardTitle>{props.cardTitle}</CardTitle>}
    {!!props.cardSubTitle && <CardSubTitle>{props.cardSubTitle}</CardSubTitle>}
    {!!props.cardContent && <CardContent>{props.cardContent}</CardContent>}
    {!!props.linkText && <a className='cardText__link' href={props.linkUrl}>{props.linkText}</a>}

    <style jsx>{` 
      .cardText {
        display: inline-block;
        vertical-align: top;
        width: ${props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '49%' : '100%'};
      }
      `}</style>
  </div>

export default CardText