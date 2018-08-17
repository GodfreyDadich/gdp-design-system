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
        font-size: ${fontSizeHeading1}px;
        line-height: ${lineHeightHeading1};
        margin: 0;
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