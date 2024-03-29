import React, { useState, useEffect } from 'react'
import SimpleGallery from './SimpleGallery'
import CircularCarousel from './CircularCarousel'
import Modal from './Modal'
import TrackVisibility from 'react-on-screen'
import Image from './Image'
import { Caption } from './Type'
import { isMobile } from 'react-device-detect'
import ConditionalClass from './ConditionalClass'
import PropTypes from 'prop-types'

const GridGallery = ({ thumbs, images, width, height, columns, countIndicator, thumbAspect, containerAspect, carousel, view, caption, removeGrayBackground, removeMobileGrayBackground, mixedOr, altAsset, headingCaption, classAdd }) => {
  const [modalView, setModalView] = useState(false)
  const [imageIndex, setImageIndex] = useState([])
  const [galleryThumbs, setGalleryThumbs] = useState([])
  const [appliedImages, setAppliedImages] = useState(images)
  const [mobile, setMobile] = useState(false)
  const colWidth = 100 / columns
  const rowLength = 5

  useEffect(() => {
    setMobile(isMobile)
    if (altAsset) {
      setAppliedImages(altAsset)
    }
  }, [modalView])

  useEffect(() => {
    setGalleryThumbs(prepData(thumbs))
  }, [])

  const evenGridStyles = {
    flexGrow: images.length,
    justifyContent: 'space-between',
    margin: mobile && removeGrayBackground ? '0' : '15px',
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

  const prepData = (thumbs) => {
    if (mixedOr) {
      const rowCount = Math.ceil(thumbs.length / rowLength)
      let newThumberArray = []
      for ( var i=0; i < rowCount; i++) {
        newThumberArray.push(thumbs.splice(0,rowLength))
      }
      return newThumberArray
    } else {
      return thumbs
    }
  }

  return <div>
    <ConditionalClass pass={headingCaption && headingCaption.length > 0} classAdd='col-6 skip-3 col-6-tab skip-1-tab'>{headingCaption || ''}</ConditionalClass>
    <div
      style={Object.assign({}, {
        position: 'relative',
        overflow: 'visible'
      })}
      className={`${caption && caption.length > 0 ? ' withCaption' : ''}${classAdd ? ` ${classAdd}` : ''}`}>
      {mobile
        ? appliedImages.length > 1
          ? <CircularCarousel
            gridGallery
            removeMobileGrayBackground={removeMobileGrayBackground}
            mobile={mobile}
            countIndicator={countIndicator}
            caption={caption}
            imageAspect={thumbAspect}
            aspectRatio={containerAspect}
          >
            {
              appliedImages.map((image, index) =>
                <div style={mobileStyles} key={`${escape(image)}-${index}`}>
                  <Image
                    width={width}
                    height={height}
                    aspectRatio={thumbAspect}
                    imgSource={image}
                    skipIntro
                    visibilityOverride
                  />
                </div>
              )
            }
          </CircularCarousel>
          : <div className='mobile-flat'>
            <div className='mobile-grid-container' style={{ background: removeGrayBackground ? 'transparent' : 'rgb(242,242,242)', padding: removeGrayBackground ? '0' : '15px'  }}>
              <div style={evenGridStyles}>
                <Image
                  width={width}
                  height={height}
                  aspectRatio={thumbAspect || 'noAspect'}
                  imgSource={appliedImages[0]}
                  skipIntro
                />
              </div>
            </div>
            {caption && caption.length > 0 ? <Caption classAdd={`${removeGrayBackground ? 'col-8 skip-2 col-6-tab skip-1-tab' : 'col-6 skip-2 col-6-tab skip-1-tab' }`}>{caption}</Caption> : ''}
          </div>
        : <div>
          <div className={mixedOr ? 'grid-container' : removeGrayBackground ? 'columns-grid-container-transparent' : 'columns-grid-container'} style={{ background: removeGrayBackground ? 'transparent' : 'rgb(242,242,242)' }}>
            <ConditionalClass pass={mixedOr} classAdd='image-wrapper'>
              {carousel === 'yes' ? <div className={`${removeGrayBackground ? 'expand-transparent' : 'expand'}`}>
                <span className='expand__icon' style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Ccircle%20cx%3D%2212.5%22%20cy%3D%2212.5%22%20r%3D%2211.9%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22/%3E%3Cpath%20d%3D%22M18%207v5-5zM13%207h5-5zM7%2018v-5%205zM12%2018H7h5z%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22round%22/%3E%3Cpath%20d%3D%22M7%2018L18%207%207%2018z%22%20stroke%3D%22%237F7F7F%22%20stroke-width%3D%221.3%22/%3E%3C/svg%3E')" }}></span>
                <span className='expand__copy'>CLICK IMAGE TO EXPAND</span></div>
                : ''}
              {
                mixedOr
                  ? galleryThumbs.map((row, index) =>
                    <div className='mosaic-row' key={`mosaic-row-${index}`}>
                      {
                        row.map((image, imgIndex) =>
                          <TrackVisibility
                            partialVisibility
                            once
                            className={`${carousel === 'yes' ? 'mosaic-image' : ''}`}
                            key={`mosaicThumb-${imgIndex}`} >
                            {({ isVisible }) =>
                              <img
                                className='mosaic-thumb'
                                onClick={e => { if (carousel === 'yes') { displayGallery((index * rowLength) + imgIndex) } }}
                                src={isVisible ? image : ''}
                              />
                            }
                          </TrackVisibility>
                        )
                      }
                    </div>
                  )

                  : galleryThumbs.map((image, index) =>
                    <div
                      className={`${carousel === 'yes' ? 'grid-image' : ''}`}
                      onClick={e => { if (carousel === 'yes') { displayGallery(index) } }}
                      style={evenGridStyles}
                      key={`galleryThumb-${index}`}>
                      <Image
                        aspectRatio={thumbAspect || 'noAspect'}
                        imgSource={image}
                        skipIntro
                        width={width}
                        height={height}
                      />
                    </div>
                  )
              }
              {modalView ?
                <Modal
                  view={view}
                  modalVisible={modalView}>
                  <SimpleGallery images={images} view={view} index={imageIndex} />
                </Modal> : ''
              }
            </ConditionalClass>
          </div>
          {caption && caption.length > 0 ? <Caption classAdd={`${removeGrayBackground ? 'col-8 skip-2 col-6-tab skip-1-tab' : 'col-6 skip-2 col-6-tab skip-0-tab' }`}>{caption}</Caption> : ''}
        </div>
      }
    </div>
    <style>{`
      .expand-transparent {
        position: absolute;
        top: 1.25vw;
        left: 6vw;
      }
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
      .mosaic-row {
        display: flex;
        padding-top: 1.1vw;
      }
      .mosaic-row:first-child {
        padding-top: 0;
      }      
      .mosaic-image {
        height: 9.5vw;
        width: auto;
        margin: 0 0 0 auto;
        opacity: 1;
        transition: .25s;
        cursor: pointer;
      }
      .mosaic-image:hover {
        opacity: 0.8;
      }
      .mosaic-image:first-child {
        margin-left: 0;
      }
      .mosaic-thumb {
        height: 100%;
      }
      .image-wrapper {
        margin: auto;
        width: 100%;
      }
      .grid-container {
        display:block;
        position: relative;
        padding: 6vw;
      }
      .columns-grid-container {
        flex-direction: row;
        flex-wrap: wrap;
        display:flex;
        padding: 5vw;
      }
      .columns-grid-container-transparent {
        flex-direction: row;
        flex-wrap: wrap;
        display:flex;
        padding: 5vw 5vw 0px 5vw;
      }
      .mobile-grid-container {
        flex-direction: row;
        flex-wrap: wrap;
        display:flex;
      }
      .grid-image:hover {
        opacity: .8;
        transition: .25s;
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

GridGallery.propTypes = {
  cardTitle: PropTypes.string,
  cardSubtitle: PropTypes.string,
  cardContent: PropTypes.string,
  linkText: PropTypes.string,
  linkURL: PropTypes.string,
  mediaOrientation: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
  imageTitle: PropTypes.string,
  aspectRatio: PropTypes.oneOf(['sixteen', 'standard', 'square', 'cropped']),
  fullBleed: PropTypes.bool,
  imgSource: PropTypes.string,
  verticalAlign: PropTypes.oneOf(['top', 'center', 'bottom']),
  horizontalAlign: PropTypes.oneOf(['left', 'center', 'right'])
}

GridGallery.defaultProps = {
  aspectRatio: 'standard',
  fullBleed: false
}

export default GridGallery
