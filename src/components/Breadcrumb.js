import React from 'react'

const Breadcrumb = ({delimiter, links}) => (
  <ul className='breadcrumb'>
    { links.map( (link,index) => 
      <li className='breadcrumb__item'> 
        
        {index !== (links.length - 1) ? 
          <a className='breadcrumb__link'href='#'>{link.title}</a> : 
          link.title
        }
        {index !== (links.length - 1) ? <span className="delimiter">{delimiter}</span> : ''}
      </li>
    )}
    <style jsx>{`
      .breadcrumb {
        list-style: none;
        padding: 0;
        margin: 0;

        &__item {
          display: inline-block;
        }
        .delimiter {
          margin: 0 5px;
        }
      }
    `}</style>
  </ul>
)

export default Breadcrumb