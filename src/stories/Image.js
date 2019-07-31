import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select, selectV2, number } from '@storybook/addon-knobs';
import Image from '../components/Image'
import ImageWithZoom from '../components/ImageWithZoom'
import Slider from '../components/Slider'
import RevealCarousel from '../components/RevealCarousel'
import CircularCarousel from '../components/CircularCarousel'
import Colors from './Colors' 
import Typography from './Typography' 
import Video from '../components/Video'
import Device from '../components/Device'
import Museum from '../components/Museum'

const imageGallery = [
  'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_5.jpg',
  'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_4.jpg',
  'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_3.jpg',
  'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_2.jpg',
  'http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_1.jpg'
]

const imageGallery2 = [
  'https://d36aj1cv2i74vd.cloudfront.net/attachments/cjpde7csq0038ryawid3y9hod-marden-type-texture.jpg',
  'https://d36aj1cv2i74vd.cloudfront.net/attachments/cjpde7vfa003iryawvv3kaofe-earle-type-texture.jpg',
  'https://i.vimeocdn.com/video/736326467.webp?mw=2800&q=70',
  'https://i.vimeocdn.com/video/697798281.webp?mw=2800&q=70',
  'https://d36aj1cv2i74vd.cloudfront.net/filters:format(webp)/attachments/cjnw96bof0040vnaw5ta7z0md-typespread02.jpg',
  'https://d36aj1cv2i74vd.cloudfront.net/filters:format(webp)/attachments/cjnw96om2004avnaw5dsea3ig-ng-2.jpg'
]

const imageGallery3 = [
  'https://i.vimeocdn.com/video/737947212.webp?mw=2800&q=70',
  'https://i.vimeocdn.com/video/737973734.webp?mw=2800&q=70',
  'https://d36aj1cv2i74vd.cloudfront.net/filters:format(webp)/attachments/cjo94liox0034qaaw1zlym28m-img-0037-placeholder.jpg',
  'https://d36aj1cv2i74vd.cloudfront.net/filters:format(webp)/attachments/cjo94oizp003zqaaw35bkwfer-group2.jpg',
  'https://i.vimeocdn.com/video/737960529.webp?mw=1400&mh=583&q=70'
]

const galleries = [
  {
    name: '',
    thumb: '',
    images: imageGallery
  },
  {
    name: '',
    thumb: '',
    images: imageGallery2
  },
  {
    name: '',
    thumb: '',
    images: imageGallery3
  },
  {
    name: '',
    thumb: '',
    images: imageGallery
  },
  {
    name: '',
    thumb: '',
    images: imageGallery2
  },
  {
    name: '',
    thumb: '',
    images: imageGallery3
  },
  {
    name: '',
    thumb: '',
    images: imageGallery
  },
  {
    name: '',
    thumb: '',
    images: imageGallery2
  },
  {
    name: '',
    thumb: '',
    images: imageGallery3
  },
  {
    name: '',
    thumb: '',
    images: imageGallery
  },
  {
    name: '',
    thumb: '',
    images: imageGallery2
  },
  {
    name: '',
    thumb: '',
    images: imageGallery3
  },  
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
  .add(
    'Museum ( Gallery of Galleries )',
      () => <Museum galleries={galleries} columns={number('Columns', 4)} thumbAspect={selectV2('Aspect Ratio', { SixteenNine:'sixteen', FourThree:'standard', OneOne:'square'}, 'sixteen')} />)

