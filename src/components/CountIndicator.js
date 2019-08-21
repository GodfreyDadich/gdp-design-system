import React from 'react'

export const CountIndicator = props => {
  return (
    <div
      className='counter-wrapper'
      style={{
        margin: 'auto',
        width: '50%',
        textAlign: 'center',
        fontColor: '#6D6A60',
        fontFamily: 'Atlas Grotesk',
        fontSize: '10.5px',
        marginTop: props.imageAspect === 'sixteen' ? '15px' : props.imageAspect === 'noAspect' ? '10px' : '-10px',
        marginBottom: props.imageAspect === 'sixteen' ? '16px' : props.imageAspect === 'noAspect' ? '10px' : '15px'
      }}
    >
      <span
        className='left-arrow-wrapper'
        style={{
          top: '50%',
          margin: '0',
          transform: 'translateY(-50%)',
          left: '15%',
        }}><i
          className="left-arrow-head"
          style={{
            border: 'solid #6D6A60',
            borderWidth: '0 1px 1px 0',
            display: 'inline-block',
            padding: '3px',
            transform: 'rotate(135deg)',
          }}></i></span>
      <span
        className='counter-content'
        style={{
          color: '#6D6A60',
          letterSpacing: '.75px',
          fontWeight: 400
        }}>
        &nbsp;&nbsp;{props.currentIndex + 1}/{props.children.length}&nbsp;&nbsp;
              </span>
      <span
        className='right-arrow-wrapper'
        style={{
          top: '50%',
          margin: '0',
          transform: 'translateY(-50%)',
          right: '15%',

        }}><i
          className="right-arrow-head"
          style={{
            border: 'solid #6D6A60',
            borderWidth: '0 1px 1px 0',
            display: 'inline-block',
            padding: '3px',
            transform: 'rotate(-45deg)',

          }}></i></span></div>
  )
}