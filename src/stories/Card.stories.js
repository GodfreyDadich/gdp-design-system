import React from 'react'
import { text, boolean, select } from '@storybook/addon-knobs'
import Card from '../components/Card'
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
  title: 'Design System|Card',
  component: Card
}

export const DefaultCard = () =>
  <div style={{ width: '50%', margin: '50px auto' }}>
    <Card
      cardTitle={text('Card Title', defaultTitle)}
      cardSubTitle={text('Card Subtitle', defaultSubTitle)}
      cardContent={text('Card Text', defaultCopyBlock)}
      linkText={text('Link Text', defaultCta)}
      linkUrl={text('Link Url', '')}
      mediaOrientation={select('Media Orientation', contentOrientations, 'top')}
      imageTitle={text('Image Title/Alt', 'test')}
      aspectRatio={select('Aspect Ratio', aspectRatios, 'standard')}
      fullBleed={boolean('fullBleed', false)}
      imgSource={imgSixteenNine}
      verticalAlign={select('Vertical Align', verticalAligns, 'center')}
      horizontalAlign={select('Horizontal Align', horizontalAligns, 'center')}
      horizontalRule={boolean('Horizontal Rule', true)}
    />
  </div>

DefaultCard.story = {
  name: 'Basic Card'
}
