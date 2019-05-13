import React from 'react';
import Breadcrumb from './Breadcrumb';
import { text } from '@storybook/addon-knobs';

const breadCrumbData = [
  {
    title: 'home',
    slug: 'http://google.com'
  },
  {
    title: 'work',
    slug: 'http://google.com'
  },
  {
    title: 'wired',
    slug: 'http://google.com'
  }
]

const Layered = ({ source, title, subtitle }) => (
  <div>
  <div className='container'>
    <svg width="8.5vw" height="8.5vh" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 64C49.664 64 64 49.664 64 32C64 14.336 49.664 0 32 0C14.336 0 0 14.336 0 32C0 49.664 14.336 64 32 64Z" fill="#00AD68" />
      <path d="M43.392 8.95996C43.392 8.95996 43.52 8.95996 43.52 9.08716V39.5523C43.52 39.5523 43.52 39.6795 43.392 39.6795H34.624C26.112 39.7431 19.2 32.8742 19.2 24.3515C19.2 15.8289 26.112 8.95996 34.688 8.95996H43.392Z" fill="#231F20" />
      <path d="M19.328 55.0398C19.328 55.0398 19.2 55.0398 19.2 54.9126V24.4475C19.2 24.4475 19.2 24.3203 19.328 24.3203H28.096C36.608 24.2567 43.52 31.1256 43.52 39.6482C43.52 48.1709 36.608 55.0398 28.096 55.0398H19.328Z" fill="white" />
      <path d="M34.624 39.6798H43.392C43.52 39.6798 43.52 39.6162 43.52 39.6162C43.456 31.1551 36.544 24.3481 28.032 24.3481H19.264C19.2 24.2845 19.2 24.3481 19.2 24.3481C19.2 32.8092 26.112 39.6798 34.624 39.6798Z" fill="#0C8F93" />
    </svg>
    <div className='image'>
      <img src={source} alt="wired" />
    </div>
    <div className='title'>
      <Breadcrumb delimiter={text('Separator', '/')}
        links={breadCrumbData} />
      <p id='main'>
        {title}
      </p>
      <p id='sub'>
        {subtitle}
      </p>
      <div id='border'></div>
    </div>
    </div>
    <style jsx>
      {`
        .container {
          display: flex;
          width: 100vw;
        }

        svg {
          position: absolute;
          margin: .5vh 1.5vw;
        }

        .image {
          width:50vw; 
          overflow: hidden; 
          margin:0; 
        }

        .image img {
          display:block;  
          margin:0 -25.875%;
          width: 75vw;
         }


        .title {
          background-color: #F2F2F2;
          font-family: Noe Display;
          margin: auto;
          width: 40vw;
          padding-top: 7vw;
          padding-bottom: 7vw;
          padding-left: 7vw;
          padding-right: 7vw;
          transform: translateY(2%) translateX(-17%);
          
          #main {
            font-size: 3.1vw;
            margin: 5vh 0 0 0;
            color: grey;
            letter-spacing: .01vw;
          }
          
          #sub {
            margin: 1vw 0 3vw 0;
            font-size: 3.1vw;
            line-height: 3.2vw;
            letter-spacing: .01vw;
          }
        }

        #border {
          border-top: solid 1vh;
          width: 14vw;
        }
      `}
    </style>
  </div>
)

export default Layered;