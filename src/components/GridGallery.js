import React, { useState, useEffect } from 'react'
import GalleryView from './GalleryView'
import ResponsiveCarousel from './ResponsiveCarousel'
import Image from './Image'
import { Caption } from './Type'
import { isMobile } from 'react-device-detect'

const GridGallery = ({ thumbs, images, columns, countIndicator, thumbAspect, containerAspect, carousel, mobileCarousel, view, caption, mixedOr, altAsset, headingCaption, classAdd }) => {
  const [modalView, setModalView] = useState(false)
  const [imageIndex, setImageIndex] = useState([])
  const [mobile, setMobile] = useState(false)
  const colWidth = 100 / columns

  useEffect(() => {
    setMobile(isMobile)
    if (modalView === true) {
      document.body.classList.add('modalOpen')
    } else {
      document.body.classList.remove('modalOpen')
    }
  }, [modalView])

  const evenGridStyles = {
    flexGrow: images.length,
    justifyContent: 'space-between',
    margin: '15px',
    width: `calc(${colWidth}% - 50px)`,
    cursor: carousel === 'yes' ? 'pointer' : 'default'
  }

  const mixedOrStyles = {
    margin: '.5vw',
    display: 'inline-block',
    cursor: carousel === 'yes' ? 'pointer' : 'default'
  }

  const mobileStyles = {
    position: 'relative'
  }

  const displayGallery = (index) => {
    setModalView(true)
    setImageIndex(index)
  }
  const closeGallery = () => {
    setModalView(false)
  }

  return <div>
    <div className='col-6 skip-3 col-6-tab skip-1-tab'>{headingCaption ? headingCaption : ''}</div>
    <div
      style={Object.assign({}, {
        position: 'relative',
        overflow: 'visible'
      })}
      className={`${caption && caption.length > 0 ? ' withCaption' : ''}${classAdd ? ` ${classAdd}` : ''}`}>
      {mobile ? mobileCarousel && !altAsset ?
        // case for mobile carousel using the same assets as desktop
        <ResponsiveCarousel countIndicator={countIndicator} caption={caption} imageAspect={thumbAspect} aspectRatio={containerAspect}>
          {
            images.map((image, index) =>
              <div style={mobileStyles} key={`${escape(image)}-${index}`}>
                <Image
                  aspectRatio={thumbAspect}
                  imgSource={image}
                  skipIntro
                  visibilityOverride
                />
              </div>
            )
          }
        </ResponsiveCarousel>
        : mobile && (altAsset.length === 1) ?
        // case for mobile flat using an alternate asset for mobile
        <div className='mobile-flat'>
        <div className='mobile-grid-container'>
          <div style={evenGridStyles}>
            <Image
              aspectRatio={thumbAspect || 'noAspect'}
              imgSource={altAsset}
              skipIntro
            />
          </div>
        </div>
        {caption && caption.length > 0 ? <Caption classAdd='col-6 skip-2 col-6-tab skip-1-tab'>{caption}</Caption> : ''}
      </div>
      :
      // mobile case for multiple alt assets 
        <ResponsiveCarousel countIndicator={countIndicator} caption={caption} imageAspect={thumbAspect} aspectRatio={containerAspect} altRatio={altRatio} >
        {
          altAsset.map((alt, index) =>
            <div style={mobileStyles} key={`${escape(alt)}-${index}`}>
              <Image
                aspectRatio={thumbAspect}
                imgSource={alt}
                skipIntro
                visibilityOverride
              />
            </div>
          )
        }
      </ResponsiveCarousel>
        : mixedOr ?
          // case for desktop grid with mixed orientations
          <div>
            <div className='grid-container'>
              <div className='image-wrapper'>
                {carousel === 'yes' ? <div className='expand'><span className='expand-indicator'>CLICK IMAGE TO EXPAND</span></div> : ''}
                {
                  thumbs.map((image, index) =>
                    <div className={`${carousel === 'yes' ? 'grid-image' : ''}`} onClick={carousel === 'yes' ? e => displayGallery(index) : ''} style={mixedOrStyles} key={`galleryThumb-${index}`}>
                      <img
                        className='moasic-image'
                        src={image}
                      />
                    </div>
                  )
                }
                {
                  modalView
                    ? <div className='modal'>
                      <div className='modalTouchArea' onClick={e => closeGallery()} />
                      <GalleryView images={images} index={imageIndex} aspectRatio='noAspect' view={view} />
                    </div>
                    : ''
                }
              </div>
            </div>
            {caption && caption.length > 0 ? <Caption classAdd='col-6 skip-2 col-6-tab skip-1-tab'>{caption}</Caption> : ''}
          </div>
          :
          // case for desktop grid with aligned columns 
          <div>
            <div className='columns-grid-container'>
              {carousel === 'yes' ? <div className='expand'><span className='expand-indicator'>CLICK IMAGE TO EXPAND</span></div> : ''}
              {
                thumbs.map((image, index) =>
                  <div className={`${carousel === 'yes' ? 'grid-image' : ''}`} onClick={carousel === 'yes' ? e => displayGallery(index) : ''} style={evenGridStyles} key={`galleryThumb-${index}`}>
                    <Image
                      aspectRatio={thumbAspect || 'noAspect'}
                      imgSource={image}
                      skipIntro
                    />
                  </div>
                )
              }
              {
                modalView
                  ? <div className='modal'>
                    <div className='modalTouchArea' onClick={e => closeGallery()} />
                    <GalleryView images={images} index={imageIndex} aspectRatio='sixteen' view={view} />
                  </div>
                  : ''
              }
            </div>
            {caption && caption.length > 0 ? <Caption classAdd='col-6 skip-2 col-6-tab skip-1-tab'>{caption}</Caption> : ''}
          </div>
      }
    </div>
    <style>{`
    .modalOpen {
      overflow: hidden;
    }
    .moasic-image {
      display: inline-block;
      position: relative;
      height: 9.4vw;
      width: auto;
    }
    .image-wrapper {
      margin: auto;
      width: 80vw;
      @media only screen and (max-width: 1025px) {
        width: 60vw;
      }
    }
      .expand {
        font-family: Atlas Grotesk;
        color: #7F7F7F;
        position: absolute;
        top: 1vw;
        left: 1vw;
        font-weight: 400;
        font-size: 10px;
        letter-spacing: 1.25px;
      }
      .expand::before {
        content: url('data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2212.5%22%20cy%3D%2212.5%22%20r%3D%2211.9%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22/%3E%3Cpath%20d%3D%22M18%207v5-5zM13%207h5-5zM7%2018v-5%205zM12%2018H7h5z%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22round%22/%3E%3Cpath%20d%3D%22M7%2018L18%207%207%2018z%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22/%3E%3C/svg%3E');
      }
      .expand-indicator {
        margin-left: 8px;
        position: absolute;
        width: 40vw;
        top: 50%;
        transform: translateY(-50%);
      }
      .grid-container {
        background: rgb(242,242,242);
        display:block;
        position: relative;
        padding: 6vw;
      }
      .columns-grid-container {
        background: rgb(242,242,242);
        flex-direction: row;
        flex-wrap: wrap;
        display:flex;
        padding: 5vw;
      }
      .mobile-grid-container {
        background: rgb(242,242,242);
        flex-direction: row;
        flex-wrap: wrap;
        display:flex;
        padding: 15px;
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
        background: ${view === 'lightMode' ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'};
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
        background-image: ${view === 'lightMode' ? 'url("data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12.5%2023.8a11.3%2011.3%200%201%200%200-22.6%2011.3%2011.3%200%200%200%200%2022.6zm0%201.2a12.5%2012.5%200%201%200%200-25%2012.5%2012.5%200%200%200%200%2025zM8%208l-.4.4v.1h.1v.1h.1v.1H8v.1H8V9h.1V9h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1H9v.1H9v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1v.1h.1v.1h.1l.1.1.1.1.1.1.1.1.1.1.1.1h.1v.1h.1v.1l.1.1h.1v.1h.1v.2h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1h-.1v.1l-.1.1-.1.1h-.1v.1h-.1v.1h-.1v.1H10v.1H10v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H9v.1H9v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H8v.1H8v.1h-.1v.1h-.1v.1h-.1v.1h-.1l.4.5.4.4h.1v-.1h.1v-.1h.1V17h.1L9%2017l.1-.1.1-.1.1-.1.1-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V16h.1V16h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V15h.1V15h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V14h.1V14h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1l.1-.1v-.1h.2v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1h.1v.1h.1v.1h.1v.1l.1.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1l1-.9h-.1v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1V16h-.1L17%2016l-.1-.1-.1-.1-.1-.1h-.1v-.1h-.1v-.1l-.1-.1h-.1v-.1h-.1v-.1h-.1V15H16V15H16v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1V14H15V14H15v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1V13H14V13H14v-.1h-.1v-.1h-.1l-.1-.1-.1-.1v-.2h.1v-.1h.1v-.1l.1-.1h.1V12h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V11h.1V11h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V10h.1V10h.1v-.1h.1l.1-.1v-.1h.1v-.1h.1l.1-.1.1-.1v-.1h.1l.1-.1.1-.1.1-.1.1-.1h.1v-.1l.1-.1h.1v-.1l.1-.1h.1v-.1h.1v-.1l-.8-.9h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1V8h-.1V8h-.1v.1h-.1v.1H16v.1H16v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1l-.1.1V9h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1-.1.1h-.1v.1h-.1v.1h-.1v.1l-.1.1-.1.1-.1.1H14v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H13v.1H13v.1h-.1v.1h-.1v.1h-.1v.1h-.2v-.1l-.1-.1h-.1v-.1h-.1v-.1H12V11H12V11h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1H11V10H11V10h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1H10V9H10V9h-.1v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1-.1-.1-.1-.1-.1-.1L9%208%208.8%208h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1L8%208z%22%20fill%3D%22%23000%22/%3E%3C/svg%3E")' : 'url("data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M12.5%2023.8a11.3%2011.3%200%201%200%200-22.6%2011.3%2011.3%200%200%200%200%2022.6zm0%201.2a12.5%2012.5%200%201%200%200-25%2012.5%2012.5%200%200%200%200%2025zM8%208l-.4.4v.1h.1v.1h.1v.1H8v.1H8V9h.1V9h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1H9v.1H9v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1v.1h.1v.1h.1l.1.1.1.1.1.1.1.1.1.1.1.1h.1v.1h.1v.1l.1.1h.1v.1h.1v.2h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1h-.1v.1l-.1.1-.1.1h-.1v.1h-.1v.1h-.1v.1H10v.1H10v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H9v.1H9v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H8v.1H8v.1h-.1v.1h-.1v.1h-.1v.1h-.1l.4.5.4.4h.1v-.1h.1v-.1h.1V17h.1L9%2017l.1-.1.1-.1.1-.1.1-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V16h.1V16h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V15h.1V15h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V14h.1V14h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1l.1-.1v-.1h.2v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1l.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1.1h.1v.1h.1v.1h.1v.1l.1.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1h.1v.1l1-.9h-.1v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1V16h-.1L17%2016l-.1-.1-.1-.1-.1-.1h-.1v-.1h-.1v-.1l-.1-.1h-.1v-.1h-.1v-.1h-.1V15H16V15H16v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1V14H15V14H15v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1V13H14V13H14v-.1h-.1v-.1h-.1l-.1-.1-.1-.1v-.2h.1v-.1h.1v-.1l.1-.1h.1V12h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V11h.1V11h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1v-.1h.1V10h.1V10h.1v-.1h.1l.1-.1v-.1h.1v-.1h.1l.1-.1.1-.1v-.1h.1l.1-.1.1-.1.1-.1.1-.1h.1v-.1l.1-.1h.1v-.1l.1-.1h.1v-.1h.1v-.1l-.8-.9h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1V8h-.1V8h-.1v.1h-.1v.1H16v.1H16v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1l-.1.1V9h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1-.1.1h-.1v.1h-.1v.1h-.1v.1l-.1.1-.1.1-.1.1H14v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1h-.1v.1H13v.1H13v.1h-.1v.1h-.1v.1h-.1v.1h-.2v-.1l-.1-.1h-.1v-.1h-.1v-.1H12V11H12V11h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1H11V10H11V10h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1H10V9H10V9h-.1v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1-.1-.1-.1-.1-.1-.1L9%208%208.8%208h-.1v-.1h-.1v-.1h-.1v-.1h-.1v-.1L8%208z%22%20fill%3D%22%23fff%22/%3E%3C/svg%3E")'};
      }
    `}</style>
  </div>
}

export default GridGallery