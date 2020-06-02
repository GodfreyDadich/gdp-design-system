import React from 'react'
import { text, boolean, select, color } from '@storybook/addon-knobs'
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
      classAdd='withBorder-top'
      cardSubtitleClass='homepageSubtitle'
      bgColor={color('bgColor', 'orange')}
      hoverSVG={text('Hover SVG Path', 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2NrM2YwdGJ1MjAzb3kwaW83ZnJtaW9wODctd29ydGgtbG9nby13aGl0ZS5wbmcifQ==')}
      logoSVG={text('Logo SVG Path', 'http://gdp-site.s3.amazonaws.com/attachments/cjxnjkveg00094pawpoffwyik-gdp-911-grid-logos-11.svg')}
    />
  </div>

DefaultCard.story = {
  name: 'Basic Card'
}
