import React from 'react'
import TrackVisibility from 'react-on-screen'
import ConditionalLink from './ConditionalLink'

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

export const Heading1 = ({ children }) =>
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
  className={`heading4 ${className}`}
>
  {children}
  <style jsx>{`
    .heading4 {
      font-size: 22px;
      line-height: 1;
      color: #7F7F7F;
      
      @media only screen and (max-width: 768px) {
        font-size: 19px;
        line-height: 22px;
      }                  
    }
  `}</style>
</h4>

export const WiredType = ({ children, style, className }) =>
<span
  style={Object.assign({
    fontFamily: 'Noe Text'
  }, style)}
  className={`wiredtype ${className}`}
>
  {children}
  <style jsx>{`
    .wiredtype {
      font-size: 22px;
      line-height: 1;
      color: #000;
      font-variant: small-caps;
      letter-spacing: .5px;
      
      @media only screen and (max-width: 768px) {
        font-size: 19px;
        line-height: 22px;
      }                  
    }
  `}</style>
</span>

export const Pullquote = ({ classAdd, children }) =>
  <TrackVisibility once style={{ marginTop: 0 }}>
    {({ isVisible }) =>
      <div
        className={`pullQuote${classAdd ? ' ' + classAdd : ''}`}
        style={{
          marginTop: isVisible ? '89px' : '104px',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s, margin-top 0.5s'
        }}
      >
        {children}
        <style jsx>{`
          .pullQuote {
            font-family: 'Atlas Grotesk';
            font-weight: bold;
            font-size: 2.34vw;
            line-height: 1.06;         
            letter-spacing: -0.3px;
            text-align: center;
            margin-bottom: 89px;

            @media only screen and (max-width: 768px) {
              font-size: 3.34vw;
            }             
          }
        `}</style>
      </div>
    }
  </TrackVisibility>

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
      bottom: sideBar.location.includes('bottom') ? '0px' : 'auto',
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
        <ConditionalLink linkUrl={sideBar.link}>
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
      max-width: 48%;
      margin: .6vw -8vw .7vw 3vw;
      transform: translateX(-10vw);
      border-top: 5px solid #000;
      
      @media screen and (min-width: 1200px) {
        margin: .6vw -6.5vw .1vw 3vw;
        transform: translateX(-8vw);
        border-top: 5.5px solid #000;
        font-size: 22px;
        line-height: 26px;
        }

      @media screen and (max-width: 600px) {
        border-top: 4px solid #000;
        padding-top: 7px;
        }

  }
  `}</style>
  </figure>

export const QuoteBlock = ({ children }) =>
  <div className='quoteBlock' >
    <div className='backgroundBlock' />
    <p className='quoteBlock__content'>
      <div id='quoteBlock__content__border' />
      {children}
    </p>
    <style jsx>{`
    .quoteBlock {
      display: block;
      margin: auto;
      height: 21.4vw;
      padding: 5vw 0;

      .quoteBlock__content {
        width: 45vw;
        font-family: Atlas Grotesk;
        font-weight: 600;
        font-size: 2vw;
        line-height: 2.2vw;
        position: relative;
        transform: translateX(30%) translateY(92%);
        letter-spacing: .02vw;
        display: inline-block;
        bottom: 45%;
      }
    }
    .backgroundBlock {
      width: 27vw;
      height: 21.4vw;
      display: inline-block;
      position: absolute;
      background-color: #F2F2F2;
    }
    #quoteBlock__content__border {
      border-top: solid 6px;
      width: 21vw;
      padding-bottom: 1.4vw;

      @media screen and (min-width: 1200px) {
        border-top: solid 7px;
        }

      @media screen and (max-width: 800px) {
        border-top: solid 4px;
        width: 21vw;
        padding-bottom: 1.4vw;
        }
    }
      `}</style>
  </div>

export const SidebarQuote = ({ children }) =>
  <div className='sidebar'>
    <p className='sidebar__content'>
      <div id='sidebar__content__border'>
      </div>
      {children}
    </p>
    <style jsx>{`
  .sidebar {
    display: inline-block;
    padding: 0 21px 0 0;
    vertical-align: top;

    #sidebar__content__border {
      border-top: .5vw solid;
      width: 12.2vw;
      padding-bottom: 1vw;

      @media screen and (min-width: 1622px) {
        border-top: 8px solid;
        width: 197px;
        padding-bottom: 17px;
        }
    }
    .sidebar__content {
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