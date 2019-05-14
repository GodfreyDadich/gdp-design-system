import React from 'react'
import Breadcrumb from './Breadcrumb'
import { Heading1 } from './Type'

const SideBySide = ({ source, title, subtitle, breadCrumbData, delimiter }) => (
  <div className='sideBySideHero'>
    <div className='sideBySideHero__image'>
      <img src={source} alt='wired' />
    </div>
    <div className='sideBySideHero__title'>
      <Breadcrumb delimiter={delimiter} links={breadCrumbData} />
      <Heading1>
        <span style={{ display: 'block', color: '#7f7f7f' }}>{title}</span>
        {subtitle}
      </Heading1>
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
            margin: auto;
            padding-left: 8vw;
            padding-right: 8vw; 
          }
        }
      `}
    </style>
  </div>
)

export default SideBySide
