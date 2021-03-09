import React from 'react'
import { text, boolean, select } from '@storybook/addon-knobs'
import Image from '../components/Image'
import Device from '../components/Device'
import StackedImage from '../components/StackedImage'
import TimeReactiveImage from '../components/TimeReactiveImage'
import ImageDepthMap from 'react-depth-map'

import {
  defaultCaption,
  aspectRatios,
  verticalAligns,
  horizontalAligns,
  sidebarLocations,
  imgSixteenNine,
  imageGallery,
  testData,
  imageGallery2
} from '../utils/defaults'

export default {
  title: 'Design System|Image',
  component: Image
}

export const DefaultImage = () =>
  <Image
    altAsset={imgSixteenNine}
    imageTitle={text('Image Title/Alt', 'test')}
    aspectRatio={select('Aspect Ratio', aspectRatios, 'noAspect')}
    fullBleed={boolean('fullBleed', false)}
    imgSource={imgSixteenNine}
    width={1024}
    height={696}
    linkUrl={text('url', '')}
    verticalAlign={select('Vertical Align', verticalAligns, 'center')}
    horizontalAlign={select('Horizontal Align', horizontalAligns, 'center')}
  />

export const ImageWithCaption = () =>
  <Image
    caption={text('Caption', defaultCaption)}
    imageTitle={text('Image Title/Alt', 'test')}
    aspectRatio={select('Aspect Ratio', aspectRatios, 'noAspect')}
    fullBleed={boolean('fullBleed', false)}
    imgSource={imgSixteenNine}
    width={1024}
    height={696}
    linkUrl={text('url', '')}
    verticalAlign={select('Vertical Align', verticalAligns, 'center')}
    horizontalAlign={select('Horizontal Align', horizontalAligns, 'center')}
  />

export const ImageWithSidebar = () =>
  <Image
    sideBar={{
      text: text('Sidebar Text', 'Smaller length, Sidebar text area.'),
      image: { imgSixteenNine },
      isQuote: true,
      link: text('sidebar link', ''),
      quoter: text('Quoter', '—Scott Dadich'),
      location: select('Sidebar Location', sidebarLocations, 'top-left')
    }}
    imageTitle={text('Image Title/Alt', 'test')}
    aspectRatio={select('Aspect Ratio', aspectRatios, 'noAspect')}
    fullBleed={boolean('fullBleed', false)}
    imgSource={imgSixteenNine}
    width={1024}
    height={696}
    linkUrl={text('url', '')}
    verticalAlign={select('Vertical Align', verticalAligns, 'center')}
    horizontalAlign={select('Horizontal Align', horizontalAligns, 'center')}
  />

// export const ImageZoom = () =>
//   <ImageWithZoom
//     imageTitle={text('Image Title/Alt', 'test')}
//     aspectRatio={select('Aspect Ratio', aspectRatios, 'noAspect')}
//     fullBleed={boolean('Full Bleed', false)}
//     stretchH={boolean('Stretch Horizontal', false)}
//     imgSource={imgSixteenNine}
//     verticalAlign={select('Vertical Align', verticalAligns, 'bottom')}
//     horizontalAlign={select('Horizontal Align', horizontalAligns, 'center')}
//   />

export const DeviceImage = () =>
  <Device classAdd='test' deviceColor={select('Device Color', {
    black: 'black',
    white: 'white'
  }, 'black')}>
    <Image
      imageTitle={text('Image Title/Alt', 'test')}
      aspectRatio='standard'
      skipIntro
      imgSource={imgSixteenNine}
      width={1024}
      height={696}
      verticalAlign={select('Vertical Align', verticalAligns, 'center')}
      horizontalAlign={select('Horizontal Align', horizontalAligns, 'center')}
    />
  </Device>

export const ImageWithHover = () =>
  <Image
    imageTitle={text('Image Title/Alt', 'test')}
    aspectRatio={select('Aspect Ratio', aspectRatios, 'sixteen')}
    fullBleed={boolean('fullBleed', false)}
    imgSource={imgSixteenNine}
    width={1024}
    height={696}
    imgHover={imageGallery2[1]}
    linkUrl={text('url', '')}
    verticalAlign={select('Vertical Align', verticalAligns, 'center')}
    horizontalAlign={select('Horizontal Align', horizontalAligns, 'center')}
  />

export const ImagesStacked = () =>
  <StackedImage
    images={imageGallery}
    aspectRatio={select('Aspect Ratio', aspectRatios, 'sixteen')}
    caption={text('Caption', defaultCaption)}
  />

export const DepthMapOnMouseMove = () =>
  <div style={{ width: '80%', margin: '0 auto' }} >
    <ImageDepthMap
      originalImg={'./ball.jpg'}
      depthImg={'./ball-map.jpg'}
      verticalThreshold={25}
      horizontalThreshold={15}
    />
  </div>

export const DepthMapOnScroll = () =>
  <div style={{ width: '80%', margin: '0 auto' }} >
    <div style={{ height: '1000px', width: '50px', display: 'block' }} />
    <ImageDepthMap
      originalImg={'./ball.jpg'}
      depthImg={'./ball-map.jpg'}
      verticalThreshold={25}
      horizontalThreshold={15}
      respondTo={`scrollOnBoth`}
      reverseMotion={boolean('reverseMotion', false)}
    />
    <div style={{ height: '1000px', width: '50px', display: 'block' }} />
  </div>

export const TimeRelatedImage = () =>
  <div style={{ width: '50%', margin: '50px auto' }}>
    <TimeReactiveImage
      linkText=''
      linkURL=''
      aspectRatio='standard'
      images={testData}
      reverseMotion={boolean('reverseMotion', false)}
    />
  </div>
  