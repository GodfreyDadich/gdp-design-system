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
        right: '-31.4%',
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
        left: '-31.4%',
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
        position: 'absolute',
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





export const RevealRightArrow = props => {
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
        right: '0',
        width: '40%',
        height: '100%',
        zIndex: '101',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)'
      }}>
      <div className='right-arrow-wrapper'>
        <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d)">
            <mask id="path-1-inside-1" fill="white">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.06246 10.9012L12.0122 15.851L10.598 17.2652L4.94114 11.6083L4.23403 10.9012L4.94114 10.1941L10.598 4.53725L12.0122 5.95146L7.06246 10.9012Z" />
            </mask>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.06246 10.9012L12.0122 15.851L10.598 17.2652L4.94114 11.6083L4.23403 10.9012L4.94114 10.1941L10.598 4.53725L12.0122 5.95146L7.06246 10.9012Z" fill="white" />
            <path d="M12.0122 15.851L13.4264 17.2652L14.8406 15.851L13.4264 14.4367L12.0122 15.851ZM7.06246 10.9012L5.64825 9.48699L4.23403 10.9012L5.64825 12.3154L7.06246 10.9012ZM10.598 17.2652L9.18378 18.6794L10.598 20.0936L12.0122 18.6794L10.598 17.2652ZM4.23403 10.9012L2.81982 9.48699L1.40561 10.9012L2.81982 12.3154L4.23403 10.9012ZM4.94114 10.1941L6.35535 11.6083L4.94114 10.1941ZM10.598 4.53725L12.0122 3.12303L10.598 1.70882L9.18378 3.12303L10.598 4.53725ZM12.0122 5.95146L13.4264 7.36567L14.8406 5.95146L13.4264 4.53725L12.0122 5.95146ZM13.4264 14.4367L8.47667 9.48699L5.64825 12.3154L10.598 17.2652L13.4264 14.4367ZM12.0122 18.6794L13.4264 17.2652L10.598 14.4367L9.18378 15.851L12.0122 18.6794ZM3.52693 13.0225L9.18378 18.6794L12.0122 15.851L6.35535 10.1941L3.52693 13.0225ZM2.81982 12.3154L3.52693 13.0225L6.35535 10.1941L5.64825 9.48699L2.81982 12.3154ZM3.52693 8.77989L2.81982 9.48699L5.64825 12.3154L6.35535 11.6083L3.52693 8.77989ZM9.18378 3.12303L3.52693 8.77989L6.35535 11.6083L12.0122 5.95146L9.18378 3.12303ZM13.4264 4.53725L12.0122 3.12303L9.18378 5.95146L10.598 7.36567L13.4264 4.53725ZM8.47667 12.3154L13.4264 7.36567L10.598 4.53725L5.64825 9.48699L8.47667 12.3154Z" fill="white" mask="url(#path-1-inside-1)" />
          </g>
          <defs>
            <filter id="filter0_d" x="0.234009" y="0.537245" width="15.7782" height="20.7279" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <style jsx>{`
      svg {
        transform: rotate(180deg);
      }
        .right-arrow-wrapper {
          position: absolute;
          top: 50%;
          margin:0;
          transform: translateY(-50%);
          right: 10%;
        }
        .right-arrow-head {
          border: solid white;
          border-width: 0 3px 3px 0px;
          box-shadow: 4px 6px 7px -3px rgba(0,0,0,0.75);
          display: inline-block;
          padding: 3px;
          transform: rotate(-45deg);  
          ${props.clickedArrow ?
          'opacity: .5; transition: opacity .1s ease' : ''}
        }
  `}</style>
    </div>
  )
}


export const RevealLeftArrow = props => {
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
        left: '0',
        width: '40%',
        height: '100%',
        zIndex: '101',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)'
      }}
    >
      <div className='left-arrow-wrapper'>
        <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d)">
            <mask id="path-1-inside-1" fill="white">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.06246 10.9012L12.0122 15.851L10.598 17.2652L4.94114 11.6083L4.23403 10.9012L4.94114 10.1941L10.598 4.53725L12.0122 5.95146L7.06246 10.9012Z" />
            </mask>
            <path fillRule="evenodd" clipRule="evenodd" d="M7.06246 10.9012L12.0122 15.851L10.598 17.2652L4.94114 11.6083L4.23403 10.9012L4.94114 10.1941L10.598 4.53725L12.0122 5.95146L7.06246 10.9012Z" fill="white" />
            <path d="M12.0122 15.851L13.4264 17.2652L14.8406 15.851L13.4264 14.4367L12.0122 15.851ZM7.06246 10.9012L5.64825 9.48699L4.23403 10.9012L5.64825 12.3154L7.06246 10.9012ZM10.598 17.2652L9.18378 18.6794L10.598 20.0936L12.0122 18.6794L10.598 17.2652ZM4.23403 10.9012L2.81982 9.48699L1.40561 10.9012L2.81982 12.3154L4.23403 10.9012ZM4.94114 10.1941L6.35535 11.6083L4.94114 10.1941ZM10.598 4.53725L12.0122 3.12303L10.598 1.70882L9.18378 3.12303L10.598 4.53725ZM12.0122 5.95146L13.4264 7.36567L14.8406 5.95146L13.4264 4.53725L12.0122 5.95146ZM13.4264 14.4367L8.47667 9.48699L5.64825 12.3154L10.598 17.2652L13.4264 14.4367ZM12.0122 18.6794L13.4264 17.2652L10.598 14.4367L9.18378 15.851L12.0122 18.6794ZM3.52693 13.0225L9.18378 18.6794L12.0122 15.851L6.35535 10.1941L3.52693 13.0225ZM2.81982 12.3154L3.52693 13.0225L6.35535 10.1941L5.64825 9.48699L2.81982 12.3154ZM3.52693 8.77989L2.81982 9.48699L5.64825 12.3154L6.35535 11.6083L3.52693 8.77989ZM9.18378 3.12303L3.52693 8.77989L6.35535 11.6083L12.0122 5.95146L9.18378 3.12303ZM13.4264 4.53725L12.0122 3.12303L9.18378 5.95146L10.598 7.36567L13.4264 4.53725ZM8.47667 12.3154L13.4264 7.36567L10.598 4.53725L5.64825 9.48699L8.47667 12.3154Z" fill="white" mask="url(#path-1-inside-1)" />
          </g>
          <defs>
            <filter id="filter0_d" x="0.234009" y="0.537245" width="15.7782" height="20.7279" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <style jsx>{`
        .left-arrow-wrapper {
          position: absolute;
          top: 50%;
          margin:0;
          transform: translateY(-50%);
          left: 10%;
        }
        .left-arrow-head {
          border: solid white;
          border-width: 0 3px 3px 0;
          box-shadow: 4px 6px 7px -3px rgba(0,0,0,0.75);
          display: inline-block;
          padding: 3px;
          transform: rotate(135deg);  
          ${props.clickedArrow ?
          'opacity: .5; transition: opacity .1s ease' : ''}
        }
    `}</style>
    </div>
  )
}
