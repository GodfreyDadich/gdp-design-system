import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import GilmoreWave from '../components/GilmoreWave'
import GilmoreExpand from '../components/GilmoreExpand'
import GilmoreExpand2 from '../components/GilmoreExpand2'
import GilmoreMobile from '../components/GilmoreMobile'

export default {
  title: 'Design System|Gilmore',
  component: GilmoreWave
}

export const GilmoreWaveAnimation = () =>
  <div style={{ width: '100%' }} ><GilmoreWave animated={boolean('animated', false)} /> </div>

GilmoreWaveAnimation.story = {
  name: 'Gilmore Wave'
}

export const GilmoreExpandAnimation = () =>
  <div style={{ width: '75%' }} ><GilmoreExpand /> </div>
  GilmoreExpandAnimation.story = {
  name: 'Gilmore Expand'
}

export const GilmoreExpandAnimation2 = () =>
  <div style={{ width: '75%' }} ><GilmoreExpand2 /> </div>
GilmoreExpandAnimation2.story = {
  name: 'Gilmore Expand 2'
}

export const GilmoreMobileAnimation = () =>
  <div style={{ width: '30%', height: '100vh', background: '#000' }} ><GilmoreMobile /> </div>
GilmoreMobileAnimation.story = {
  name: 'Gilmore Mobile'
}