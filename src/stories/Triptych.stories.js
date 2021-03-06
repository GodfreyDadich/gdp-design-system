import React from 'react'
import { text, boolean, select } from '@storybook/addon-knobs'
import Triptych from '../components/Triptych'
import {
  imgArray
} from '../utils/defaults'

export default {
  title: 'Design System|Triptych',
  component: Triptych
}

export const DefaultTriptych = () =>
  <div style={{ width: '75%', margin: '50px auto' }}>
    <Triptych
      linkText=''
      linkURL=''
      aspectRatio='noAspect'
      imgArray={imgArray}
      linkOne={{ text: 'Why we do it', url: '/' }}
      linkTwo={{ text: 'Who we are', url: '/staff' }}
      linkThree={{ text: 'What we make', url: '/work' }}
    />
  </div>

DefaultTriptych.story = {
  name: 'Basic Triptych'
}
