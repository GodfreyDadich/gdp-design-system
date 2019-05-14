import React from 'react'
import Breadcrumb from './Breadcrumb'

const Inset = ({ source, title, subtitle, breadCrumbData, delimiter }) => (
  <div className='insetHero'>
    <div className='insetHero__image'>
      <img src={source} alt='wired' />
    </div>
    <style jsx>
      {`
        .insetHero {
          &__image {
            width: 90vw;
            height: auto;
            padding: 5vw;

            img {
              height: auto;
              margin-left: auto;
              display: block;
              margin-left: auto;
              margin-right: auto;
              width: 80%;
            }            
          }
        }
      `}
    </style>
  </div>
)

export default Inset
