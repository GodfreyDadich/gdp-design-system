import React from 'react'

const SelectNative = ({
  borderColor,
  borderWidth,
  borderRadius,
  backgroundColor,
  selectPadding,
  selectFont,
  fontSize,
  selectIcon,
  options,
  disabled
}) =>
<div className='select'>
  <div className={`select__icon`}>
    <div className='caret'>&gt;</div>
    <div className='triangle' />
    <div className='chevron' />
</div>
  <select className='styledSelect' disabled={disabled}>
    {options.map( (option,index) => 
        <option key={option+index}>{option}</option> 
    )}
  </select>
  <style jsx>{`
    .select {
      position: relative;
      display: inline-block;

      .styledSelect {
        border-color: ${borderColor};
        border-width: ${borderWidth}px;
        border-radius: ${borderRadius}px;
        border-style: solid;
        outline: none;
        -webkit-appearance: none;
        padding: ${selectPadding}px;
        font-family: ${selectFont};
        font-size: ${fontSize}px;
        background-color: ${backgroundColor};
        padding-right: 35px;

        &:before {
          content: '';
          position: relative;
          width: 0;
          height: 0;
          margin-left: 2px;
          margin-top: 5px;
          border-top: 5px solid transparent;
          border-left: 8px solid ${borderColor};
          border-bottom: 5px solid transparent;
        }
      }

      &__icon {
        position: absolute;
        pointer-events: none;
        z-index: 1;
        color: ${borderColor};
        right: ${selectPadding - 5}px;
        top: calc(${fontSize/2 + selectPadding}px - 30%);
        width: 19px;
        height: 19px;
        transform: rotate(90deg);
        transform-origin: 25% 50%;
        transform-style: preserve-3D;
        transition: transform 0.25s;

        div {
          display:none;
        }

        .triangle {
          position: relative;
          width: 0;
          height: 0;
          margin-left: 2px;
          margin-top: 5px;
          border-top: 5px solid transparent;
          border-left: 8px solid ${borderColor};
          border-bottom: 5px solid transparent;
        }

        .chevron {
          position: relative;
          text-align: center;
          padding: 2px;
          margin-bottom: 5px;
          height: 0;
          width: 5px;
          transform: rotate(-90deg);
          transform-origin: 50% 50%;
          transform-style: preserve-3D;                
          
          &:before {
            content: '';
            position: absolute;
            top: 0;
            left: -8px;
            height: 100%;
            width: 51%;
            background: ${borderColor};
            transform: skew(0deg, 40deg);
          }
          &:after {
            content: '';
            position: absolute;
            top: 0;
            right: 8px;
            height: 100%;
            width: 50%;
            background: ${borderColor};
            transform: skew(0deg, -40deg);
          }                
        }
      }   
    }
  `}</style>
</div>  

export default SelectNative
