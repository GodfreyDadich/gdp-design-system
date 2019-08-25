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
        right: '-28%',
        width: '40%',
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
        left: '-28%',
        width: '40%',
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


export const AltRightArrow = props => {
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
        right: '-15%',
        width: '40%',
        height: '100%',
        zIndex: '101',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)'
      }}>
      <div className='right-arrow-wrapper'><i className="right-arrow-head"></i><div className="right-arrow-body"></div></div>
      <style jsx>{`
        .right-arrow-wrapper {
          position: absolute;
          top: 50%;
          margin:0;
          transform: translateY(-50%);
          right: 15%;
        }
        .right-arrow-head {
          border: solid ${props.view === 'lightMode' ? 'black' : 'white'};
          border-width: 0 1px 1px 0;
          display: inline-block;
          padding: 3px;
          transform: rotate(-45deg);  
        }
        .right-arrow-body{
          height: 18px;
          width: 1px;
          background-color: ${props.view === 'lightMode' ? 'black' : 'white'};
          margin-right: 1px;
          transform: translate(-3px,-18.58px) rotate(-90deg);
        }
  `}</style>
    </div>
  )
}


export const AltLeftArrow = props => {
  return (
    <div
      className='backArrow'
      onClick={props.clickAction}
      onMouseEnter={props.over}
      onMouseMove={props.over}
      onMouseLeave={props.out}
      style={{
          position: 'absolute' ,
          top: '0',
          left: '-15%',
          width: '40%',
          height: '100%',
          zIndex: '101',
          cursor: 'pointer',
          WebkitTapHighlightColor: 'rgba(0,0,0,0)'
      }}
    >
      <div className='left-arrow-wrapper'><i className="left-arrow-head"></i><div className="left-arrow-body"></div></div>
      <style jsx>{`
        .left-arrow-wrapper {
          position: absolute;
          top: 50%;
          margin:0;
          transform: translateY(-50%);
          left: 15%;
        }
        .left-arrow-head {
          border: solid ${props.view === 'lightMode' ? 'black' : 'white'};
          border-width: 0 1px 1px 0;
          display: inline-block;
          padding: 3px;
          transform: rotate(135deg);  
        }
        .left-arrow-body{
          height: 18px;
          width: 1px;
          background-color: ${props.view === 'lightMode' ? 'black' : 'white'};
          margin-left: 1px;
          transform: translate(8px,-18.58px) rotate(90deg);
        }
    `}</style>
    </div>
  )
}
