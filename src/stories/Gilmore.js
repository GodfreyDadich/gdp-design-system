import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import GilmoreWave from '../components/GilmoreWave'
import GilmoreExpand from '../components/GilmoreExpand'
import GilmoreExpand2 from '../components/GilmoreExpand2'
import GilmoreMobile from '../components/GilmoreMobile'

storiesOf('Gilmore', module)
.add('Gilmore Wave Animation', () =>
  <div style={{width: '100%'}} ><GilmoreWave animated={boolean('animated', false)} /> </div>
)
.add('Gilmore Expand Animation', () =>
  <div style={{width: '75%'}} ><GilmoreExpand /> </div>
)  
.add('Gilmore Expand 2 Animation', () =>
  <div style={{width: '75%'}} ><GilmoreExpand2 /> </div>
)    
.add('Gilmore Mobile', () =>
  <div style={{ width: '30%', height: '100vh', background: '#000' }} ><GilmoreMobile /> </div>
)
