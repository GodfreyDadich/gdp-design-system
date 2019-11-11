import React from 'react'
import TrackVisibility from 'react-on-screen'

const DynamicGrid = props => {
  return <div className={`logoContainer ${props.classAdd}`}>
    {props.logos.map((logo, index) => {
      return <TrackVisibility tag='span' partialVisibility once key={`clientLogo-${index}`}>
        {
          ({ isVisible }) => <span className='logoImage' key={index} style={{ backgroundImage: `url(${isVisible ? logo.img : ''})` }} >{logo.name}</span>
        }
      </TrackVisibility>
    })}
    <style jsx>
      {`
        .logoContainer {
          position: relative;
          display: block;
          margin: 10px auto;
          width: 70vw;
          padding-bottom: 1.5vw;

          @media only screen and (max-width: 1024px) {
            width: 100vw;
            padding-bottom: 5vw;
          }   

          @media only screen and (max-width: 750px) {
            column-count: 2;
            margin: 10px 4px 50px 4px;
            padding-bottom: 2vw;
          }
        }
        .logoImage {
          background-size: 80%;
          background-position: center center; 
          background-repeat: no-repeat;
          display: inline-block;
          text-indent: 100%;
          overflow: hidden;
          white-space: nowrap;
          margin-right: 2%;
          margin-left: 3%;
          height: 8vw;
          width: 14.5%;
        
          @media only screen and (max-width: 1024px) {
            margin-right: 5%;
            margin-left: -1%;
          }   

          @media only screen and (max-width: 750px) {
            background-image: none!important;
            text-indent: 0;
            height: auto;
            overflow: visible;
            white-space: initial;
            font-family: 'Atlas Grotesk';
            font-weight: 800;
            color: #7f7f7f; 
            letter-spacing: .2px;
            line-height: 22px;
            font-size: 13.2px;
            display: block;
            width: 75%;
          }   
        }
      `}
    </style>
  </div>
}

export default DynamicGrid