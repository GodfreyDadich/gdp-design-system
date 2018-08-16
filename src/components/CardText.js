import React from 'react'

const CardText = props => 
  <div className='cardText'>
    {!!props.cardTitle && <h3 className='cardText__title'>{props.cardTitle}</h3>}
    {!!props.cardSubTitle && <h4 className='cardText__subtitle'>{props.cardSubTitle}</h4>}
    {!!props.cardContent && <p className='cardText__content'>{props.cardContent}</p>}
    {!!props.linkText && <a className='cardText__link' href={props.linkUrl}>{props.linkText}</a>}

    <style jsx>{` 
      .cardText {
        display: inline-block;
        vertical-align: top;
        width: ${props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '49%' : '100%'};

        &__title {
          margin-top: ${props.mediaOrientation === 'top' ? '1em' : '0'};
        }
      }
      `}</style>
  </div>

export default CardText