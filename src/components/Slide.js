import React from 'react'

const Slide = ({ image, renderImage, classAdd }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: renderImage ? 'auto' : '100%',
    height: renderImage ? 'auto' : '100%',
    display: 'inline-block',
    verticalAlign: 'top',
    backgroundColor: '#f2f2f2',
    position: 'relative'
  }
  return <div className={`slide ${!!classAdd}`} style={styles}>{ renderImage ? <img src={image} style={{ width: '100%' }} /> : '' }</div>
}

export default Slide
