import React, { useState, useEffect } from 'react'
import SimpleGallery from './SimpleGallery'
import Image from './Image'
import CircularCarousel from './CircularCarousel'
import Modal from './Modal'
import { Caption } from './Type'
import { isMobile } from 'react-device-detect'

const Museum = ({ galleries, columns, thumbAspect, countIndicator, containerAspect, view, caption, classAdd }) => {
  const [modalView, setModalView] = useState(false)
  const [imageGallery, setImageGallery] = useState([])
  const [clickedIndex, setClickedIndex] = useState('')
  const colWidth = 100 / columns;
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    buildArray(galleries)
    setMobile(isMobile)
  }, [])

  const thumbStyles = {
    display: 'inline-block',
    background: '#ccc',
    margin: '10px',
    width: `calc(${colWidth}% - 20px)`,
    cursor: 'pointer'
  }

  const mobileStyles = {
    position: 'relative',
  }

  const buildArray = galleries => {
    let imageGalleries = []
    galleries.map((gallery, index) => {
      imageGalleries.push(gallery.images)
      return imageGalleries
    })
    imageGalleries.concat(imageGalleries)
    setImageGallery(imageGalleries.flat())
  }

  const displayGallery = gallery => {
    setClickedIndex(gallery.startIndex)
    setModalView(true)
  }

  return <div
    style={Object.assign({}, {
      position: 'relative',
      overflow: 'visible'
    })}
    className={`carouselWrapper ${caption && caption.length > 0 ? ' withCaption' : ''}${classAdd ? ` ${classAdd}` : ''}`}>
    {mobile ?
      <CircularCarousel countIndicator={countIndicator} caption={caption} imageAspect={thumbAspect} aspectRatio={containerAspect} >
        {
          galleries.map((gallery, index) =>
            <div style={mobileStyles} key={`galleryThumb-${index}`}>
              <Image
                aspectRatio={thumbAspect || 'sixteen'}
                imgSource={gallery.thumb.length > 0 ? gallery.thumb : gallery.images[0]}
                skipIntro
              />
            </div>
          )
        }
      </CircularCarousel>
      : <div>
        <div className='museum-container'>
        <div className='expand'>
          <span className='expand__icon' style={{backgroundImage: "url('data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2212.5%22%20cy%3D%2212.5%22%20r%3D%2211.9%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22/%3E%3Cpath%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22%20d%3D%22M11.6%209.6h6.8v8.8h-6.8z%22/%3E%3Cpath%20d%3D%22M16.5%209.5v-2h-2m-3%209h-2v-2m5-7h-5v7m5-7v-2h-7v9h2%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22/%3E%3C/svg%3E')"}}></span>
        <span className='expand__copy'>CLICK IMAGE TO VIEW COLLECTION</span></div>
          {
            galleries.map((gallery, index) => {
              return (
                <div
                  className='grid-image'
                  onClick={e => displayGallery(gallery)}
                  style={thumbStyles}
                  key={`galleryThumb-${index}`}>
                  <Image
                    aspectRatio={thumbAspect || 'sixteen'}
                    imgSource={gallery.thumb.length > 0 ? gallery.thumb : gallery.images[0]}
                    skipIntro
                  />
                </div>
              )
            }
            )
          }
          {modalView ?
            <Modal
              view={view}
              modalVisible={modalView}>
              <SimpleGallery images={imageGallery} view={view} index={clickedIndex} />
            </Modal> : ''
          }
        </div>
        {caption && caption.length > 0 ? <Caption classAdd='col-6 skip-3 col-6-tab skip-1-tab'>{caption}</Caption> : ''}
      </div>
    }
    <style>{`
      .expand {
        position: absolute;
        top: 1.25vw;
        left: 1.25vw;
      }
      .expand__copy {
        display: inline-block;
        vertical-align: top;
        margin-top: 2px;
        color: #7F7F7F;
        font-family: Atlas Grotesk;
        letter-spacing: 1.25px;
        font-weight: 400;
        font-size: 10px;
        white-space: nowrap;
      }
      .expand__icon {
        display: inline-block;
        height: 25px;
        width: 25px;
        top: 5px;
        margin-right: 10px;
        background-repeat: no-repeat;
        background-size: 100%;
        margin-left: .1vw;
        position: relative;
        transform: translateY(-50%);
      }
      .museum-container {
        background: rgb(242,242,242);
        padding: 6vw;
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
        z-index: 1000;
      }
      .modalTouchArea {
        cursor: pointer;
        position: absolute;
        top: 30px;
        right: 30px;
        width: 30px;
        height: 30px;
        z-index:9999;
        background-repeat: no-repeat;
      }
    `}</style>
  </div>
}

export default Museum