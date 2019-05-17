import React from 'react'
import Breadcrumb from './Breadcrumb'
import { Heading1 } from './Type'

const Layered = ({ source, title, subtitle, breadCrumbData, delimiter }) => (
  <div className='layeredHero'>
    <div className='layeredHero__image'>
      <img src={source} alt='wired' />
    </div>
    <div className='layeredHero__content'>
      <Breadcrumb delimiter={delimiter} links={breadCrumbData} />
      <Heading1>
        <span style={{ display: 'block', color: '#7f7f7f' }}>{title}</span>
        {subtitle}
      </Heading1>
    </div>
    <style jsx>
      {`
        .layeredHero {
          display: flex;
          width: 100vw;

          &__image {
            width:50vw; 
            overflow: hidden; 
            margin:0; 

            img {
              display:block;  
              margin:0 -25.875%;
              width: 75vw;
            }
           }
           &__content {
            background-color: #F2F2F2;
            font-family: Noe Display;
            margin: auto;
            width: 40vw;
            padding-top: 7vw;
            padding-bottom: 7vw;
            padding-left: 7vw;
            padding-right: 7vw;
            transform: translateY(2%) translateX(-17%);
          }
        }
      `}
    </style>
  </div>
)

export default Layered
