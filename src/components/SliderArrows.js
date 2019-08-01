import React from 'react'

export const RightArrow = props => {
  return (
    <div
      className='nextArrow'
      onClick={props.clickAction}
      onMouseEnter={props.over}
      onMouseMove={props.over}
      onMouseLeave={props.out}
      style={{ 
        position: 'absolute',
        top: '0',
        left: '50%',
        width: '50vw',
        height: '100%',
        overflow: 'hidden',
        zIndex: '101',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)'
      }}>
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
      className='backArrow'
      onClick={props.clickAction}
      onMouseEnter={props.over}
      onMouseMove={props.over}
      onMouseLeave={props.out}
      style={{ 
        position: 'absolute',
        top: '0',
        right: '50%',
        width: '50vw',
        height: '100%',
        overflow: 'hidden',
        zIndex: '101',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)'
      }}>
      <i className='fa fa-arrow-left fa-2x' aria-hidden='true' />
    </div>
  )
}
