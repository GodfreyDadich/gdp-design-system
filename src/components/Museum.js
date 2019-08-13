import React, { useState } from 'react'
import SimpleGallery from './SimpleGallery'
import Image from './Image'

const Museum = ({ galleries, columns, thumbAspect }) => {
  const [modalView, setModalView] = useState(false)
  const [imageGallery, setImageGallery] = useState([])
  const colWidth = 100/columns;

  const thumbStyles = {
    display: 'inline-block',
    background: '#ccc',
    margin: '10px',
    width: `calc(${colWidth}% - 20px)`,
    cursor: 'pointer'
  }

  const displayGallery = imageArray => {
    setModalView(true)
    setImageGallery(imageArray)
  }
  const closeGallery = imageArray => {
    setModalView(false)
    setImageGallery([])
  }

  return <div className='museum-container'>
    {
      galleries.map((gallery, index) =>
        <div onClick={e => displayGallery(gallery.images)} style={thumbStyles} key={`galleryThumb-${index}`}>
          <Image
            aspectRatio={thumbAspect || 'sixteen'}
            skipIntro
            imgSource={gallery.thumb.length > 0 ? gallery.thumb : gallery.images[0]}
          />
        </div>
      )
    }
    {
      modalView
        ? <div className='modal'>
          <div className='modalTouchArea' onClick={e => closeGallery()} />
          <SimpleGallery images={imageGallery} aspectRatio='noAspect' />
        </div>
        : ''
    }
    <style jsx>{`
    .museum-container {
      background: rgb(242,242,242);
      // flex-direction: row;
      // flex-wrap: wrap;
      // display:flex;
      padding: 9.5vw 8.9vw;
    }
      .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        // background: rgba(255, 255, 255, 0.9);
        background: rgba(0, 0, 0, 0.9);
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

export default Museum