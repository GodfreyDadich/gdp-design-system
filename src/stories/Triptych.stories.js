import React from 'react'
import { text, boolean, select } from '@storybook/addon-knobs'
import Triptych from '../components/Triptych'
import {
  defaultTitle,
  defaultSubTitle,
  defaultCopyBlock,
  defaultCta,
  imgSixteenNine,
  verticalAligns,
  horizontalAligns,
  aspectRatios,
  contentOrientations
} from '../utils/defaults'

export default {
  title: 'Design System|Triptych',
  component: Triptych
}

export const DefaultTriptych = () =>
  <div style={{ width: '50%', margin: '50px auto' }}>
    <Triptych/>
  </div>

DefaultTriptych.story = {
  name: 'Basic Triptych'
}
