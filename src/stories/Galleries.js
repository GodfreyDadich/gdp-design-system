import React from 'react'
import { text, boolean, select, number } from '@storybook/addon-knobs'
import Image from '../components/Image'
import Slider from '../components/Slider'
import RevealCarousel from '../components/RevealCarousel'
import CircularCarousel from '../components/CircularCarousel'
import Museum from '../components/Museum'
import GridGallery from '../components/GridGallery'
import {
  defaultCaption,
  aspectRatiosObj,
  imageGallery2,
  galleries,
  aspectRationsArray,
  countIndicator,
  addDropShadow,
  viewMode,
  isCarousel,
  defaultSubTitle
} from '../utils/defaults'

export default {
  title: 'Design System|Galleries'
}

export const ImageSlider = () =>
  <Slider
    images={imageGallery2}
    aspectRatio={select('Aspect Ratio', aspectRatiosObj, 'sixteen')}
    caption={text('Caption', defaultCaption)}
  />

export const ImageRevealCarousel = () =>
  <RevealCarousel
    images={imageGallery2}
    countIndicator={select('Count Indicator', countIndicator, 'dots')}
    containerAspect={select('Container Aspect Ratio', aspectRatiosObj, 'sixteen')}
    aspectRatio={select('Aspect Ratio', aspectRatiosObj, 'sixteen')}
    caption={text('Caption', defaultCaption)}
  />

export const ImageCircularCarousel = () =>
  <CircularCarousel
    aspectRatio={select('Aspect Ratio', aspectRationsArray, 'standard')}
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

export const ImageMuseumView = () =>
  <Museum
    classAdd=''
    galleries={galleries}
    countIndicator={select('Count Indicator', countIndicator, 'dots')}
    view={select('View Mode', viewMode, 'lightMode')}
    columns={number('Columns', 4)}
    thumbAspect={select('Aspect Ratio', aspectRatiosObj, 'sixteen')}
    containerAspect={select('Container Aspect Ratio', aspectRatiosObj, 'sixteen')}
    caption={text('Caption', defaultCaption)}
  />

export const ImageGridGallery = () =>
  <GridGallery
    altAsset={['https://i.vimeocdn.com/video/737947212.webp?mw=2800&q=70',
      'https://i.vimeocdn.com/video/737973734.webp?mw=2800&q=70',
      'https://i.vimeocdn.com/video/737960529.webp?mw=1400&mh=583&q=70']}
    mobileCarousel={boolean('Carousel on Mobile Device', true)}
    mixedOr={boolean('Various Orientation Images', false)}
    altRatio={select('Alt Aspect Ratio', aspectRatiosObj, '')}
    classAdd=''
    images={imageGallery2}
    thumbs={imageGallery2}
    countIndicator={select('Count Indicator', countIndicator, 'dots')}
    view={select('View Mode', viewMode, 'lightMode')}
    carousel={select('carousel', isCarousel, 'no')}
    columns={number('Columns', 3)}
    headingCaption={text('Heading Caption', defaultSubTitle)}
    caption={text('Caption', defaultCaption)}
    thumbAspect={select('Image Aspect Ratio', aspectRatiosObj, 'sixteen')}
    containerAspect={select('Container Aspect Ratio', aspectRatiosObj, 'sixteen')}
  />
