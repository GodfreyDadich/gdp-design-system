import React from 'react'
import TrackVisibility from 'react-on-screen'

const Pullquote = ({ classAdd, pqOptions, children }) => {

  return (<div>
    {(() => {
      switch (pqOptions) {
        case 'quote-block':
          return <TrackVisibility once partialVisibility
            style={{ marginTop: 0 }}>
            {({ isVisible }) =>
              <div className='quoteBlock'
                style={{
                  marginTop: isVisible ? '0px' : '15px',
                  opacity: isVisible ? 1 : 0,
                  transition: 'opacity 0.5s, margin-top 0.5s'
                }} >
                <div className='backgroundBlock' />
                <div className='quoteBlock__content'>
                  <div id='quoteBlock__content__border' />
                  {children}
                </div>
                <style jsx>{`
            .quoteBlock {
              display: block;
              margin: auto;
              height: 21.4vw;
              padding: 5vw 0;
              width: 45vw;
        
              .quoteBlock__content {
                width: 45vw;
                font-family: Atlas Grotesk;
                font-weight: 600;
                font-size: 2vw;
                line-height: 2.2vw;
                position: relative;
                transform: translateX(30%);
                letter-spacing: .02vw;
                display: inline-block;
                top: 21%;
              }
            }
            .backgroundBlock {
              width: 27vw;
              height: 21.4vw;
              display: inline-block;
              position: absolute;
              background-color: #F2F2F2;
            }
            #quoteBlock__content__border {
              border-top: solid 6px;
              width: 21vw;
              padding-bottom: 1.4vw;
              @media screen and (min-width: 1200px) {
                border-top: solid 7px;
                }
        
              @media screen and (max-width: 800px) {
                border-top: solid 4px;
                width: 21vw;
                padding-bottom: 1.4vw;
                }
            }
              `}</style>
              </div>
            }
          </TrackVisibility>
        default:
          return <TrackVisibility once style={{ marginTop: 0 }}>
            {({ isVisible }) =>
              <div
                className={`pullQuote${classAdd ? ' ' + classAdd : ''}`}
                style={{
                  marginTop: isVisible ? '89px' : '104px',
                  opacity: isVisible ? 1 : 0,
                  transition: 'opacity 0.5s, margin-top 0.5s'
                }}
              >
                {children}
                <style jsx>{`
        .pullQuote {
            font-family: 'Atlas Grotesk';
            font-weight: bold;
            font-size: 2.34vw;
            line-height: 1.06;         
            letter-spacing: -0.3px;
            text-align: center;
            margin-bottom: 89px;
            
            @media only screen and (max-width: 768px) {
                font-size: 3.34vw;
              }             
          }
          `}</style>
              </div>
            }
          </TrackVisibility>
      }
    })()}

  </div>
  )
}

export default Pullquote