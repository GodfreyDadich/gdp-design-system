import React from 'react'

const RichTextQuote = ({ classAdd, pqOptions, children }) => {

  return (<div>
    {(() => {
      switch (pqOptions) {
        case 'left-carving':
          return <figure className='leftCarving'>
            <div id='leftCarving__border' />
            {children}
            <style jsx>{`
            .leftCarving {
              font-family: Atlas Grotesk;
              font-style: normal;
              font-weight: bold;
              font-size: 1.8vw;
              line-height: 2.1vw;
              padding-top: 11px;
              padding-bottom: 4.5px;
              letter-spacing: -0.25px;
              float: left;
              width: 21vw;
              margin: .6vw -8vw .7vw 3vw;
              transform: translateX(-10vw);
              border-top: 5px solid #000;
              
              @media screen and (min-width: 1200px) {
                margin: .6vw -6.5vw .1vw 25vw;
                transform: translateX(-8vw);
                border-top: 5.5px solid #000;
                font-size: 22px;
                line-height: 26px;
                }
        
              @media screen and (max-width: 600px) {
                border-top: 4px solid #000;
                padding-top: 7px;
                }
        
          }
          `}</style>
          </figure>
        case 'sidebar-quote':
          return <div className='sidebarquote'>
            <div className='sidebarquote__content'>
              <div id='sidebarquote__content__border'>
              </div>
              {children}
            </div>
            <style jsx>{`
          .sidebarquote {
            display: inline-block;
            padding: 0 21px 0 0;
            vertical-align: top;
            transform: translateX(15vw);
        
        
            #sidebarquote__content__border {
              border-top: .5vw solid;
              width: 12.2vw;
              padding-bottom: 1vw;
        
              @media screen and (min-width: 1622px) {
                border-top: 8px solid;
                width: 197px;
                padding-bottom: 17px;
                }
            }
            .sidebarquote__content {
              margin-top: 7px;
              width: 12.3vw;
              font-family: Atlas Grotesk;
              font-weight: 600;
              font-size: 1.2vw;
              line-height: 1.4vw;
              letter-spacing: .01vw;
              display: inline-block;
        
              @media screen and (min-width: 1622px) {
                margin-top: 4px;
                width: 205px;
                font-size: 19.5px;
                line-height: 23px;
                }
              }
            }
          `}</style>
          </div>
        default:
          return null
      }
    })()}

  </div>
  )
}

export default RichTextQuote