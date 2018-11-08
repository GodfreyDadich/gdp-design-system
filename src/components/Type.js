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
  <h1 className='super'>
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
  <h1 className='headingOne'>
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

export const Heading4 = ({children}) => 
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

export const Pullquote = ({classAdd, children}) =>
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
  <div className={`sideBar ${sideBar.location ? sideBar.location : 'topLeft'}`}>
    {sideBar.image ? <img className='sideBar__logo' src={sideBar.image} /> : ''}
    {sideBar.text.length > 0 ? <span className='sideBar__text'>{sideBar.text}</span> : ''}

    <style jsx>{`
    .sideBar {
      position: absolute;
      top: 0;
      left: -126px;
      width: 102px;
      font-family: 'Atlas Grotesk';
      font-weight: 900;
      color: #000;
      
      &.left-bottom {
        top: auto;
        bottom: 0;
      }
      &.right-top {
        left: auto;
        right: -126px;
      }
      &.right-bottom {
        top: auto;
        left: auto;
        right: -126px;
        bottom: 0;
      }

      &__logo {
        display: block;
        width: 100%;
        margin-bottom: 12px;
      }
      &__text {
        display: block;
        border-top: 7px solid #000;
        padding-top: 9px;
        font-size: 12px;
        line-height: 12.8px;
        letter-spacing: -0.1px;

        p {
          margin: 0;
        }
      }      
    }    
    `}</style>
  </div>
