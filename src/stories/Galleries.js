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
  aspectRationsArray
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
    countIndicator={select('Count Indicator', { counter: 'counter', dots: 'dots', none: 'none' }, 'dots')}
    containerAspect={select('Container Aspect Ratio', aspectRatiosObj, 'sixteen')}
    aspectRatio={select('Aspect Ratio', aspectRatiosObj, 'sixteen')}
    caption={text('Caption', defaultCaption)}
  />

export const ImageCircularCarousel = () =>
  <CircularCarousel
    aspectRatio={select('Aspect Ratio', aspectRationsArray, 'standard')}
    countIndicator={select('Count Indicator', { counter: 'counter', dots: 'dots', none: 'none' }, 'dots')}
    caption={text('Caption', defaultCaption)}
    shadow={select('shadow', { yes: 'yes', no: 'no' }, 'no')}
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
    countIndicator={select('Count Indicator', { counter: 'counter', dots: 'dots', none: 'none' }, 'dots')}
    view={select('View Mode', { lightMode: 'lightMode', darkMode: 'darkMode' }, 'lightMode')}
    columns={number('Columns', 4)}
    thumbAspect={select('Aspect Ratio', aspectRatiosObj, 'sixteen')}
    containerAspect={select('Container Aspect Ratio', aspectRatiosObj, 'sixteen')}
    caption={text('Caption', defaultCaption)}
  />

export const ImageGridGallery = () =>
  <GridGallery
    mobileCarousel={boolean('mobileCarousel', true)}
    mixedOr={boolean('mixedOr', false)}
    altAsset={['https://i.vimeocdn.com/video/737947212.webp?mw=2800&q=70',
      'https://i.vimeocdn.com/video/737973734.webp?mw=2800&q=70',
      'https://i.vimeocdn.com/video/737960529.webp?mw=1400&mh=583&q=70']}
    altRatio={select('Alt Aspect Ratio', aspectRatiosObj, '')}
    classAdd=''
    headingCaption={text('Heading Caption', 'Lesson 2: Design Matters')}
    images={imageGallery2}
    thumbs={imageGallery2}
    countIndicator={select('Count Indicator', { counter: 'counter', dots: 'dots', none: 'none' }, 'dots')}
    view={select('View Mode', { lightMode: 'lightMode', darkMode: 'darkMode' }, 'lightMode')}
    carousel={select('carousel', { yes: 'yes', no: 'no' }, 'no')}
    columns={number('Columns', 3)}
    thumbAspect={select('Image Aspect Ratio', aspectRatiosObj, 'square')}
    containerAspect={select('Container Aspect Ratio', aspectRatiosObj, 'square')}
    caption={text('Caption', defaultCaption)}
  />
