import React from 'react'
import { storiesOf } from '@storybook/react'
import Pullquotes from '../components/Pullquotes';

storiesOf('Pullquote', module)
  .add('Standard Pullquote', () => 
  <Pullquotes type='pullquote-text' classAdd='testadd' />
  )
  .add('Left Carving', () => 
  <Pullquotes type='left-carving' classAdd='testadd' />
  )
  .add('Quote Block', () => 
  <Pullquotes type='quote-block' classAdd='testadd' />
  )
  .add('Sidebar Quote', () => 
  <Pullquotes type='sidebar-quote' classAdd='testadd' />
  )