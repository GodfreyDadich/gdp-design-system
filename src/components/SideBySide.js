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

const SideBySide = ({ source, title, subtitle }) => (
  <div className='sideBySideHero'>
      <div className='sideBySideHero__image'>
        <img src={source} alt="wired" />
      </div>
      <div className='sideBySideHero__title'>
        <Breadcrumb delimiter={text('Separator', '/')}
          links={breadCrumbData} />
        <p id='sideBySideHero__title__main'>
          {title}
        </p>
        <p id='sideBySideHero__title__sub'>
          {subtitle}
        </p>
        <div id='sideBySideHero__title__border'></div>
      </div>
    <style jsx>
      {`
        .sideBySideHero {
          background-color: #F2F2F2;
          display: flex;
          width: 100vw;

          .sideBySideHero__image {
            width:50vw; 
            overflow: hidden; 
            margin:0; 
          }
         .sideBySideHero__image img {
            display:block;  
            margin:0 -38.885%;
            width:177.777%;
          }
          .sideBySideHero__title {
            height: 100%;
            width: 50vw;
            background-color: #F2F2F2;
            font-family: Noe Display;
            margin: auto;
            padding-left: 8vw;
            padding-right: 8vw; 

            #sideBySideHero__title__border {
              border-top: solid 1vh;
              width: 14vw;
            }
            #sideBySideHero__title__main {
              font-size: 3.1vw;
              margin: 5vh 0 0 0;
              color: grey;
              letter-spacing: .01vw;
            }
            #sideBySideHero__title__sub {
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

export default SideBySide;