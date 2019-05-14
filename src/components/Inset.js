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

const Inset = ({ source, title, subtitle }) => (
  <div className='insetHero'>
    <div className='insetHero__image'>
      <img src={source} alt="wired" />
    </div>
    <div className='insetHero__header'>
      <div className='insetHero__header__title'>
        <Breadcrumb delimiter={text('Separator', '/')}
          links={breadCrumbData} />
        <p id='insetHero__header__main'>
          {title}
        </p>
        <p id='insetHero__header__sub'>
          {subtitle}
        </p>
        <div id='insetHero__header__border'></div>
      </div>
    </div>
    <style jsx>
      {`
        .insetHero__image {
          width: 90vw;
          height: auto;
          padding: 5vw;
        }
        img {
          height: auto;
          margin-left: auto;
          display: block;
          margin-left: auto;
          margin-right: auto;
          width: 80%;
        }
        .insetHero__header {
        align-content: center;
        margin-left: 10vw;

        #insetHero__header__border {
          border-top: solid 1vh;
          width: 14vw;
        }
        .insetHero__header__title {
          width: 35vw;
          font-family: Noe Display;
          margin-left: 15vw;
          padding: 2vw;
          
          #insetHero__header__main {
            font-size: 3vw;
            margin: 5vh 0 0 0;
            color: grey;
            letter-spacing: .01vw;
          }
          #insetHero__header__sub {
            margin: 1vw 0 2.5vw 0;
            font-size: 3vw;
            line-height: 3.2vw;
            letter-spacing: .01vw;
          }
        }
      }
      `}
    </style>
  </div>
)

export default Inset;