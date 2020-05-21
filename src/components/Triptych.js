import React from 'react'
import Image from './Image'
import CardText from './CardText'
import PropTypes from 'prop-types'

const imagePropsObject = props => {
  const newObj = Object.assign({}, props)
  delete newObj.classAdd
  return newObj
}

const Triptych = props => (
  <div className='imageLinkMosaic'>
    <div className="whoWeAre">
      <div className='linkGroup1'><div className='linkCta'>Who we are</div><a href='#'className='mosaicLink'>Link</a></div>
    </div>

    <div className="whatWeDo">
      <div className='linkGroup2'><div className='linkCta'>What we do</div><a href='#'className='mosaicLink'>Link</a></div>
    </div>

    <div className="whatWeMake">
      <div className='linkGroup2'><div className='linkCta'>What we make</div><a href='#'className='mosaicLink'>Link</a></div>
    </div>
    <style jsx>{`
      .imageLinkMosaic {
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 65%;
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
      }
      .whoWeAre {
        top: 0;
        left: 0;
        background-image: url('http://gdp-site.s3.amazonaws.com/attachments/cjp1tge3u001ddqawfm59db2d-chair-2x-1.full.jpg');
        height: 100%;
      }

      .whatWeDo {
        top: 0;
        left: 50%;
        background-image: url('http://gdp-site.s3.amazonaws.com/attachments/cjoq2zocw00093rawmcegsts4-ny-image.full.jpg');
        height: 50%;
      }

      .whatWeMake {
        top: 50%;
        left: 50%;
        background-image: url('http://gdp-site.s3.amazonaws.com/attachments/cjp1tat7z0006dqawl3mvh2g3-godfreydadichpartners0533copy-2x.full.jpg');
        height: 50%;
      }
    
    `}</style>
  </div>
)

Triptych.propTypes = {
  cardTitle: PropTypes.string,
  cardSubtitle: PropTypes.string,
  cardContent: PropTypes.string,
  linkText: PropTypes.string,
  linkURL: PropTypes.string,
  mediaOrientation: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
  imageTitle: PropTypes.string,
  aspectRatio: PropTypes.oneOf(['sixteen', 'standard', 'square', 'cropped', 'noAspect']),
  fullBleed: PropTypes.bool,
  imgSource: PropTypes.string,
  verticalAlign: PropTypes.oneOf(['top', 'center', 'bottom']),
  horizontalAlign: PropTypes.oneOf(['left', 'center', 'right']),
  widesetImage: PropTypes.bool
}

Triptych.defaultProps = {
  fullBleed: false
}
export default Triptych
