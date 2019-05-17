import React from 'react';

const NarrationBlock = ({ title1, subtitle1, title2, subtitle2 }) => (
  <div className='footer'>
  SCROLL DOWN
    <div className='footer__container'>
      <div className='footer__elem'>
          <div className='footer__elem__text'>
            <p className='footer__elem__title' style={{fontSize:'1.5vw', lineHeight:'1.9vw'}}>
              {title1}
            </p>
            <p className='footer__elem__subtitle' style={{fontSize:'1.5vw', lineHeight:'1.9vw', width:'26vw'}}>
              {subtitle1}
            </p>
            <a className='footer__elem__readLink'>
              READ MORE
            </a>
          </div>
      </div>
      <div className='footer__container__separator'>
      </div>
      <div className='footer__elem'>
          <div className='footer__elem__text'>
            <p className='footer__elem__title' style={{fontSize:'1.5vw', lineHeight:'1.9vw'}}>
              {title2}
            </p>
            <p className='footer__elem__subtitle' style={{fontSize:'1.5vw', lineHeight:'1.9vw', width:'26vw'}}>
              {subtitle2}
            </p>
            <a className='footer__elem__readLink'>
              READ MORE
            </a>
          </div>
      </div>
    </div>
    <div className='bottomRight'>
      <a className='bottomRight__link'>Get in Touch</a>
    </div>
    <style jsx>{`
    .footer {
      bottom: 0;
      position: absolute;
      width: 100%;
      height: 2.5rem;

      .footer__container {
        width: 100%;
        margin: auto;
        display: flex;
        position:relative;
        padding-bottom: 5px;
        justify-content: space-evenly;

        .footer__container__separator {
          margin-left: .7vw;
          margin-right: .7vw; 
          background-color: grey;
          width: 2px;
          margin-bottom: 18px;
        }
        
  
        .footer__elem {
          border-top: solid 1px grey;
          height: 26vw;
          width: 100%;
          padding-top: 13px;
        }
        
        .footer__elem__text {
          display: flex;
          background-color: #F2F2F2;
          justify-content:center;
          align-content:center;
          flex-direction:column;
          min-height: 25vw;
          margin: auto;
          padding-left: 4vw;
          font-family: Atlas Grotesk;
          
          
          .footer__elem__title {
            color: #979797;
            margin-bottom: 0px;
            margin-top: 0px;
          }
    
          .footer__elem__subtitle {
            margin-top: 0px;
          }

          .footer__elem__readLink {
            font-family: 'Institut';
            font-weight: normal;
            font-style: normal;           
            font-size: .8vw;    
            line-height: 1.33;
            letter-spacing: 1.92px;
            width: 5.8vw;
          }
        }
      }
    }

    .footer__container:after{
      content:"";
      width:100%;
      height:3px;
      left:0;
      bottom:0;
      position:absolute;
      z-index:9;
      background:linear-gradient(to right, #48FF00 55%, #c0d6e4 45%);
    }

    .bottomRight {
      padding-top: 10px;
      width: 115px;
      margin-left: auto;
      margin-right: 0;

      .bottomRight__link {
        font-family: Atlas Grotesk;
        font-weight: 800;
        font-size: 15px;
        line-height: 10px;
        width: 115px;
        padding: 0;
        margin-bottom: 0px;
        margin-right: 5px;
        
      }
    }

  `}</style>
  </div>
)

export default NarrationBlock;