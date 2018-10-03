import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, array, color, select, selectV2, button } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Button, Welcome } from '@storybook/react/demo'
import Select from '../components/Select'
import SelectNative from '../components/SelectNative'
import Image from '../components/Image'
import ImageWithCaption from '../components/ImageWithCaption'
import ImageWithZoom from '../components/ImageWithZoom'
import Slider from '../components/Slider'
import Card from '../components/Card'
import Breadcrumb from '../components/Breadcrumb'
import Chips from '../components/Chips'
import Colors from './Colors' 
import Typography from './Typography' 
import Modal from '../components/Modal'
import PodcastEmbed from '../components/PodcastEmbed'
import InstaEmbed from '../components/InstaEmbed'
import Hero from '../components/Hero'

const imageGallery = [
  'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_5.jpg',
  'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_4.jpg',
  'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_3.jpg',
  'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_2.jpg',
  'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_1.jpg'
]
storiesOf('Styles', module)
  .add(
    'Colors',
    () => <Colors />
  )
  .add(
    'Typeography',
    () => <Typography />
  )

storiesOf('Image', module)
  .add(
    'Image',
    () => <div style={{width:'50%', margin:'50px auto'}}><Image
      imageTitle={text('Image Title/Alt', 'test')}
      aspectRatio={selectV2('Aspect Ratio', { SixteenNine:'sixteen', FourThree:'standard', OneOne:'square', Cropped:'cropped'}, 'square')}
      fullBleed={boolean('fullBleed', false)}
      imgSource='http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg'
      linkUrl={text('url', '')}
      verticalAlign={select('Vertical Align', ['top', 'center', 'bottom'], 'center')}
      horizontalAlign={select('Horizontal Align', ['left', 'center', 'right'], 'center')}
    /></div>
  )
  .add(
    'Image with Caption',
    () => <div style={{width:'50%', margin:'50px auto'}}><ImageWithCaption
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
    /></div>
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
  .add(
    'Image Carousel',
    () => <div style={{ position: 'relative', height: '500px', width: '50%', margin: '50px auto' }}>
      <Slider images={imageGallery} />
      <style>{`
        .backArrow {
          position: absolute;
          left: 0;
        }
        .nextArrow {
          position: absolute;
          right: 0;
        }
      `}</style>
    </div>
  )

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
storiesOf('Select', module)
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
  .add(
    'breadcrumb',
    () => <Breadcrumb
      delimiter={text('Separator', '/')}
      links={breadCrumbData}
    />
  )

const chips = [
  'chip 1',
  'chip 2',  
  'chip 3',
]

const chipRemove = toRemove => {
  chips.splice(toRemove,1)
}

storiesOf('Chips', module)
  .add(
    'chips',
    () => <Chips 
      chips={array('Chips', chips, ',')}
      closeCallback={chipRemove}
    />
  )


const modalClosed = () => {
  console.log('modal closed from parent')
  modalState = false
}

let modalState = true

storiesOf('Modals', module)
  .add('Modal Window', () => 
    <div><p> this is some test content for below the modal</p>{modalState.toString()}
        <Modal
        closeCallback={modalClosed}
        modalVisible={boolean('Toggle modal', modalState)}
        ><Card
        cardTitle='Test Title'
        cardSubTitle='Test subtitle text ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim.'
        cardContent='Test subtitle text ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim.'
        linkText='Test Link'
        linkUrl=''
        mediaOrientation='top'
        imageTitle='test'
        aspectRatio='standard'
        imgSource='http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg'
        horizontalAlign='center'
      /></Modal>
    </div>
  )

storiesOf('Media', module)
  .add('Podcast Embed', () => 
    <PodcastEmbed />
  )
  .add('Instagram Embed', () => 
    <InstaEmbed />
  )

storiesOf('Hero', module)
  .add('Static Image', () =>
    <Hero type='image' />
  )
  .add('Video', () =>
    <Hero type='video' />
  )
  .add('Image with Zoom effect', () =>
    <Hero type='image' withZoom='true' />
  )
