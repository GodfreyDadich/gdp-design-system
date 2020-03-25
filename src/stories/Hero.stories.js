import React from 'react'
import { text } from '@storybook/addon-knobs'
import Hero from '../components/Hero'
import SideBySide from '../components/SideBySide'
import Layered from '../components/Layered'
import Inset from '../components/Inset'
import * as animationData from '../lib/arrayHeader.json'
import {
  image1,
  image3,
  video1,
  defaultSubTitle,
  defaultTitle,
  breadCrumbData
} from '../utils/defaults'

export default {
  title: 'Design System|Hero',
  component: Hero
}

export const StaticImage = () => <Hero type='image' source={image1} />

export const WithVideo = () =>
  <Hero
    type='video'
    source={video1}
    thumb={image3}
  />

export const WithLottie = () =>
  <Hero
    type='lottie'
    source={animationData.default}
  />

export const DipticHero = () =>
  <SideBySide
    title={text('Title', defaultTitle)}
    subtitle={text('Subtitle', defaultSubTitle)}
    breadCrumbData={breadCrumbData}
    delimiter={text('Separator', '/')}
    source={image1}
  />

export const LayeredHero = () =>
  <Layered
    title={text('Title', defaultTitle)}
    subtitle={text('Subtitle', defaultSubTitle)}
    breadCrumbData={breadCrumbData}
    delimiter={text('Separator', '/')}
    source={image1}
  />

export const InsetHero = () =>
  <Inset
    source={image1}
  />
