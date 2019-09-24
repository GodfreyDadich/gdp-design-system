import React from 'react'

const Breadcrumb = ({delimiter, links, linkLast}) => (
  <ul className='breadcrumb'>
    { links.map( (link,index) => 
      <li className='breadcrumb__item' key={`bread-crumb-item-${index}`}>
        {index !== (linkLast ? links.length : (links.length - 1)) ?
          <a
            style={{
              boxShadow: 'inset 0 -4px 0 #06ff02',
              paddingBottom: '2px'
            }}
            className='breadcrumb__link'
            href={link.slug}>{link.title}</a> :
          link.title
        }
        {index !== (links.length - 1) ? <span className='delimiter'>{delimiter}</span> : ''}
      </li>
    )}
    <style jsx>{`
      .breadcrumb {
        list-style: none;
        padding: 0;
        margin: 0;
        font-family: 'Institut';
        font-weight: normal;
        font-style: normal;           
        font-size: 9px;    
        line-height: 1.33;
        letter-spacing: 1.92px;
        margin-bottom: 16px;

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