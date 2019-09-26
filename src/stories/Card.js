import React from 'react'
import { text, boolean, select } from '@storybook/addon-knobs'
import Card from '../components/Card'
import { imgSixteenNine, verticalAligns, horizontalAligns, aspectRatiosObj, contentOrientations } from '../utils/defaults'

export default {
  title: 'Design System|Card',
  component: Card
}

export const DefaultCard = () =>
  <div style={{ width: '50%', margin: '50px auto' }}>
    <Card
      cardTitle={text('Card Title', 'Test Title')}
      cardSubTitle={text('Card Subtitle', 'Test subtitle text ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim.')}
      cardContent={text('Card Text', 'Test subtitle text ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim.')}
      linkText={text('Link Text', 'Test Link')}
      linkUrl={text('Link Url', '')}
      mediaOrientation={select('Media Orientation', contentOrientations, 'top')}
      imageTitle={text('Image Title/Alt', 'test')}
      aspectRatio={select('Aspect Ratio', aspectRatiosObj, 'standard')}
      fullBleed={boolean('fullBleed', false)}
      imgSource={imgSixteenNine}
      verticalAlign={select('Vertical Align', verticalAligns, 'center')}
      horizontalAlign={select('Horizontal Align', horizontalAligns, 'center')}
    />
  </div>

DefaultCard.story = {
  name: 'Basic Card'
}
