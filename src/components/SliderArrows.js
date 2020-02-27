import React from 'react'

export const RightArrow = props => {
  return (
    <div
      className='nextArrow'
      onClick={props.disabled ? null : props.clickAction}
      onMouseEnter={props.over}
      onMouseMove={props.over}
      onMouseLeave={props.out}
      style={Object.assign({
        position: 'absolute',
        top: '0',
        right: '-31.4%',
        width: '40%',
        height: '100%',
        overflow: 'hidden',
        zIndex: '101',
        cursor: props.lightMode ? "url('data:image/svg+xml,%3Csvg%20width%3D%2266%22%20height%3D%2240%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%2020h64M45%201l19%2019-19%2019%22%20stroke%3D%22%23fff%22%20stroke-width%3D%222%22/%3E%3C/svg%3E'), auto" : "url('data:image/svg+xml,%3Csvg%20width%3D%2266%22%20height%3D%2240%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%2020h64M45%201l19%2019-19%2019%22%20stroke%3D%22%23000%22%20stroke-width%3D%222%22/%3E%3C/svg%3E'), auto",
        WebkitTapHighlightColor: 'rgba(0,0,0,0)'
      }, props.style)}>
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
      onClick={props.disabled ? null : props.clickAction}
      onMouseEnter={props.over}
      onMouseMove={props.over}
      onMouseLeave={props.out}
      style={Object.assign({
        position: 'absolute',
        top: '0',
        left: '-31.4%',
        width: '40%',
        height: '100%',
        overflow: 'hidden',
        zIndex: '101',
        cursor: props.lightMode ? "url('data:image/svg+xml,%3Csvg%20width%3D%2266%22%20height%3D%2240%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M66%2020H2m19%2019L2%2020%2021%201%22%20stroke%3D%22%23fff%22%20stroke-width%3D%222%22/%3E%3C/svg%3E'), auto" : "url('data:image/svg+xml,%3Csvg%20width%3D%2266%22%20height%3D%2240%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M66%2020H2m19%2019L2%2020%2021%201%22%20stroke%3D%22%23000%22%20stroke-width%3D%222%22/%3E%3C/svg%3E'), auto",
        WebkitTapHighlightColor: 'rgba(0,0,0,0)'
      }, props.style)}>
      <i className='fa fa-arrow-left fa-2x' aria-hidden='true' />
    </div>
  )
}


