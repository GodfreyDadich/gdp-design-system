import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select, selectV2 } from '@storybook/addon-knobs';
import Card from '../components/Card'

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
    aspectRatio={selectV2('Aspect Ratio', { SixteenNine:'sixteen', FourThree:'standard', OneOne:'square', Cropped:'cropped'}, 'standard')}
    fullBleed={boolean('fullBleed', false)}
    imgSource='http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg'
    verticalAlign={select('Vertical Align', ['top', 'center', 'bottom'], 'center')}
    horizontalAlign={select('Horizontal Align', ['left', 'center', 'right'], 'center')}    
  /></div>
)