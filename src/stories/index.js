import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number, array, color, select, selectV2, button } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Button, Welcome } from '@storybook/react/demo'
import Select from '../components/Select'
import SelectNative from '../components/SelectNative'
import Image from '../components/Image'
import ImageWithZoom from '../components/ImageWithZoom'
import Slider from '../components/Slider'
import RevealCarousel from '../components/RevealCarousel'
import CircularCarousel from '../components/CircularCarousel'
import Card from '../components/Card'
import Breadcrumb from '../components/Breadcrumb'
import Chips from '../components/Chips'
import Colors from './Colors' 
import Typography from './Typography' 
import Modal from '../components/Modal'
import PodcastEmbed from '../components/PodcastEmbed'
import InstaEmbed from '../components/InstaEmbed'
import Hero from '../components/Hero'
import HoverVideo from '../components/HoverVideo'
import Video from '../components/Video'
import Device from '../components/Device'
import Loader from '../components/Loader'
import GilmoreWave from '../components/GilmoreWave'
import GilmoreExpand from '../components/GilmoreExpand'
import GilmoreExpand2 from '../components/GilmoreExpand2'
import GilmoreMobile from '../components/GilmoreMobile'
import Toast from '../components/Toast'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

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
    () => <div style={{width:'50%', margin:'110vh auto'}}><Image
      imageTitle={text('Image Title/Alt', 'test')}
      aspectRatio={selectV2('Aspect Ratio', { NoAspect:'noAspect', SixteenNine:'sixteen', FourThree:'standard', OneOne:'square', Cropped:'cropped'}, 'square')}
      fullBleed={boolean('fullBleed', false)}
      imgSource='http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg'
      linkUrl={text('url', '')}
      verticalAlign={select('Vertical Align', ['top', 'center', 'bottom'], 'center')}
      horizontalAlign={select('Horizontal Align', ['left', 'center', 'right'], 'center')}
    /></div>
  )
  .add(
    'Image with Caption',
    () => <div style={{width:'50%', margin:'50px auto'}}><Image
      caption={text('Caption','Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.')}
      imageTitle={text('Image Title/Alt', 'test')}
      aspectRatio={selectV2('Aspect Ratio', { NoAspect:'noAspect', SixteenNine:'sixteen', FourThree:'standard', OneOne:'square', Cropped:'cropped'}, 'noAspect')}
      fullBleed={boolean('fullBleed', false)}
      imgSource='http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg'
      linkUrl={text('url', '')}
      verticalAlign={select('Vertical Align', ['top', 'center', 'bottom'], 'center')}
      horizontalAlign={select('Horizontal Align', ['left', 'center', 'right'], 'center')}
    /></div>
  )
  .add(
    'Image with SideBar',
    () => <div style={{ width: '50%', margin: '50px auto' }}><Image
      sideBar={{ 
        text: text('Sidebar Text','Smaller length, Sidebar text area.'),
        image: 'http://localhost:1111//uploads/attachments/cjnvzldyw002oq5awhgt8svof-2000px-adweek-logo.png',
        isQuote: true,
        // link: 'http://www.google.com',
        quoter: text('Quoter','—Blaine'),
        location: selectV2('Sidebar Location', { 
          TopLeft: 'left-top',
          TopRight: 'right-top',
          BottomLeft: 'left-bottom',
          BottomRight: 'right-bottom'
        }, 'top-left')
      }}
      imageTitle={text('Image Title/Alt', 'test')}
      aspectRatio={selectV2('Aspect Ratio', { NoAspect:'noAspect', SixteenNine:'sixteen', FourThree:'standard', OneOne:'square', Cropped:'cropped' }, 'noAspect')}
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
      aspectRatio={selectV2('Aspect Ratio', { NoAspect:'noAspect', SixteenNine:'sixteen', FourThree:'standard', OneOne:'square', Cropped:'cropped'}, 'noAspect')}
      fullBleed={boolean('Full Bleed', false)}
      stretchH={boolean('Stretch Horizontal', false)}
      imgSource='http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_5.jpg'
      // imgSource='https://d11b794nw2x0wi.cloudfront.net/attachments/cjdkx87gb0023njawm9h9o3v6-eye-level-even-0021-patrick.png'
      verticalAlign={select('Vertical Align', ['top', 'center', 'bottom'], 'bottom')}
      horizontalAlign={select('Horizontal Align', ['left', 'center', 'right'], 'center')}
    /></div>
  )


  .add('Device Image', () =>
    <div style={{ width: '50%', margin: '10px auto' }}>
      <Device classAdd='test' deviceColor={selectV2('Device Color', {
        black: 'black',
        white: 'white'
      }, 'black')}>
        <Image
          imageTitle={text('Image Title/Alt', 'test')}
          aspectRatio='standard'
          skipIntro
          imgSource='http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg'
          verticalAlign={select('Vertical Align', ['top', 'center', 'bottom'], 'center')}
          horizontalAlign={select('Horizontal Align', ['left', 'center', 'right'], 'center')}
        />
      </Device>
    </div>
  )

  .add(
    'Image with Hover',
    () => <div style={{width:'50%', margin:'50px auto'}}><Image
      imageTitle={text('Image Title/Alt', 'test')}
      aspectRatio={selectV2('Aspect Ratio', { NoAspect:'noAspect', SixteenNine:'sixteen', FourThree:'standard', OneOne:'square', Cropped:'cropped'}, 'square')}
      fullBleed={boolean('fullBleed', false)}
      imgSource='http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg'
      imgHover='http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_5.jpg'
      linkUrl={text('url', '')}
      verticalAlign={select('Vertical Align', ['top', 'center', 'bottom'], 'center')}
      horizontalAlign={select('Horizontal Align', ['left', 'center', 'right'], 'center')}
    /></div>
  )  
  .add(
    'Image Slider',
    () => <div style={{ width: '50%', margin: '50px auto' }}>
      <Slider 
        images={imageGallery}
        aspectRatio={selectV2('Aspect Ratio', { NoAspect:'noAspect', SixteenNine:'sixteen', FourThree:'standard', OneOne:'square', Cropped:'cropped'}, 'noAspect')}
        caption={text('Caption','Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.')}
      />
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

  .add(
    'Image Carousel (Reveal)',
    () => <div style={{ width: '75%', margin: '50px auto' }}>
      <RevealCarousel
        images={imageGallery}
        aspectRatio={selectV2('Aspect Ratio', { SixteenNine:'sixteen', FourThree:'standard', OneOne:'square', Cropped:'cropped'}, 'noAspect')}
        caption={text('Caption', 'Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.')}
      />
    </div>
  )
  .add(
    'Image Carousel (Circular)',
    () => <div style={{ width: '75%', margin: '50px auto' }}>
      <CircularCarousel
        aspectRatio='sixteen'
        caption={text('Caption', 'Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.')}
      >
        <Device classAdd='test' deviceColor={selectV2('Device Color', {
          black: 'black',
          white: 'white'
        }, 'black')}>
          <Video
            title=''
            aspectRatio='standard'
            vidSource='https://vimeo.com/299978313'
            skipIntro
            loop
            hoverPlay
            config={{
              vimeo: {
                playerOptions: {
                  background: 1,
                  transparent: 0
                }
              }
            }}
            thumb='https://i.vimeocdn.com/video/737702480_1000.jpg'
          />
        </Device>
        <Device classAdd='test' deviceColor={selectV2('Device Color', {
          black: 'black',
          white: 'white'
        }, 'black')}>
          <Video
            title=''
            aspectRatio='standard'
            vidSource='https://vimeo.com/299978313'
            skipIntro
            loop
            hoverPlay
            config={{
              vimeo: {
                playerOptions: {
                  background: 1,
                  transparent: 0
                }
              }
            }}
            thumb='https://i.vimeocdn.com/video/737702480_1000.jpg'
          />
        </Device>
        <Device classAdd='test' deviceColor={selectV2('Device Color', {
          black: 'black',
          white: 'white'
        }, 'black')}>
          <Video
            title=''
            aspectRatio='standard'
            vidSource='https://vimeo.com/299978313'
            skipIntro
            loop
            hoverPlay
            config={{
              vimeo: {
                playerOptions: {
                  background: 1,
                  transparent: 0
                }
              }
            }}
            thumb='https://i.vimeocdn.com/video/737702480_1000.jpg'
          />
        </Device>
        <Device classAdd='test' deviceColor={selectV2('Device Color', {
          black: 'black',
          white: 'white'
        }, 'black')}>
          <Video
            title=''
            aspectRatio='standard'
            vidSource='https://vimeo.com/299978313'
            skipIntro
            loop
            hoverPlay
            config={{
              vimeo: {
                playerOptions: {
                  background: 1,
                  transparent: 0
                }
              }
            }}
            thumb='https://i.vimeocdn.com/video/737702480_1000.jpg'
          />
        </Device>
      </CircularCarousel>
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
    slug: 'http://google.com'
  },
  {
    title: 'test title 2',
    slug: 'http://google.com'
  },
  {
    title: 'test title 3',
    slug: 'http://google.com'
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
const toastCallback = () => {
  console.log('callback')
}
let modalState = true

storiesOf('Modals', module)
  .add('Modal Window', () => 
    <div><p> this is some test content for below the modal</p>{modalState.toString()}
      <Modal
        closeCallback={modalClosed}
        modalVisible={boolean('Toggle modal', modalState)}>
        <Card
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
        />
      </Modal>
    </div>
  )
  .add('Toast', () =>
    <div>
      <Toast
        active={boolean('Toggle Toast', true)}
        callback={toastCallback}
        header={text('Header', 'Email address copied to clipboard')}
        message={text('Message', 'apply@godfreydadich.com')}
      />
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
    <Hero type='image' source='https://d36aj1cv2i74vd.cloudfront.net/attachments/cjqfi857i1l7ut0pfuca6v3tq-sfvisit2016-0643-1920.jpg' />
  )
  .add('Video', () =>
    <Hero type='video' source='https://vimeo.com/299978304' thumb='https://i.vimeocdn.com/video/738220216_1000.jpg' />
  )
  .add('Image with Zoom effect', () =>
    <Hero type='image' withZoom='true' source='http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg' />
  )

const videoEnded = function () {
  console.log('video over')
}
storiesOf('Video', module)
  .add('Video Element', () => 
    <div style={{ width: '50%', margin: '10px auto', paddingTop: '100vh' }}>
      <Video
        title=''
        aspectRatio='sixteen'
        fullBleed={false}
        autoplay
        volume={0}
        vidSource='https://vimeo.com/299777569'
        thumb='https://i.vimeocdn.com/video/737702480_1000.jpg'
        onEnd={videoEnded}
      />
      <Video
        title=''
        aspectRatio='cropped'
        fullBleed={false}
        vidSource='https://vimeo.com/299756718'
        thumb='https://i.vimeocdn.com/video/737947212_1000.jpg'
      />
    </div>
  )
  .add('Video With Caption', () => 
    <div style={{ width: '50%', margin: '10px auto' }}>
      <Video
        title=''
        aspectRatio='sixteen'
        fullBleed={false}
        vidSource='https://vimeo.com/299543193'
        thumb='https://i.vimeocdn.com/video/737702480_1000.jpg'
        caption={text('Caption','Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.')}
      />
    </div>
  )

  .add('Video With Sidebar', () => 
    <div style={{ width: '50%', margin: '10px auto' }}>
      <Video
        title=''
        aspectRatio='sixteen'
        fullBleed={false}
        vidSource='https://vimeo.com/299543193'
        thumb='https://i.vimeocdn.com/video/737702480_1000.jpg'
        sideBar={{ 
          text: text('Sidebar Text','Smaller length, Sidebar text area.'),
          image: 'http://localhost:1111//uploads/attachments/cjnvzldyw002oq5awhgt8svof-2000px-adweek-logo.png',
          isQuote: true,
          location: selectV2('Sidebar Location', {
            TopLeft: 'left-top',
            TopRight: 'right-top',
            BottomLeft: 'left-bottom',
            BottomRight: 'right-bottom'
          }, 'top-left')
        }}
      />
    </div>
  )

  .add('Device Video', () =>
    <div style={{ width: '50%', margin: '10px auto' }}>
      <Device
        deviceColor={selectV2('Device Color', {
          black: 'black',
          white: 'white'
        }, 'black')}>
        <Video
          title=''
          aspectRatio='standard'
          vidSource='https://vimeo.com/299978313'
          autoplay
          loop
          skipIntro
          config={{
            vimeo: {
              playerOptions: {
                background: 1,
                transparent: 0
              }
            }
          }}
          thumb='https://i.vimeocdn.com/video/737702480_1000.jpg'
        />
      </Device>
      
    </div>
  )

  .add('Hover Video', () =>
    <div style={{ width: '50%', margin: '1000px auto 0' }}>
      <HoverVideo
        vidSource='https://player.vimeo.com/video/324374859'
        thumb='https://i.vimeocdn.com/video/767777887.webp?mw=1800&mh=1121&q=70'
        aspectRatio='custom'
        customPadding='62%'
      />
      <HoverVideo
        title=''
        aspectRatio='cropped'
        fullBleed={false}
        vidSource='https://vimeo.com/299756718'
        thumb='https://i.vimeocdn.com/video/737947212_1000.jpg'
      />
      <HoverVideo
        title=''
        aspectRatio='sixteen'
        fullBleed={false}
        vidSource='https://vimeo.com/299543193'
        thumb='https://i.vimeocdn.com/video/737702480_1000.jpg'
      />
      <HoverVideo
        title=''
        aspectRatio='sixteen'
        fullBleed={false}
        vidSource='https://vimeo.com/299543207'
        thumb='https://i.vimeocdn.com/video/737702396_1000.jpg'
      />
      <HoverVideo
        title=''
        aspectRatio='sixteen'
        fullBleed={false}
        vidSource='https://vimeo.com/299543215'
        thumb='https://i.vimeocdn.com/video/737702269_1000.jpg'
      />
    </div>
  )

storiesOf('Parallax', module)
  .add('Parallax Test', () =>
    <ParallaxProvider>
      <Parallax
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
      >
        <Video
          title=''
          aspectRatio='sixteen'
          fullBleed={false}
          vidSource='https://vimeo.com/299543193'
          thumb='https://i.vimeocdn.com/video/737702480_1000.jpg'
          classAdd='skip-1 col-3'
        />
      </Parallax>

      <Parallax
        offsetYMax={20}
        offsetYMin={-20}
      >
        <Card
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
          classAdd='skip-3 col-3'
        />
      </Parallax>
    </ParallaxProvider>
  )

storiesOf('Loader', module)
  .add('Logo Loader', () =>
    <div style={{width: '100%', height: '50vh' }} ><Loader /> </div>
  )

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
