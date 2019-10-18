import React from 'react'
import PropTypes from 'prop-types'
// import { aspectRatios } from '../utils/defaults'

export const CountIndicator = ({ imageAspect, currentIndex, children }) =>
  <div
    className='counter-wrapper'
    style={{
      margin: 'auto',
      width: '50%',
      textAlign: 'center',
      fontColor: '#6D6A60',
      fontFamily: 'Atlas Grotesk',
      fontSize: '12.5px',
      marginTop: imageAspect === 'sixteen' ? '40px' : imageAspect === 'noAspect' ? '80px' : imageAspect === 'square' ? '20px' : '30px',
      marginBottom: '16px'
    }}
  >
    <span
      className='left-arrow-wrapper'
      style={{
        top: '50%',
        margin: '0',
        transform: 'translateY(-50%)',
        left: '15%'
      }}>
      <i
        className='left-arrow-head'
        style={{
          border: 'solid #6D6A60',
          borderWidth: '0 1px 1px 0',
          display: 'inline-block',
          padding: '3px',
          transform: 'rotate(135deg)'
        }} />
    </span>
    <span
      className='counter-content'
      style={{
        color: '#6D6A60',
        letterSpacing: '.75px',
        fontWeight: 400
      }}>
      &nbsp;&nbsp;{currentIndex + 1}/{children.length}&nbsp;&nbsp;
    </span>
    <span
      className='right-arrow-wrapper'
      style={{
        top: '50%',
        margin: '0',
        transform: 'translateY(-50%)',
        right: '15%'

      }}>
      <i
        className="right-arrow-head"
        style={{
          border: 'solid #6D6A60',
          borderWidth: '0 1px 1px 0',
          display: 'inline-block',
          padding: '3px',
          transform: 'rotate(-45deg)'
        }} />
    </span>
  </div>

CountIndicator.propTypes = {
  imageAspect: PropTypes.oneOf(['sixteen', 'standard', 'square', 'cropped', 'noAspect']),
  currentIndex: PropTypes.number
}
