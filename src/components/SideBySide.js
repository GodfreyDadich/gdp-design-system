import React from 'react'
import Breadcrumb from './Breadcrumb'

const SideBySide = ({ source, title, subtitle, breadCrumbData, delimiter }) => (
  <div className='sideBySideHero'>
    <div className='sideBySideHero__image'>
      <img src={source} alt='wired' />
    </div>
    <div className='sideBySideHero__title'>
      <Breadcrumb delimiter={delimiter} links={breadCrumbData} />
      <p className='sideBySideHero__title__main'>
        {title}
      </p>
      <p className='sideBySideHero__title__sub'>
        {subtitle}
      </p>
      <div className='sideBySideHero__title__border' />
    </div>
    <style jsx>
      {`
        .sideBySideHero {
          background-color: #F2F2F2;
          display: flex;
          width: 100vw;

          &__image {
            width:50vw; 
            overflow: hidden; 
            margin:0; 
            img {
              display:block;  
              margin:0 -38.885%;
              width:177.777%;
            }
          }
          &__title {
            height: 100%;
            width: 50vw;
            background-color: #F2F2F2;
            font-family: Noe Display;
            margin: auto;
            padding-left: 8vw;
            padding-right: 8vw; 

            &__border {
              border-top: solid 1vh;
              width: 14vw;
            }
            &__main {
              font-size: 3.1vw;
              margin: 5vh 0 0 0;
              color: grey;
              letter-spacing: .01vw;
            }
            &__sub {
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

export default SideBySide
