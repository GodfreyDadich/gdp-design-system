import React, { useState, useEffect } from 'react'
import TrackVisibility from 'react-on-screen'
import ConditionalLink from './ConditionalLink'
import { InstagramIcon } from './Icons'
import { isMobile, isMobileOnly } from 'react-device-detect'

import {
  fontSizeSuper, lineHeightSuper,
  // fontSizeHeading1, lineHeightHeading1,
  fontSizeHeading2, 
  // lineHeightHeading2,
  // fontSizeHeading3, lineHeightHeading3,
  // fontSizeHeading4, lineHeightHeading4,
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

export const HeadingSuper = ({ children }) =>
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

export const Heading1 = ({ children, style }) =>
  <h1
    style={style}
    className='headingOne' >
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
        color: #000;

        .clientName {
          display: block;
          color: #7F7F7F; 
        }

        &:before {
          content: '';
          position: absolute;
          width: 24.56vw;
          max-width: 33%;
          height: 7px;
          background-color: #000;
          bottom: 0;
          left: 0;
        }
        @media only screen and (max-width: 500px) {
          font-size: 12vw !important;
          padding-bottom: 35px !important;
          margin-bottom: 28px !important;

          &:before {
            width: calc(50% - 16px) !important;
          }
        }  
        @media only screen and (max-width: 769px) {
          font-size: 40px !important;
          padding-bottom: 41px !important;
          margin-bottom: 28px !important;

          &:before {
            width: calc(((100vw - 60px) / 4) - 12px) !important;
          }
        }             
      }
    `}</style>
  </h1>

export const Heading2 = ({ children, style, className }) =>
  <h2
    style={Object.assign({
      fontSize: (fontSizeHeading2 / 1280) * 100 + 'vw',
      lineHeight: 1,
      margin: 0
    }, style)}
    className={className}
  >
    {children}
  </h2>

export const Heading3 = ({ children, style, className }) =>
  <h3
    style={Object.assign({
      fontFamily: 'Atlas Grotesk',
      fontWeight: 'bold',
      marginTop: 0,
      marginBottom: 0
    }, style)}
    className={`heading3 ${className}`}
  >
    {children}
    <style jsx>{`
      .heading3 {
        font-size: 2.03vw;
        line-height: 1;    

        @media only screen and (max-width: 768px) {
          font-size: 19px;
          line-height: 22px;
        }  
      }    
    `}</style>
  </h3>

export const Heading4 = ({ children, style, className }) =>
  <h4
    style={Object.assign({
      fontFamily: 'Atlas Grotesk',
      fontWeight: 'bold',
      marginTop: 0,
      marginBottom: 0
    }, style)}
    className={`heading4 ${className}`}
  >
    {children}
    <style jsx>{`
      .heading4 {
        font-size: 1.48vw;
        line-height: 1;
        
        @media only screen and (max-width: 768px) {
          font-size: 19px;
          line-height: 22px;
        }                  
      }
    `}</style>
  </h4>

export const SubHead = ({ children, style, className }) =>
<h4
  style={Object.assign({
    fontFamily: 'Atlas Grotesk',
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 0
  }, style)}
  className={`subhead ${className}`}
>
  {children}
  <style jsx>{`
   .subhead {
    margin-top: 30px !important;
    font-family: 'Atlas Grotesk';
    font-weight: 400;
    font-size: 19px;
    margin-bottom: 0;
    line-height: 1.29px;
    letter-spacing: -0.2px;          
    color: #7F7F7F;
  }
  `}</style>
</h4>

export const WiredType = ({ children, style, className }) =>
<span
  style={Object.assign({
    fontFamily: 'Atlas Grotesk'
  }, style)}
  className={`wiredtype ${className}`}
>
  {children}
  <style jsx>{`
    .wiredtype {
      font-size: 19px;
      line-height: .5;
      color: #333;
      font-variant: small-caps;
      letter-spacing: .5px;       
      @media only screen and (max-width: 500px) {
      line-height:22px;
      font-size: 15px;
      }                
    }
  `}</style>
</span>

export const InquiryText = ({ children, style, className }) =>
<span
  style={Object.assign({
    fontFamily: 'Noe Text'
  }, style)}
  className={`inquiryText ${className}`}
>
  {children}
  <style jsx>{`
      .inquiryText {
        font-style: italic;
        color: #333;
        font-weight: 400;
        display: block;
        font-size: 15px;
        line-height: 22px;
        letter-spacing: -0.1px;
      } 
  `}</style>
</span>

export const QuoteAttribution = ({ children, style, className }) =>
<span
  style={Object.assign({
    fontFamily: 'Institut'
  }, style)}
  className={`quoteAttribution ${className}`}
>
  {children}
  <style jsx>{`
      .quoteAttribution {
        color: #7F7F7F;
        font-weight: 200;
        display: block;
        font-size: 14px;
        line-height: 14px;
        letter-spacing: 2px;
        margin-top: 15px;
        text-align: center;
        
        @media only screen and (max-width: 500px) {
          margin-top: 15px;
        }
      } 
  `}</style>
</span>

export const BioHeader = ({ personName, personTitle, insta }) =>
  <Heading1
    style={{
      paddingBottom: '2.5vw'
    }}
  >
    {personName}
    <br />
    <span
      style={{
        fontFamily: 'Atlas Grotesk',
        display: 'inline-block',
        lineHeight: 1,
        whiteSpace: 'nowrap'
      }}
      className='bioPersonTitle'
    >{personTitle}</span>
    { insta
      ? <a href={`https://www.instagram.com/${insta}`} target='_blank' className='noGreen'><InstagramIcon style={{ marginLeft: '16px' }} /></a>
      : ''
    }
    <style>{`
      .bioPersonTitle {
        font-size: 1.48vw;
      }
      @media only screen and (max-width: 1024px) {
        .bioPersonTitle{
          font-size: 1.95vw;
        }
      }
      @media only screen and (max-width: 500px) {
        .bioPersonTitle{
          font-size: 5.4vw;
        }
      }
      `}</style>
  </Heading1>

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
        text-align: center;
        
        @media only screen and (max-width: 500px) {
          margin-top: 15px;
        }
      }  
    `}</style>
  </figcaption>

export const CardTitle = ({ classAdd, children }) =>
  <h4
    className={`cardTitle ${classAdd}`}
  >{children}
    <style jsx>{`
      .cardTitle {
        position: relative;
        display: block;
        font-family: 'Atlas Grotesk';
        font-size: 19px;
        font-weight: bold;
        letter-spacing: -0.2px;
        line-height: 22px;
        margin: 23px 0 0;

        @media only screen and (max-width: 500px) {
          font-size: 12px;
          letter-spacing: 0.2px;
          line-height: 16px;
          margin: 15px 0 0;
        }  
      }    
    `}</style>
  </h4>

export const CardSubTitle = ({ classAdd, children }) =>
  <h5
    className={`cardSubtitle ${classAdd}`}
  >{children}
    <style jsx>{`
      .cardSubtitle {
        position: relative;
        display: block;
        font-family: 'Atlas Grotesk';
        font-size: 19px;
        font-weight: 500;
        letter-spacing: -0.2px;
        line-height: 22px;
        margin: 0;
        color: rgb(127,127,127);

        @media only screen and (max-width: 500px) {
          font-size: 12px;
          letter-spacing: 0.2px;
          line-height: 16px;
        }  
      }    
    `}</style>
  </h5>

export const CardContent = ({ classAdd, children }) =>
  <p
    className={classAdd}>{children}</p>

export const SideBar = ({ sideBar, isVisible }) =>
  <TrackVisibility once partialVisibility
    style={{
      position: 'absolute',
      top: sideBar.location.includes('top') ? '0px' : 'auto',
      bottom: sideBar.location.includes('bottom') ? '10px' : 'auto',
      left: sideBar.location.includes('left') ? '-135px' : 'auto',
      right: sideBar.location.includes('right') ? '-135px' : 'auto'
    }}
  >
    {({ isVisible }) =>
      <div
        className={`sideBar ${sideBar.location ? sideBar.location : 'left-top'}`}
        style={{
          position: 'relative',
          top: isVisible ? '0px' : '15px',
          width: '116px',
          fontFamily: 'Atlas Grotesk',
          fontWeight: '900',
          color: '#000',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s, top 0.5s',
          transitionDelay: '1.25s'
        }}
      >
        <ConditionalLink linkUrl={sideBar.link} linkTarget='_blank'>
          {sideBar.image ? <img className='sideBar__logo' src={sideBar.image} /> : ''}
          {sideBar.text.length > 0 ? <span className={`sideBar__text${sideBar.isQuote ? ' isQuote' : ''}`}>
            {sideBar.text}
          </span> : ''}
          {sideBar.quoter ? <span style={{ display: 'block', marginTop: '5px' }}>{sideBar.quoter}</span> : ''}
        </ConditionalLink>

        <style jsx>{`
        .sideBar {
          font-size: 12px;
          line-height: 12.8px;
          letter-spacing: -0.1px;
                    
          &__logo {
            display: block;
            width: 100%;
            margin-bottom: 12px;
          }
          &__text {
            position: relative;
            display: block;
            border-top: 7px solid #000;
            padding-top: 9px;


            &.isQuote:before {
              content: '“';
              margin-left: -7px;
            }
            &.isQuote:after {
              content: '”';
              margin-right: -7px;
            }        

            p {
              margin: 0;
            }
          }      
        }    
        `}</style>
      </div>}
  </TrackVisibility>

export const LeftCarving = ({ children }) =>
  <figure className='leftCarving'>
    <div id='leftCarving__border' />
    {children}
    <style jsx>{`
     .leftCarving {
      font-family: Atlas Grotesk;
      font-style: normal;
      font-weight: bold;
      font-size: 1.8vw;
      line-height: 2.1vw;
      padding-top: 11px;
      padding-bottom: 4.5px;
      letter-spacing: -0.25px;
      color: #333;
      float: left;
      max-width: 50%;
      margin: .9vw -14vw .7vw 3vw;
      transform: translateX(-16vw);
      border-top: 5px solid #000;
      }

  `}</style>
  </figure>

export const SidebarQuote = ({ children }) =>
  <div className='sidebarquote'>
    <div className='sidebarquote__content'>
      <div id='sidebarquote__content__border'>
      </div>
      {children}
    </div>
    <style jsx>{`
  .sidebarquote {
    display: inline-block;
    padding: 0 21px 0 0;
    vertical-align: top;
    transform: translateX(5vw) translateY(25vw);


    #sidebarquote__content__border {
      border-top: .5vw solid;
      width: 12.2vw;
      padding-bottom: 1vw;

      @media screen and (min-width: 1622px) {
        border-top: 8px solid;
        width: 197px;
        padding-bottom: 17px;
        }
    }
    .sidebarquote__content {
      margin-top: 7px;
      width: 12.3vw;
      font-family: Atlas Grotesk;
      font-weight: 600;
      font-size: 1.2vw;
      line-height: 1.4vw;
      letter-spacing: .01vw;
      display: inline-block;

      @media screen and (min-width: 1622px) {
        margin-top: 4px;
        width: 205px;
        font-size: 19.5px;
        line-height: 23px;
        }
      }
    }
  `}</style>
  </div>