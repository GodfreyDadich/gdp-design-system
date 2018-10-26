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
        font-size: 45px;
        line-height: 43px;
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