import React from 'react'
import { text, boolean, select, number } from '@storybook/addon-knobs'
import Image from '../components/Image'
import Slider from '../components/Slider'
import RevealCarousel from '../components/RevealCarousel'
import CircularCarousel from '../components/CircularCarousel'
import Museum from '../components/Museum'
import GridGallery from '../components/GridGallery'
import DynamicGrid from '../components/DynamicGrid'
import {
  defaultCaption,
  captionsArray,
  imageGallery2,
  imageGallery3,
  galleries,
  aspectRatios,
  countIndicator,
  addDropShadow,
  viewMode,
  isCarousel,
  defaultSubTitle,
  clientLogos
} from '../utils/defaults'

export default {
  title: 'Design System|Galleries',
  component: CircularCarousel
}

export const ImageCircularCarousel = () =>
  <CircularCarousel
    aspectRatio={select('Aspect Ratio', aspectRatios, 'standard')}
    countIndicator={select('Count Indicator', countIndicator, 'dots')}
    caption={text('Caption', defaultCaption)}
    shadow={select('shadow', addDropShadow, 'no')}
  >
    {imageGallery2.map((img, index) => {
      return <Image
        key={`img-${index}`}
        aspectRatio='noAspect'
        skipIntro
        imgSource={img}
        visibilityOverride
      />
    })}
  </CircularCarousel>

export const ImageSlider = () =>
  <Slider
    images={imageGallery2}
    aspectRatio={select('Aspect Ratio', aspectRatios, 'sixteen')}
    caption={text('Caption', defaultCaption)}
    lightMode
  />

export const ImageRevealCarousel = () =>
  <RevealCarousel
    images={imageGallery3}
    countIndicator={select('Count Indicator', countIndicator, 'dots')}
    containerAspect={select('Container Aspect Ratio', aspectRatios, 'sixteen')}
    aspectRatio={select('Aspect Ratio', aspectRatios, 'sixteen')}
    caption={text('Caption', defaultCaption)}
    captionsArray={captionsArray}
  />

export const ImageMuseumView = () =>
  <Museum
    classAdd=''
    galleries={galleries}
    countIndicator={select('Count Indicator', countIndicator, 'dots')}
    view={select('View Mode', viewMode, 'lightMode')}
    columns={number('Columns', 4)}
    thumbAspect={select('Aspect Ratio', aspectRatios, 'sixteen')}
    containerAspect={select('Container Aspect Ratio', aspectRatios, 'sixteen')}
    caption={text('Caption', defaultCaption)}
  />

export const ImageGridGallery = () =>
  <div style={{ paddingTop: '80vh' }}>
    <GridGallery
      altAsset={['https://i.vimeocdn.com/video/737947212.webp?mw=2800&q=70',
        'https://i.vimeocdn.com/video/737973734.webp?mw=2800&q=70',
        'https://i.vimeocdn.com/video/737960529.webp?mw=1400&mh=583&q=70']}
      mobileCarousel={boolean('Carousel on Mobile Device', true)}
      mixedOr={boolean('Various Orientation Images', false)}
      altRatio={select('Alt Aspect Ratio', aspectRatios, '')}
      classAdd=''
      images={imageGallery2}
      thumbs={imageGallery2}
      countIndicator={select('Count Indicator', countIndicator, 'dots')}
      view={select('View Mode', viewMode, 'lightMode')}
      carousel={select('carousel', isCarousel, 'yes')}
      columns={number('Columns', 3)}
      headingCaption={text('Heading Caption', defaultSubTitle)}
      caption={text('Caption', defaultCaption)}
      thumbAspect={select('Image Aspect Ratio', aspectRatios, 'sixteen')}
      containerAspect={select('Container Aspect Ratio', aspectRatios, 'sixteen')}
      removeMobileGrayBackground={boolean('Remove Gray Background on Mobile', true)}
    />
  </div>

export const DynamicLogoGrid = () =>
  <DynamicGrid
    logos={clientLogos}
    classAdd='skip-2 col-8 skip-1-tab col-6-tab'
  />
