import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Triptych = ({imgArray, linkOne, linkTwo, linkThree, init=true}) => {
  const offset = -7
  const filteredImages = imgArray.filter(img => {
    if (img.hide === 'yes') {
      const currTime = new Date(new Date().getTime() + offset * 3600 * 1000).toISOString().split(':', 2).join(':').split('T')[1].split(':')[0]
      const hideStart = Number(img.hideTimeStart.split(':')[0])
      const hideEnd = Number(img.hideTimeEnd.split(':')[0])
      if (hideEnd > hideStart) {
        return currTime < hideStart || currTime > hideEnd
      } else {
        return currTime >= hideEnd && currTime < hideStart
      }
    } else {
      return img
    }
  })

  const [imagesIndex, setImagesIndex] = useState(2)
  const [activeGroup, setActiveGroup] = useState([])
  const [nextGroup, setNextGroup] = useState([])
  const [triptychOneState, setTriptychOneState] = useState('next')
  const [triptychTwoState, setTriptychTwoState] = useState('next')

  var loadOne = 0
  var loadTwo = 0

  useEffect(() => {
    const pause = 5000
    let timer
    if (triptychOneState !== 'next visible' && init) {
      timer = setTimeout(() => {
        setImagesIndex(prevIndex => {
          if ((prevIndex + 1) >= filteredImages.length) {
            return 0
          } else {
            return prevIndex + 1
          }
        })
        iterateTriptychImg()
      }, pause)
    }
    return () => clearTimeout(timer)
  }, [triptychOneState])

  useEffect(() => {
    if (init) {
      setActiveGroup(filteredImages[0])
      setNextGroup(filteredImages[1])
      setTriptychOneState('active')
    }
  }, [init])

  const iterateTriptychImg = () => {
    if (triptychOneState === 'active') {
      setTwoActive()
    } else if (triptychOneState === 'next') {
      setOneActive()
    }
  }

  const setOneActive = () => {
    if (loadOne === 3) {
      loadOne = 0
      setTriptychOneState('next visible')
      setTriptychTwoState('next')
      setTimeout(() => {
        setTriptychOneState('active')
        // set next images now
        setNextGroup(filteredImages[imagesIndex])
      }, 1500)
    } else {
      setTimeout(() => {
        setOneActive()
      }, 100)
    }
  }

  const setTwoActive = () => {
    if (loadTwo === 3) {
      loadTwo = 0
      setTriptychTwoState('next visible')
      setTriptychOneState('next')
      setTimeout(() => {
        setTriptychTwoState('active')
        setActiveGroup(filteredImages[imagesIndex])
        // set active images now
      }, 1500)
    } else {
      setTimeout(() => {
        setTwoActive()
      }, 100)
    }
  }

  const setOneLoaded = (img) => {
    loadOne++
  }

  const setTwoLoaded = (img) => {
    loadTwo++
  }

  return <div className='imageLinkMosaicWrapper'>
    {/* visible */}
    <div className={`imageLinkMosaic ${triptychOneState}`}>
      <div className={`noGreen whoWeAre triptychImage`} style={{ backgroundImage: `url(${activeGroup.image1})` }}>
        <img src={activeGroup.image1} onLoad={setOneLoaded(activeGroup.image1)} />
      </div>

      <div className={`noGreen whatWeDo triptychImage`} style={{ backgroundImage: `url(${activeGroup.image2})` }}>
        <img src={activeGroup.image2} onLoad={setOneLoaded(activeGroup.image2)} />
      </div>

      <div className={`noGreen whatWeMake triptychImage`} style={{ backgroundImage: `url(${activeGroup.image3})` }}>
        <img src={activeGroup.image3} onLoad={setOneLoaded(activeGroup.image3)} />
      </div>
    </div>
    {/* hidden */}
    <div className={`imageLinkMosaic ${triptychTwoState}`}>

      <div className={`noGreen whoWeAre triptychImage`} style={{ backgroundImage: `url(${nextGroup.image1})` }}>
        <img src={nextGroup.image1} onLoad={setTwoLoaded(nextGroup.image1)} />
      </div>

      <div className={`noGreen whatWeDo triptychImage`} style={{ backgroundImage: `url(${nextGroup.image2})` }}>
        <img src={nextGroup.image2} onLoad={setTwoLoaded(nextGroup.image2)} />
      </div>

      <div className={`noGreen whatWeMake triptychImage`} style={{ backgroundImage: `url(${nextGroup.image3})` }}>
        <img src={nextGroup.image3} onLoad={setTwoLoaded(nextGroup.image3)} />
      </div>
    </div>

    <div className={`imageLinkMosaic links`}>
      <a href={linkOne.url} className={`noGreen whoWeAre triptychImage`}>
        <div className='linkCta'>{linkOne.text}</div>
      </a>

      <a href={linkTwo.url} className={`noGreen whatWeDo triptychImage`}>
        <div className='linkCta'>{linkTwo.text}</div>
      </a>

      <a href={linkThree.url} className={`noGreen whatWeMake triptychImage`}>
        <div className='linkCta'>{linkThree.text}</div>
      </a>
    </div>
    <style jsx>{`

      .imageLinkMosaicWrapper {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 65%;

        @media only screen and (max-width: 500px) {
          height: auto;
          padding-top: 390vw;
        }
      }
      .imageLinkMosaic {
        width: 100%;
        transition: opacity .75s;
        opacity: 1;
        
        &.links {
          z-index: 15;
        }
        &.next {
          z-index: 10;

          .triptychImage {
            opacity: 0;
          }

          &.visible {
            .triptychImage {
              opacity: 1;
            }
          }
        }
        &.active {
          z-index: 11;
        }
      }
      .linkCta {
        position: absolute;
        bottom: 36px;
        left: 36px;
        display: inline-block;
        font-family: Atlas Grotesk;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        letter-spacing: -0.144px;
        color: #FFFFFF;

        text-decoration: none;
        background-image: linear-gradient(to top,#06ff02,#06ff02);
        background-position: 100% 100%;
        background-size: 100% 25%;
        background-repeat: no-repeat;
        transition: background-size .15s ease-out;
        outline: none;
      }
      .triptychImage {
        position: absolute;
        width: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        transition: opacity .75s;
        & > img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
        }

        &:hover {
          .linkCta{
            background-size: 100% 100%;
          }
        }


        @media only screen and (max-width: 500px) {
          width: 100%;
          height: 0 !important;  
          padding-top: 130%;
        }
      }
      .whoWeAre {
        transition-delay: 0;
        top: 0;
        left: 0;
        // background-image: url('http://gdp-site.s3.amazonaws.com/attachments/cjp1tge3u001ddqawfm59db2d-chair-2x-1.full.jpg');
        height: 100%;
        
      }

      .whatWeDo {
        transition-delay: .35s;
        top: 0;
        left: 50%;
        // background-image: url('http://gdp-site.s3.amazonaws.com/attachments/cjoq2zocw00093rawmcegsts4-ny-image.full.jpg');
        height: 50%;

        @media only screen and (max-width: 500px) {
          left: 0;
          top: 130vw;
        }
      }

      .whatWeMake {
        transition-delay: .7s;
        top: 50%;
        left: 50%;
        // background-image: url('http://gdp-site.s3.amazonaws.com/attachments/cjp1tat7z0006dqawl3mvh2g3-godfreydadichpartners0533copy-2x.full.jpg');
        height: 50%;

        @media only screen and (max-width: 500px) {
          left: 0;
          top: 260vw;
        }
      }
    `}</style>
  </div>
}

Triptych.propTypes = {
  linkText: PropTypes.string,
  linkURL: PropTypes.string,
  aspectRatio: PropTypes.oneOf(['sixteen', 'standard', 'square', 'cropped', 'noAspect']),
  imgArray: PropTypes.array
}

Triptych.defaultProps = {
  fullBleed: false
}
export default Triptych
