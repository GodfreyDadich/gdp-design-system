import React from 'react';
import { storiesOf } from '@storybook/react'
import { text, boolean, select } from '@storybook/addon-knobs'
import Card from '../components/Card'

const imgSixteenNine = 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2NqemtxeHhjZjAwaDI5dmI0djRlZGpoOGYtMjMwN2h3LW9wZW5lci1sby1yMi5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlLCJ3aWR0aCI6MTAyNH19fQ=='

storiesOf('Card', module)
  .add(
    'basic card',
    () => <div style={{width:'50%', margin:'50px auto'}}><Card
      cardTitle={text('Card Title', 'Test Title')}
      cardSubTitle={text('Card Subtitle', 'Test subtitle text ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim.')}
      cardContent={text('Card Text', 'Test subtitle text ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim.')}
      linkText={text('Link Text', 'Test Link')}
      linkUrl={text('Link Url', '')}
      mediaOrientation={select('Media Orientation', ['top', 'left', 'right','bottom'], 'top')}
      imageTitle={text('Image Title/Alt', 'test')}
      aspectRatio={select('Aspect Ratio', { SixteenNine:'sixteen', FourThree:'standard', OneOne:'square', Cropped:'cropped'}, 'standard')}
      fullBleed={boolean('fullBleed', false)}
      imgSource={imgSixteenNine}
      verticalAlign={select('Vertical Align', ['top', 'center', 'bottom'], 'center')}
      horizontalAlign={select('Horizontal Align', ['left', 'center', 'right'], 'center')}    
    /></div>
  )
