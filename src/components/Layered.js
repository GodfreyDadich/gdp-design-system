import React from 'react'
import Breadcrumb from './Breadcrumb'

const Layered = ({ source, title, subtitle, breadCrumbData, delimiter }) => (
  <div className='layeredHero'>
    <div className='layeredHero__image'>
      <img src={source} alt='wired' />
    </div>
    <div className='layeredHero__content'>
      <Breadcrumb delimiter={delimiter} links={breadCrumbData} />
      <p className='layeredHero__content__mainTitle'>
        {title}
      </p>
      <p className='layeredHero__content__subtitle'>
        {subtitle}
      </p>
      <div className='layeredHero__content__border' />
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

            &__border {
              border-top: solid 1vh;
              width: 14vw;
            }
            &__mainTitle {
              font-size: 3.1vw;
              margin: 5vh 0 0 0;
              color: grey;
              letter-spacing: .01vw;
            }
            &__subtitle {
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

export default Layered
