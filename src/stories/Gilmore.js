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

export const GilmoreExpandAnimation = () =>
  <div style={{ width: '75%' }} ><GilmoreExpand /> </div>

export const GilmoreExpandAnimation2 = () =>
  <div style={{ width: '75%' }} ><GilmoreExpand2 /> </div>

export const GilmoreMobileAnimation = () =>
  <div style={{ width: '30%', height: '100vh', background: '#000' }} ><GilmoreMobile /> </div>
