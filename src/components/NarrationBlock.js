import React from 'react'

const NarrationBlock = ({ copy }) => (
  <div className='narrationBlock'>
    <div className='backgroundBlock' />
    <p className='narrationBlock__content'>
      <div id='narrationBlock__content__border' />
      {copy}
    </p>
    <style jsx>{`
    .narrationBlock {
      display: block;
      margin: auto;
      width: 60%;
      padding: 8vw 0;

      .narrationBlock__content {
        width: 45vw;
        font-family: Atlas Grotesk;
        font-weight: 600;
        font-size: 2.2vw;
        position: relative;
        transform: translateX(30%) translateY(22%);
        line-height: 2.35vw;
        letter-spacing: .01vw;
        display: inline-block;
        bottom: 50%
      }
    }
    .backgroundBlock {
      width: 27vw;
      height: 21.4vw;
      display: inline-block;
      position: absolute;
      background-color: #F2F2F2;
    }
    #narrationBlock__content__border {
      border-top: solid 1.3vh;
      width: 21vw;
      padding-bottom: 1.4vw;

    }
    `}</style>
  </div>
)

export default NarrationBlock
