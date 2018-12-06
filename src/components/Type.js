import React from 'react'
import TrackVisibility from 'react-on-screen'

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
      fontSize: (fontSizeHeading3 / 1280) * 100 + 'vw',
      lineHeight: 1,
      marginTop: 0,
      marginBottom: 0
    }, style)}
    className={className}
  >
    {children}
  </h3>

export const Heading4 = ({ children, style, className }) =>
  <h4
    style={Object.assign({
      fontFamily: 'Atlas Grotesk',
      fontWeight: 'bold',
      fontSize: (fontSizeHeading4 / 1280) * 100 + 'vw',
      lineHeight: 1,
      marginTop: 0,
      marginBottom: 0
    }, style)}
    className={className}
  >
    {children}
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
        text-align: center;
      }  
    `}</style>
  </figcaption>

export const CardTitle = ({ classAdd, children }) =>
  <h4
    className={classAdd}
    style={{
      position: 'relative',
      display: 'block',
      fontFamily: 'Atlas Grotesk',
      fontSize: '19px',
      fontWeight: 'bold',
      letterSpacing: '-0.2px',
      lineHeight: '22px',
      margin: '23px 0 0'
    }}
  >{children}</h4>

export const CardSubTitle = ({ classAdd, children }) =>
  <h5
    className={classAdd}
    style={{
      position: 'relative',
      display: 'block',
      fontFamily: 'Atlas Grotesk',
      fontSize: '19px',
      fontWeight: '500',
      letterSpacing: '-0.2px',
      lineHeight: '22px',
      margin: '0px',
      color: 'rgb(127,127,127)'
    }}
  >{children}</h5>

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
          width: '111px',
          fontFamily: 'Atlas Grotesk',
          fontWeight: '900',
          color: '#000',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s, top 0.5s',
          transitionDelay: '.40s'
        }}
      >
        {sideBar.image ? <img className='sideBar__logo' src={sideBar.image} /> : ''}
        {sideBar.text.length > 0 ? <span className={`sideBar__text${sideBar.isQuote ? ' isQuote' : ''}`}>{sideBar.text}</span> : ''}

        <style jsx>{`
        .sideBar {
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
            font-size: 12px;
            line-height: 12.8px;
            letter-spacing: -0.4px;

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
