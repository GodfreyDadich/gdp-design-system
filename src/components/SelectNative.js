import React from 'react'

const SelectNative = ({
  borderColor,
  borderWidth,
  borderRadius,
  backgroundColor,
  selectPadding,
  selectFont,
  options,
  disabled
}) => 
<select className='styledSelect' disabled={disabled}>
  {options.map( (option,index) => 
      <option key={option+index}>{option}</option> 
  )}
  <style jsx>{`
    .styledSelect {
      border-color: ${borderColor};
      border-width: ${borderWidth}px;
      border-radius: ${borderRadius}px;
      border-style: solid;
      outline: none;
      -webkit-appearance: none;
      padding: ${selectPadding}px;
      font-family: ${selectFont};
      background-color: ${backgroundColor};
      padding-right: 13px;

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
  `}</style>
</select>

export default SelectNative
