import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, array, color, select, selectV2 } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Button, Welcome } from '@storybook/react/demo'
import Select from '../components/Select'
import SelectNative from '../components/SelectNative'
import Image from '../components/Image'
import ImageWithCaption from '../components/ImageWithCaption'
import ImageWithZoom from '../components/ImageWithZoom'
import Card from '../components/Card'
import Breadcrumb from '../components/Breadcrumb'
import Chips from '../components/Chips'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')} disabled={boolean('Disabled', false)}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Image', module)
  .addDecorator(withKnobs)
  .add(
    'Image',
    () => <Image
      imageTitle={text('Image Title/Alt', 'test')}
      aspectRatio={selectV2('Aspect Ratio', { SixteenNine:'sixteen', FourThree:'standard', OneOne:'square', Cropped:'cropped'}, 'square')}
      fullBleed={boolean('fullBleed', false)}
      imgSource='http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg'
      linkUrl={text('url', '')}
      verticalAlign={select('Vertical Align', ['top', 'center', 'bottom'], 'center')}
      horizontalAlign={select('Horizontal Align', ['left', 'center', 'right'], 'center')}
    />
  )
  .add(
    'Image with Caption',
    () => <ImageWithCaption
      caption={text('Caption','Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.')}
      captionLocation={selectV2('Caption Location', { 
        TopLeft:'topLeft', 
        TopRight:'topRight', 
        LeftTop:'leftTop', 
        LeftBottom:'leftBottom',
        BottomLeft: 'bottomLeft',
        BottomRight: 'bottomRight',
        RightBottom: 'rightBottom',
        RightTop: 'rightTop'
      }, 'topLeft')}
      imageTitle={text('Image Title/Alt', 'test')}
      aspectRatio={selectV2('Aspect Ratio', { SixteenNine:'sixteen', FourThree:'standard', OneOne:'square', Cropped:'cropped'}, 'square')}
      fullBleed={boolean('fullBleed', false)}
      imgSource='http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg'
      linkUrl={text('url', '')}
      verticalAlign={select('Vertical Align', ['top', 'center', 'bottom'], 'center')}
      horizontalAlign={select('Horizontal Align', ['left', 'center', 'right'], 'center')}
    />
  )
  .add(
    'Image with Zoom',
    () => <div style={{width:'50%', margin:'50px auto'}}><ImageWithZoom 
      imageTitle={text('Image Title/Alt', 'test')}
      aspectRatio={selectV2('Aspect Ratio', { SixteenNine:'sixteen', FourThree:'standard', OneOne:'square', Cropped:'cropped' }, 'sixteen')}
      fullBleed={boolean('Full Bleed', false)}
      stretchH={boolean('Stretch Horizontal', false)}
      imgSource='http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_5.jpg'
      // imgSource='https://d11b794nw2x0wi.cloudfront.net/attachments/cjdkx87gb0023njawm9h9o3v6-eye-level-even-0021-patrick.png'
      verticalAlign={select('Vertical Align', ['top', 'center', 'bottom'], 'bottom')}
      horizontalAlign={select('Horizontal Align', ['left', 'center', 'right'], 'center')}
    /></div>
  )

storiesOf('Card', module)
  .addDecorator(withKnobs)
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
storiesOf('Select', module)
  .addDecorator(withKnobs)
  .add(
    'Styled Native',
    () => <SelectNative 
      selectFont={select('Font', ['sans-serif','serif'], 'sans-serif')}
      backgroundColor={color('Background Color', '#fff', 'Colors')}
      placeholder={text('Placeholder', 'Options', 'content')} 
      options={array('Options', ['option1', 'option2', 'option3'], ',', 'content')}
      selectPadding={number('Padding', 5)}
      textColor={color('Text Color', '#000', 'Colors')}
      borderWidth={number('Border Width', 1)}
      borderColor={color('Border Color', '#000', 'Colors')}
      fontSize={number('Font Size', 12)}
      selectIcon={select('Icon', ['triangle','caret','chevron'], 'triangle')}
      disabled={boolean('Disabled', false)}
      borderRadius={number('Rounded Corners', 0, {range: true, min: 0, max: 30, step: 1})}   
    />
  )
  .add(
    'Styled Custom (beta)', 
    () => <Select
      selectFont={select('Font', ['sans-serif','serif'], 'sans-serif')}
      backgroundColor={color('Background Color', '#fff', 'Colors')}
      placeholder={text('Placeholder', 'Options', 'content')} 
      options={array('Options', ['option1', 'option2', 'option3'], ',', 'content')}
      selectPadding={number('Padding', 5)}
      textColor={color('Text Color', '#000', 'Colors')}
      borderWidth={number('Border Width', 1)}
      borderColor={color('Border Color', '#000', 'Colors')}
      fontSize={number('Font Size', 12)}
      selectIcon={select('Icon', ['triangle','caret','chevron'], 'triangle')}
      disabled={boolean('Disabled', false)}
      borderRadius={number('Rounded Corners', 0, {range: true, min: 0, max: 30, step: 1})}
    />
  )

const breadCrumbData = [
  {
    title: 'test title 1',
    link: 'http://google.com'
  },
  {
    title: 'test title 2',
    link: 'http://google.com'
  },  
  {
    title: 'test title 3',
    link: 'http://google.com'
  }
]
storiesOf('Navigation', module)
  .addDecorator(withKnobs)
  .add(
    'breadcrumb',
    () => <Breadcrumb
      delimiter={text('Separator', '/')}
      links={breadCrumbData}
    />
  )

  const chips = [
    {
      title: 'chip 1',
    },
    {
      title: 'chip 2',
    },  
    {
      title: 'chip 3',
    }
  ]

storiesOf('Chips', module)
  .add(
    'chips',
    () => <Chips 
      chips={chips}
    />
  )