import React from 'react'

const Slide = ({ image, renderImage }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100%',
    display: 'inline-block',
    verticalAlign: 'top',
    backgroundColor: '#f2f2f2'
  }
  return <div className='slide' style={styles}>{ renderImage ? <img src={image} style={{ width: '100%' }}/> : '' }</div>
}

export default Slide
