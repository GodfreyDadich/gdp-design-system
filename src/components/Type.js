import React from 'react'
import {
  fontSizeSuper, lineHeightSuper,
  fontSizeHeading1, lineHeightHeading1,
  fontSizeHeading2, lineHeightHeading2, 
  fontSizeHeading3, lineHeightHeading3,
  fontSizeHeading4, lineHeightHeading4,
  // fontSizeHeading5,
  // fontSizeHeading6,
  // fontSizeHeading7,
  // fontSizeHeading8,
  // fontSizeBodyArticle,
  // fontSizeBodyArticleSmall,
  // fontSizeBodySmall,
  // fontSizeAccent,
  // fontSizeUppercase,
} from "../styles/typography";

export const HeadingSuper = ({children}) =>
  <h1 className='super' >
    {children}
    <style jsx>{`
      .super {
        font-size: ${fontSizeSuper}px;
        line-height: ${lineHeightSuper};
        margin: 0;
      }
    `}</style>
  </h1>

export const Heading1 = ({children}) =>
  <h1 className='headingOne' >
    {children}
    <style jsx>{`
      .headingOne {
        position: relative;
        font-family: 'Noe Display';
        font-weight: bold;
        font-size: 3.52vw;
        line-height: 0.97;
        letter-spacing: 0.3px;
        padding-bottom: 51px;
        margin: 0 0 35px 0;

        .clientName {
          display: block;
          color: #7F7F7F;
        }

        &:before {
          content: '';
          position: absolute;
          width: 24.56%;
          height: 7px;
          background-color: #000;
          bottom: 0;
          left: 0;
        }
      }
    `}</style>
  </h1>
  
export const Heading2 = ({children}) => 
  <h2 className='headingTwo'>
    {children}
    <style jsx>{`
      .headingTwo {
        font-size: ${fontSizeHeading2}px;
        line-height: ${lineHeightHeading2};
        margin: 0;
      }
    `}</style>
  </h2>

export const Heading3 = ({children}) => 
  <h3 className='headingThree'>
    {children}
    <style jsx>{`
      .headingThree {
        font-size: ${fontSizeHeading3}px;
        line-height: ${lineHeightHeading3};
        margin: 0;
      }
    `}</style>
  </h3>

export const Heading4 = ({ children }) => 
  <h4 className='headingFour'>
    {children}
    <style jsx>{`
      .headingFour {
        font-size: ${fontSizeHeading4}px;
        line-height: ${lineHeightHeading4};
        margin: 0;
      }
    `}</style>
  </h4>

export const Pullquote = ({ classAdd, children }) =>
  <div className={`pullQuote${classAdd ? ' ' + classAdd : ''}`}>
    {children}
    <style jsx>{`
      .pullQuote {
        font-family: 'Atlas Grotesk';
        font-weight: bold;
        font-size: 2.34vw;
        line-height: 1.06;         
        letter-spacing: -0.3px;
        text-align: center;
        margin-top: 89px;
        margin-bottom: 89px;       
      }
    `}</style>
  </div>

export const Caption = ({ classAdd, children }) =>
  <figcaption className={`captionText${classAdd ? ' ' + classAdd : ''}`} >
    {children}
    <style jsx>{`
      .captionText {
        color: #7F7F7F;
        font-family: 'Atlas Grotesk';
        font-weight: 500;
        display: block;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: 0.2px;
        margin-top: 25px;
        margin-bottom: 89px;
        text-align: center;
      }  
    `}</style>
  </figcaption>

export const SideBar = ({ sideBar }) =>
  <div
    className={`sideBar`}
    style={{
      position: 'absolute',
      top: sideBar.location.includes('top') ? '0px' : 'auto',
      bottom: sideBar.location.includes('bottom') ? '0px' : 'auto',
      left: sideBar.location.includes('left') ? '-135px' : 'auto',
      right: sideBar.location.includes('right') ? '-135px' : 'auto',
      width: '111px',
      fontFamily: 'Atlas Grotesk',
      fontWeight: '900',
      color: '#000'
    }}
  >
    {sideBar.image ? <img className='sideBar__logo' src={sideBar.image} style={{ display: 'block', width: '100%', marginBottom: '12px' }} /> : ''}
    {sideBar.text.length > 0 ? <span className={`sideBar__text${sideBar.isQuote ? ' isQuote' : ''}`}
      style={{
        position: 'relative',
        display: 'block',
        borderTop: '7px solid #000',
        paddingTop: '9px',
        fontSize: '12px',
        lineHeight: '12.8px',
        letterSpacing: '-0.1px'
      }}>{sideBar.text}</span> : ''}

    <style>
      {`
      .isQuote:before {
        content: '“';
        margin-left: -7px;
      }
      .isQuote:after {
        content: '”';
        margin-right: -7px;
      }        

      p {
        margin: 0;
      }`}
    </style>
  </div>