export const AltRightArrow = props => {
  return (
    <div
      className={`nextArrow ${props.view}`}
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
          border: solid black;
          border-width: 0 1px 1px 0;
          display: inline-block;
          padding: 3px;
          transform: rotate(-45deg);  
        }
        .right-arrow-body{
          height: 18px;
          width: 1px;
          background-color: black;
          margin-right: 1px;
          transform: translate(-3px,-18.58px) rotate(-90deg);
        }

        .darkMode {
          .right-arrow-head {
            border: solid white;
          }
          .right-arrow-body{
            background-color: white;
          }
        }
  `}</style>
    </div>
  )
}


export const AltLeftArrow = props => {
  return (
    <div
      className={`backArrow ${props.view}`}
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
          border: solid black;
          border-width: 0 1px 1px 0;
          display: inline-block;
          padding: 3px;
          transform: rotate(135deg);  
        }
        .left-arrow-body{
          height: 18px;
          width: 1px;
          background-color: black;
          margin-left: 1px;
          transform: translate(8px,-18.58px) rotate(90deg);
        }
        .darkMode {
          .left-arrow-head {
            border: solid white;
          }
          .left-arrow-body{
            background-color: white;
          }
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
        <div className='revealArrow'>
        </div>
      </div>
      <style jsx>{`
        .right-arrow-wrapper {
          position: absolute;
          top: 50%;
          margin:0;
          transform: translateY(-50%);
          right: 10%;
        }
        .revealArrow {
          transform: translateY(4px) rotate(180deg);
          opacity: 1;
          height: 16px;
          width: 16px;
          background-size: 100%;
          background-repeat: no-repeat;
          background-image: url('data:image/svg+xml,%3Csvg%20width%3D%2217%22%20height%3D%2222%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20filter%3D%22url%28%23filter0_d%29%22%20fill%3D%22%23fff%22%3E%3Cmask%20id%3D%22a%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7%2010.9l5%205-1.4%201.4-5.7-5.7-.7-.7.7-.7%205.7-5.7L12%206l-5%204.9z%22/%3E%3C/mask%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7%2010.9l5%205-1.4%201.4-5.7-5.7-.7-.7.7-.7%205.7-5.7L12%206l-5%204.9z%22/%3E%3Cpath%20d%3D%22M12%2015.9l1.4%201.4%201.4-1.4-1.4-1.5L12%2016zm-5-5L5.7%209.5l-1.4%201.4%201.4%201.4L7.1%2011zm3.6%206.4l-1.4%201.4%201.4%201.4%201.4-1.4-1.4-1.4zm-6.4-6.4L2.8%209.5l-1.4%201.4%201.4%201.4L4.2%2011zm.7-.7l1.5%201.4-1.5-1.4zm5.7-5.7L12%203.1l-1.4-1.4-1.4%201.4%201.4%201.4zM12%206l1.4%201.4L14.8%206l-1.4-1.5L12%206zm1.4%208.4l-5-5-2.8%203%205%204.9%202.8-2.9zM12%2018.7l1.4-1.4-2.8-2.9L9.2%2016l2.8%202.8zM3.5%2013l5.7%205.7%202.8-2.8-5.6-5.7L3.5%2013zm-.7-.7l.7.7%202.9-2.8-.8-.7-2.8%202.8zm.7-3.5l-.7.7%202.8%202.8.8-.7-2.9-2.8zM9.2%203L3.5%208.8l2.9%202.8L12%206%209.2%203zm4.2%201.4L12%203.1%209.2%206l1.4%201.4%202.8-2.9zm-5%207.8l5-5-2.8-2.8-5%205%202.9%202.8z%22%20mask%3D%22url%28%23a%29%22/%3E%3C/g%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d%22%20x%3D%22.2%22%20y%3D%22.5%22%20width%3D%2215.8%22%20height%3D%2220.7%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22/%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22/%3E%3CfeOffset/%3E%3CfeGaussianBlur%20stdDeviation%3D%222%22/%3E%3CfeColorMatrix%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.18%200%22/%3E%3CfeBlend%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22/%3E%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E')
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
        <div className='revealArrow'>
        </div>
      </div>
      <style jsx>{`
        .left-arrow-wrapper {
          position: absolute;
          top: 50%;
          margin:0;
          transform: translateY(-50%);
          left: 10%;
        }
        .revealArrow {
          opacity: 1;
          height: 16px;
          width: 16px;
          background-size: 100%;
          background-repeat: no-repeat;
          background-image: url('data:image/svg+xml,%3Csvg%20width%3D%2217%22%20height%3D%2222%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20filter%3D%22url%28%23filter0_d%29%22%20fill%3D%22%23fff%22%3E%3Cmask%20id%3D%22a%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7%2010.9l5%205-1.4%201.4-5.7-5.7-.7-.7.7-.7%205.7-5.7L12%206l-5%204.9z%22/%3E%3C/mask%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7%2010.9l5%205-1.4%201.4-5.7-5.7-.7-.7.7-.7%205.7-5.7L12%206l-5%204.9z%22/%3E%3Cpath%20d%3D%22M12%2015.9l1.4%201.4%201.4-1.4-1.4-1.5L12%2016zm-5-5L5.7%209.5l-1.4%201.4%201.4%201.4L7.1%2011zm3.6%206.4l-1.4%201.4%201.4%201.4%201.4-1.4-1.4-1.4zm-6.4-6.4L2.8%209.5l-1.4%201.4%201.4%201.4L4.2%2011zm.7-.7l1.5%201.4-1.5-1.4zm5.7-5.7L12%203.1l-1.4-1.4-1.4%201.4%201.4%201.4zM12%206l1.4%201.4L14.8%206l-1.4-1.5L12%206zm1.4%208.4l-5-5-2.8%203%205%204.9%202.8-2.9zM12%2018.7l1.4-1.4-2.8-2.9L9.2%2016l2.8%202.8zM3.5%2013l5.7%205.7%202.8-2.8-5.6-5.7L3.5%2013zm-.7-.7l.7.7%202.9-2.8-.8-.7-2.8%202.8zm.7-3.5l-.7.7%202.8%202.8.8-.7-2.9-2.8zM9.2%203L3.5%208.8l2.9%202.8L12%206%209.2%203zm4.2%201.4L12%203.1%209.2%206l1.4%201.4%202.8-2.9zm-5%207.8l5-5-2.8-2.8-5%205%202.9%202.8z%22%20mask%3D%22url%28%23a%29%22/%3E%3C/g%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d%22%20x%3D%22.2%22%20y%3D%22.5%22%20width%3D%2215.8%22%20height%3D%2220.7%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22/%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22/%3E%3CfeOffset/%3E%3CfeGaussianBlur%20stdDeviation%3D%222%22/%3E%3CfeColorMatrix%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.18%200%22/%3E%3CfeBlend%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22/%3E%3CfeBlend%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E');
        }
    `}</style>
    </div>
  )
}
