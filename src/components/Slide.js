import React from 'react'

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: '100%',
    display: 'inline-block'
  }
  return <div className='slide' style={styles} />
}

export default Slide
