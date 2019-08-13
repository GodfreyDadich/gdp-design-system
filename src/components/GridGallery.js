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
    {carousel ? <div className='expand'><span className='expand-indicator'>Click Image to Expand</span></div> : ''}
    {
      images.map((image, index) =>
        <div className={`${carousel ? 'grid-image' : ''}`} onClick={carousel ? e => displayGallery(index) : ''} style={thumbStyles} key={`galleryThumb-${index}`}>
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
    .expand {
      font-family: Atlas Grotesk;
      color: #a8a9ae;
      position: absolute;
      top: 1.8vw;
      left: 1.8vw;
      font-weight: 400;
      font-size: 10px;
    }
    .expand::before {
      content: url('data:image/svg+xml,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2216%22%20cy%3D%2216%22%20r%3D%2216%22%20fill%3D%22%23787878%22/%3E%3Cpath%20d%3D%22M24.5%208a.5.5%200%200%200-.5-.5h-4.5a.5.5%200%200%200%200%201h4v4a.5.5%200%200%200%201%200V8zm-6.146%206.354l6-6-.708-.708-6%206%20.708.708zM7.5%2024a.5.5%200%200%200%20.5.5h4.5a.5.5%200%200%200%200-1h-4v-4a.5.5%200%200%200-1%200V24zm6.146-6.354l-6%206%20.708.708%206-6-.708-.708z%22%20fill%3D%22%23D8D8D8%22/%3E%3C/svg%3E');
    }
    .expand-indicator {
      margin-left: 8px;
      position: absolute;
      width: 10vw;
      top: 50%;
      transform: translateY(-50%);
    }
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
        background: rgba(255, 255, 255, 1);
        z-index: 1000;
      }
      .modalTouchArea {
        position: absolute;
        top: 30px;
        right: 30px;
        width: 30px;
        height: 30px;
        z-index:9999;
        background-repeat: no-repeat;
        background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12.5%2023.8a11.3%2011.3%200%201%200%200-22.6%2011.3%2011.3%200%200%200%200%2022.6zm0%201.2a12.5%2012.5%200%201%200%200-25%2012.5%2012.5%200%200%200%200%2025zM8%208l-.4.4v.1h.1v.1h.1v.1H8v.1H8V9h.1V9h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1H9v.1H9v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1v.1h.1v.1h.1l.1.1.1.1.1.1.1.1.1.1.1.1h.1v.1h.1v.1l.1.1h.1v.1h.1v.2h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1h-.1v.1l-.1.1-.1.1h-.1v.1h-.1v.1h-.1v.1H10v.1H10v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H9v.1H9v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H8v.1H8v.1h-.1v.1h-.1v.1h-.1v.1h-.1l.4.5.4.4h.1v-.1h.1v-.1h.1V17h.1L9%2017l.1-.1.1-.1.1-.1.1-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V16h.1V16h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V15h.1V15h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V14h.1V14h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1l.1-.1v-.1h.2v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1h.1v.1h.1v.1h.1v.1l.1.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1l1-.9h-.1v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1V16h-.1L17%2016l-.1-.1-.1-.1-.1-.1h-.1v-.1h-.1v-.1l-.1-.1h-.1v-.1h-.1v-.1h-.1V15H16V15H16v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1V14H15V14H15v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1V13H14V13H14v-.1h-.1v-.1h-.1l-.1-.1-.1-.1v-.2h.1v-.1h.1v-.1l.1-.1h.1V12h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V11h.1V11h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V10h.1V10h.1v-.1h.1l.1-.1v-.1h.1v-.1h.1l.1-.1.1-.1v-.1h.1l.1-.1.1-.1.1-.1.1-.1h.1v-.1l.1-.1h.1v-.1l.1-.1h.1v-.1h.1v-.1l-.8-.9h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1V8h-.1V8h-.1v.1h-.1v.1H16v.1H16v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1l-.1.1V9h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1-.1.1h-.1v.1h-.1v.1h-.1v.1l-.1.1-.1.1-.1.1H14v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H13v.1H13v.1h-.1v.1h-.1v.1h-.1v.1h-.2v-.1l-.1-.1h-.1v-.1h-.1v-.1H12V11H12V11h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1H11V10H11V10h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1H10V9H10V9h-.1v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1-.1-.1-.1-.1-.1-.1L9%208%208.8%208h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1L8%208z%22%20fill%3D%22%23000%22/%3E%3C/svg%3E")
      }
    `}</style>
  </div>
}

export default GridGallery