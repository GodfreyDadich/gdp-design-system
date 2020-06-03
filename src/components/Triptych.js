import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Triptych = props => {
  const [imagesIndex, setImagesIndex] = useState(0)
  const [activeGroup, setActiveGroup] = useState(props.imgArray[0])
  const [nextGroup, setNextGroup] = useState(props.imgArray[1])
  const [triptychOneState, setTriptychOneState] = useState('active')
  const [triptychTwoState, setTriptychTwoState] = useState('next')

  var loadOne = 0
  var loadTwo = 0

  useEffect(() => {
    const pause = 8000
    let timer
    if (triptychOneState !== 'next visible') {
      timer = setTimeout(() => {
        setImagesIndex(prevIndex => {
          if ((prevIndex + 1) >= props.imgArray.length) {
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
        setNextGroup(props.imgArray[imagesIndex])
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
        setActiveGroup(props.imgArray[imagesIndex])
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
      <div className={`whoWeAre triptychImage`}>
        <img src={activeGroup.image1} onLoad={setOneLoaded(activeGroup.image1)} />
        <div className='linkGroup1'><div className='linkCta'>Who we are</div><a href='#' className='mosaicLink'>Link</a></div>
      </div>

      <div className={`whatWeDo triptychImage`}>
        <img src={activeGroup.image2} onLoad={setOneLoaded(activeGroup.image2)} />
        <div className='linkGroup2'><div className='linkCta'>What we do</div><a href='#' className='mosaicLink'>Link</a></div>
      </div>

      <div className={`whatWeMake triptychImage`}>
        <img src={activeGroup.image3} onLoad={setOneLoaded(activeGroup.image3)} />
        <div className='linkGroup2'><div className='linkCta'>What we make</div><a href='#' className='mosaicLink'>Link</a></div>
      </div>
    </div>
    {/* hidden */}
    <div className={`imageLinkMosaic ${triptychTwoState}`}>

      <div className={`whoWeAre triptychImage`}>
        <img src={nextGroup.image1} onLoad={setTwoLoaded(nextGroup.image1)} />
        <div className='linkGroup1'><div className='linkCta'>Who we are</div><a href='#' className='mosaicLink'>Link</a></div>
      </div>

      <div className={`whatWeDo triptychImage`}>
        <img src={nextGroup.image2} onLoad={setTwoLoaded(nextGroup.image2)} />
        <div className='linkGroup2'><div className='linkCta'>What we do</div><a href='#' className='mosaicLink'>Link</a></div>
      </div>

      <div className={`whatWeMake triptychImage`}>
        <img src={nextGroup.image3} onLoad={setTwoLoaded(nextGroup.image3)} />
        <div className='linkGroup2'><div className='linkCta'>What we make</div><a href='#' className='mosaicLink'>Link</a></div>
      </div>
    </div>
    <style jsx>{`

      .imageLinkMosaicWrapper {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 65%;
      }
      .imageLinkMosaic {
        width: 100%;
        transition: opacity .75s;
        opacity: 1;
        
        &.next {
          z-index: 11;
          .whatWeDo, 
          .whatWeMake, 
          .whoWeAre {
            opacity: 0;
          }

          &.visible {
            .whatWeDo, 
            .whatWeMake, 
            .whoWeAre {
              opacity: 1;
            }
          }
        }
        &.active {
          z-index: 10;
        }
      }
      .linkGroup1 {
        top: 92%;
        left: 40px;
        width: 800px;
        height: auto;
        position: relative;
      }

      .linkGroup2 {
        top: 85%;
        left: 40px;
        width: 800px;
        height: auto;
        position: relative;
      }
      .linkCta {
        display: inline-block;
        font-family: Atlas Grotesk;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 24px;
        letter-spacing: -0.144px;
        color: #FFFFFF;
        margin-right: 32px;
      }
      .mosaicLink {
        display: inline-block;
        font-family: Atlas Grotesk;
        font-style: normal;
        font-weight: 900;
        font-size: 14px;
        line-height: 12px;
        letter-spacing: -0.291667px;
        color: #FFFFFF;
      }
      .column {
        -ms-flex: 50%;
        flex: 50%;
        max-width: 50%;
      }
      .whoWeAre,
      .whatWeDo,
      .whatWeMake {
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
      }

      .whatWeMake {
        transition-delay: .7s;
        top: 50%;
        left: 50%;
        // background-image: url('http://gdp-site.s3.amazonaws.com/attachments/cjp1tat7z0006dqawl3mvh2g3-godfreydadichpartners0533copy-2x.full.jpg');
        height: 50%;
      }
    `}</style>
  </div>
}

Triptych.propTypes = {
  linkText: PropTypes.string,
  linkURL: PropTypes.string,
  aspectRatio: PropTypes.oneOf(['sixteen', 'standard', 'square', 'cropped', 'noAspect']),
  imgArray: PropTypes.array,
}

Triptych.defaultProps = {
  fullBleed: false
}
export default Triptych
