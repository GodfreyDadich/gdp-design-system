import React from 'react';

const NarrationBlock = ({ title1, subtitle1, title2, subtitle2 }) => (
  <div className='container'>
  SCROLL DOWN
    <div className='footer'>
      <div className='wrapper'>
          <div className='text'>
            <p className='title' style={{fontSize:'1.5vw', lineHeight:'1.9vw'}}>
              {title1}
            </p>
            <p className='subtitle' style={{fontSize:'1.5vw', lineHeight:'1.9vw', width:'26vw'}}>
              {subtitle1}
            </p>
            <a className='read-link'>
              READ MORE
            </a>
          </div>
      </div>
      <div className='separator'>
      </div>
      <div className='wrapper'>
          <div className='text'>
            <p className='title' style={{fontSize:'1.5vw', lineHeight:'1.9vw'}}>
              {title2}
            </p>
            <p className='subtitle' style={{fontSize:'1.5vw', lineHeight:'1.9vw', width:'26vw'}}>
              {subtitle2}
            </p>
            <a className='read-link'>
              READ MORE
            </a>
          </div>
      </div>
    </div>
    <div className='bottom-footer'>
      <a className='contact'>Get in Touch</a>
    </div>
    <style jsx>{`
    .footer:after{
      content:"";
      width:100%;
      height:3px;
      left:0;
      bottom:0;
      position:absolute;
      z-index:9;
      background:linear-gradient(to right, #48FF00 55%, #c0d6e4 45%);
    }

    .container {
      bottom: 0;
      position: absolute;
      width: 100%;
      height: 2.5rem;
    }


    .footer {
      width: 100%;
      margin: auto;
      display: flex;
      position:relative;
      padding-bottom: 5px;
      justify-content: space-evenly;
    }
    
    .wrapper {
      border-top: solid 1px grey;
      height: 26vw;
      width: 100%;
      padding-top: 13px;
    }
    
    .separator {
      margin-left: .7vw;
      margin-right: .7vw; 
      background-color: grey;
      width: 2px;
      margin-bottom: 18px;
    }
    
    .text {
      display: flex;
      background-color: #F2F2F2;
      justify-content:center;
      align-content:center;
      flex-direction:column;
      min-height: 25vw;
      margin: auto;
      padding-left: 4vw;
      font-family: Atlas Grotesk;
      
      
      .title {
        color: #979797;
        margin-bottom: 0px;
        margin-top: 0px;
      }

      .subtitle {
        margin-top: 0px;
      }
    }

    .contact {
      font-family: Atlas Grotesk;
      font-weight: 800;
      font-size: 15px;
      line-height: 10px;
      width: 115px;
      padding: 0;
      margin-bottom: 0px;
      margin-right: 5px;

    }
    .bottom-footer {
      padding-top: 10px;
      width: 115px;
      margin-left: auto;
      margin-right: 0;
    }

    .read-link {
      font-family: 'Institut';
      font-weight: normal;
      font-style: normal;           
      font-size: .8vw;    
      line-height: 1.33;
      letter-spacing: 1.92px;
      width: 5.8vw;
    }

  `}</style>
  </div>
)

export default NarrationBlock;