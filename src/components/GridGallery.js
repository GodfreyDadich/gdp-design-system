import React, { useState } from 'react'
import GalleryView from './GalleryView'
import Image from './Image'

const GridGallery = ({ images, columns, thumbAspect, carousel }) => {
  const [modalView, setModalView] = useState(false)
  const [imageIndex, setImageIndex] = useState([])
  const colWidth = 100 / columns;

  const thumbStyles = {
    flexGrow: images.length,
    justifyContent: 'space-between',
    margin: '10px',
    width: `calc(${colWidth}% - 20px)`,
    cursor: carousel ? 'pointer' : 'default'
  }

  const displayGallery = (index) => {
    setModalView(true)
    setImageIndex(index)
  }
  const closeGallery = () => {
    setModalView(false)
  }

  return <div className='grid-container'>
    {
      images.map((image, index) =>
        <div className={`${carousel ?  'grid-image' : ''}`} onClick={carousel ? e => displayGallery(index) : ''} style={thumbStyles} key={`galleryThumb-${index}`}>
          <Image
            aspectRatio={thumbAspect || 'noAspect'}
            skipIntro
            imgSource={image}
          />
        </div>
      )
    }
    {
      modalView
        ? <div className='modal'>
          <div className='modalTouchArea' onClick={e => closeGallery()} />
          <GalleryView images={images} index={imageIndex} aspectRatio='noAspect' />
        </div>
        : ''
    }
    <style jsx>{`
      .grid-container {
        background: rgb(242,242,242);
        flex-direction: row;
        flex-wrap: wrap;
        display:flex;
        padding: 9.5vw 8.9vw;
      }
      .grid-image:hover {
        filter: brightness(70%);
      }
      .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(255, 255, 255, 0.9);
        z-index: 1000;
      }
      .modalTouchArea {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
}

export default GridGallery