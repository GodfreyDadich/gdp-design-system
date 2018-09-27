import React from 'react'

export const RightArrow = props => {
  return (
    <div className='nextArrow' onClick={props.clickAction}> &gt;
      <i className='fa fa-arrow-right fa-2x' aria-hidden='true' />
    </div>
  )
}

/*
  Pretend these are in their own separate files
*/

export const LeftArrow = props => {
  return (
    <div
      className='backArrow' onClick={props.clickAction}> &lt;
      <i className='fa fa-arrow-left fa-2x' aria-hidden='true' />
    </div>
  )
}
