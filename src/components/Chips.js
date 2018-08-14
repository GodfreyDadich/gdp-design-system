import React from 'react'

const Chips = ({chips, closeCallback}) => (
  <div className='chips'>

    {chips.map( chip => 
      <div className='chip'>
        {chip.title}
        <div className='chip__close'>x</div>
      </div>
    )}
    
    <style jsx>{`
      .chips {
        position: relativel;
        width: 100%;

        .chip {
          position: relative;
          padding: 5px 25px 5px 5px;
          margin: 0 5px; 
          display: inline-block;
          background-color: green;
          font-size: 11px;
          color: white;
          border-radius: 30px;

          &__close {
            position: absolute;
            right: 3px;
            top: 2px;
            width: 10px;
            height: 10px;
            font-size: 10px;
            text-align: center;
            padding: 1px;
            border: 1px solid #fff;
            border-radius: 100%;

          }
        }
      }
    `}</style>
  </div>
)

export default Chips