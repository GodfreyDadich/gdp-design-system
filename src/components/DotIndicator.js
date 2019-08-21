import React from 'react'

export const DotIndicator = props => {
  return (
    <div style={{ margin: 'auto', width: '50%', textAlign: 'center'}}>
      {
        props.children.map((child, i) => (
          <div
            key={`dot${i}`}
            style={{
              borderRadius: '50%',
              display: 'inline-block',
              width: '8px',
              height: '8px',
              boxSizing: 'border-box',
              margin: props.imageAspect === 'sixteen' ? '16px 5px 15px' : props.imageAspect === 'noAspect' ? '10px 5px 10px' : '-7px 5px 13px',
              border: '1px solid #6D6A60',
              backgroundColor: '#6D6A60',
              opacity: props.currentIndex === i ? '1' : '.25'
            }}>
          </div>
        ))
      }
    </div>
  )
}