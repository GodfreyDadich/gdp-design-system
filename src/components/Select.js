import React from 'react'


const calculatedHeight = '100px'
let selectedValue = ''

const doSelection =  newValue  => {
    selectedValue = newValue
}
/* TODO: 
  Lifecycle functions. Calculate height of UL 
*/
export default ({placeholder, options = ['test']}) => (
  <div className='select'>
    <input className='select__value' placeholder={placeholder} value={selectedValue} readOnly/>
    <ul className='select__options'>
      {
        options.map(option => <li className='select__option' onClick={(e) => doSelection(option)} key={option} >{option}</li> )
      }
    </ul>
    <style jsx>{`
      .select {
        position: relative;
        display: inline-block;

        &__value {
          &:focus {
            & + ul {
              height: 100px;
            }
          }
        }
        &__options {
          position: absolute;
          // top: 0;
          height: 0;
          overflow: hidden;
          list-style: none;
          padding: 0;
          margin:  0;
          transition: height .25s;
          transition-delay: .2s;

          &.expanded {
            height: 100px;
          }
        }

        &__option {
          cursor: pointer;

          &:hover {
            background-color: #e8eef7;
          }
        }
      }
    `}</style>
  </div>
)
