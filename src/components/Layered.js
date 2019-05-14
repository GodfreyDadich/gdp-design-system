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
  <div className='layeredHero'>
    <div className='layeredHero__image'>
      <img src={source} alt="wired" />
    </div>
    <div className='layeredHero__content'>
      <Breadcrumb delimiter={text('Separator', '/')}
        links={breadCrumbData} />
      <p id='layeredHero__content__mainTitle'>
        {title}
      </p>
      <p id='layeredHero__content__subtitle'>
        {subtitle}
      </p>
      <div id='layeredHero__content__border'></div>
    </div>
    <style jsx>
      {`
        .layeredHero {
          display: flex;
          width: 100vw;

          .layeredHero__image {
            width:50vw; 
            overflow: hidden; 
            margin:0; 
          }
          .layeredHero__image img {
            display:block;  
            margin:0 -25.875%;
            width: 75vw;
           }
           .layeredHero__content {
            background-color: #F2F2F2;
            font-family: Noe Display;
            margin: auto;
            width: 40vw;
            padding-top: 7vw;
            padding-bottom: 7vw;
            padding-left: 7vw;
            padding-right: 7vw;
            transform: translateY(2%) translateX(-17%);

            #layeredHero__content__border {
              border-top: solid 1vh;
              width: 14vw;
            }
            #layeredHero__content__mainTitle {
              font-size: 3.1vw;
              margin: 5vh 0 0 0;
              color: grey;
              letter-spacing: .01vw;
            }
            #layeredHero__content__subtitle {
              margin: 1vw 0 3vw 0;
              font-size: 3.1vw;
              line-height: 3.2vw;
              letter-spacing: .01vw;
            }
          }
        }
      `}
    </style>
  </div>
)

export default Layered;