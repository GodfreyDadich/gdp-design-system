import React from 'react'
import ConditionalLink from './ConditionalLink'
import Image from './Image'
import CardText from './CardText'

const Card = props => 
<div className={props.classAdd} >
  {!!(props.mediaOrientation === 'bottom' || props.mediaOrientation === 'right') && <CardText {...props} />}
  <div className='cardMedia'>
    <Image {...props} />
  </div>
  {!!(props.mediaOrientation === 'top' || props.mediaOrientation === 'left') && <CardText {...props} />}
  <style jsx>{`
    .cardMedia {
      display: inline-block;
      width: ${props.mediaOrientation === 'left' || props.mediaOrientation === 'right' ? '50%' : '100%'};
    }
  `}</style>
</div>

export default Card
