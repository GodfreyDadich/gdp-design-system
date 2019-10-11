import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, select, number } from '@storybook/addon-knobs'
import Image from '../components/Image'
import ImageWithZoom from '../components/ImageWithZoom'
import Slider from '../components/Slider'
import RevealCarousel from '../components/RevealCarousel'
import CircularCarousel from '../components/CircularCarousel'
import Colors from './Colors'
import Icons from './Icons'
import Typography from './Typography'
import Device from '../components/Device'
import Museum from '../components/Museum'
import GridGallery from '../components/GridGallery'
import StackedImage from '../components/StackedImage';

const imageGallery = [
  'https://upload.wikimedia.org/wikipedia/commons/c/c9/Moon.jpg',
  'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx5dXVzeTAxc3owaW5qbWc0ZXl3enItMjQwOGZwMS1vcGVuZXItbG8tcjIuanBnIiwiZWRpdHMiOnsid2VicCI6eyJxdWFsaXR5Ijo5MH0sInJlc2l6ZSI6eyJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWUsIndpZHRoIjoxMDI0fX19',
]

const imageGallery2 = [ 
  'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2NqemtxeHhjZjAwaDI5dmI0djRlZGpoOGYtMjMwN2h3LW9wZW5lci1sby1yMi5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlLCJ3aWR0aCI6MTAyNH19fQ==',
  'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx3eHoyNzAwNXkwaXA3ZnQ0cTcyeDctMjQxMmZmLWFtZXJpY2EtbG8tcjMucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZSwid2lkdGgiOjEwMjR9fX0=',
  'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx3eHozdDAwNWQwaXFlcnJ3NWg2cDgtMjIwOWZmLW1hbmdvLWxvLXIyNS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlLCJ3aWR0aCI6MTAyNH19fQ==',
  'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx3eHoxdDAwNWMwaXFlZ243bWwxZWotMjMwNWZmLXdhdGNoLWxvLXIyMy5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlLCJ3aWR0aCI6MTAyNH19fQ==',
  'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx3em01ZjAwNjAwaXFlMXJoM213Y2MtMjMwMmZmLW5hZGVsbGEtbG8tcjIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZSwid2lkdGgiOjEwMjR9fX0=',
  'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx3em04eDAxZWowaW5qNnlyd3hpdWstMjMwMmZmLW5hZGVsbGEtbG8tcjIyLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWUsIndpZHRoIjoxMDI0fX19',
  'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx3em1haDAxZWswaW5qc3lla2cxamwtMjMxMnN3LWpqaW50ZXJ2aWV3LWxvLXIyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWUsIndpZHRoIjoxMDI0fX19',
  // 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx3em1hYzAwMGIwaW44N2ZoanFseDItMjIwNmZmLWR3YXZlLWxvLXIyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWUsIndpZHRoIjoxMDI0fX19',
  // 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx5dXVsYzAxc3cwaW5qd2UybnU5eWctMjUwMWZmLWFicmFoYW1mcmFuY2stbG8tcjIuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZSwid2lkdGgiOjEwMjR9fX0=',
  // 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx5eWcxNzAwMG4waW5qbW13a3ZkbnctMjQwMXNwLXN1cnZpdmFscGFja2FnZW9wZW5lci1yMS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlLCJ3aWR0aCI6MTAyNH19fQ==',
  // 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx5dXU3ZTAwbnYwaXA3anJiOXR3d3MtY2xvc2UtZW5jb3VudGVycy1qZWZmLW5pY2hvbHMtMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlLCJ3aWR0aCI6MTAyNH19fQ==',
  // 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx6MGJnajAwMHkwaXA3ZHU3Mm9wbTItMjIwNmZmLW9jdWx1c3JpZnQtbG8tcjIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZSwid2lkdGgiOjEwMjR9fX0=',
  // 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx5eWdjNTAwMHIwaW5qejk3dXBuOW0tMjMxMGRwLW9wZW5lci1sby1yMi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlLCJ3aWR0aCI6MTAyNH19fQ=='
]

const imageGallery3 = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1600px-Sunflower_from_Silesia2.jpg',
  'https://i.vimeocdn.com/video/737947212.webp?mw=2800&q=70',
]

const galleries = [
  {
    name: '',
    thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzeyr8002w0inj5mvflwjl-01-gxxl-58826efa-d964-4c67-bfff-66d80a771fd0.full.jpg',
    images: imageGallery,
    startIndex: 0
  },
  {
    name: '',
    thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzgbp6003g0ip74bkqmpco-01-final-150331-white-v12rgb-blackbg-jmo-w-eh1-1800x1047.full.jpg',
    images: imageGallery2,
    startIndex: 2
  },
  {
    name: '',
    thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzu2z4008m0injiij0kd20-01-1016widpnike002.full.jpg',
    images: imageGallery3,
    startIndex: 4
  },
  {
    name: '',
    thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzvmwp00as0injrv5vtwcu-01-1316wicvcove001.full.jpg',
    images: imageGallery,
    startIndex: 6
  },
  {
    name: '',
    thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzfcno003q0injf7jh699h-01-1214wi1dnola001.full.jpg',
    images: imageGallery2,
    startIndex: 8
  },
  {
    name: '',
    thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzqfs4005q0inj3sn07a7l-01-0615wiffilmf035.full.jpg',
    images: imageGallery3,
    startIndex: 10
  },
  {
    name: '',
    thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzul8t009e0injparsz6s7-01-0616wiaiffgo001.full.jpg',
    images: imageGallery,
    startIndex: 12
  },
  {
    name: '',
    thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzw2av005s0ipgsubr4uuf-01-0916wiffbees004.full.jpg',
    images: imageGallery2,
    startIndex: 14
  },
  {
    name: '',
    thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzfv3i00170ip7dxa6mfyo-01-caitoppermann-2017-01-24-wired-nike-kenya-dsc0397.full.jpg',
    images: imageGallery3,
    startIndex: 16
  },
  {
    name: '',
    thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzsmzc006m0inj8c09q04j-0516wiglessa001.full.jpg',
    images: imageGallery,
    startIndex: 18
  },
  {
    name: '',
    thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzv3e500a90inj7pcvmrbu-01-0914wiffmang008.full.jpg',
    images: imageGallery2,
    startIndex: 20
  },
  {
    name: '',
    thumb: 'http://gdp-site.s3.amazonaws.com/attachments/cjzlzwndg00cs0injhf78powl-01-0314wimpmusi003.full.jpg',
    images: imageGallery3,
    startIndex: 22
  }
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
  .add(
    'Icons',
    () => <Icons />
  )

storiesOf('Image', module)
  .add(
    'Image',
    () => <div style={{ width: '50%', margin: '110vh auto' }}><Image
      altAsset={'http://gdp-site.s3.amazonaws.com/attachments/cjzsrvkja0d010in1g67mqizp-platon-diptych-mobile.full.png'}
      imageTitle={text('Image Title/Alt', 'test')}
      aspectRatio={select('Aspect Ratio', { NoAspect: 'noAspect', SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'square')}
      fullBleed={boolean('fullBleed', false)}
      imgSource='http://gdp-site.s3.amazonaws.com/attachments/cjzsrvki60djv0itgcr7ccd8t-platon-diptych.full.jpg'
      linkUrl={text('url', '')}
      verticalAlign={select('Vertical Align', ['top', 'center', 'bottom'], 'center')}
      horizontalAlign={select('Horizontal Align', ['left', 'center', 'right'], 'center')}
    /></div>
  )
  .add(
    'Image with Caption',
    () => <div style={{ width: '50%', margin: '50px auto' }}><Image
      caption={text('Caption', 'Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.')}
      imageTitle={text('Image Title/Alt', 'test')}
      aspectRatio={select('Aspect Ratio', { NoAspect: 'noAspect', SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'noAspect')}
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
        text: text('Sidebar Text', 'Smaller length, Sidebar text area.'),
        image: 'http://localhost:1111//uploads/attachments/cjnvzldyw002oq5awhgt8svof-2000px-adweek-logo.png',
        isQuote: true,
        link: text('sidebar link', ''),
        quoter: text('Quoter', '—Blaine'),
        location: select('Sidebar Location', {
          TopLeft: 'left-top',
          TopRight: 'right-top',
          BottomLeft: 'left-bottom',
          BottomRight: 'right-bottom'
        }, 'top-left')
      }}
      imageTitle={text('Image Title/Alt', 'test')}
      aspectRatio={select('Aspect Ratio', { NoAspect: 'noAspect', SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'noAspect')}
      fullBleed={boolean('fullBleed', false)}
      imgSource='http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg'
      linkUrl={text('url', '')}
      verticalAlign={select('Vertical Align', ['top', 'center', 'bottom'], 'center')}
      horizontalAlign={select('Horizontal Align', ['left', 'center', 'right'], 'center')}
    /></div>
  )
  .add(
    'Image with Zoom',
    () => <div style={{ width: '50%', margin: '50px auto' }}>
      <ImageWithZoom
        imageTitle={text('Image Title/Alt', 'test')}
        aspectRatio={select('Aspect Ratio', { NoAspect: 'noAspect', SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'noAspect')}
        fullBleed={boolean('Full Bleed', false)}
        stretchH={boolean('Stretch Horizontal', false)}
        imgSource='http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg'
        // imgSource='http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_5.jpg'
        // imgSource='https://d11b794nw2x0wi.cloudfront.net/attachments/cjdkx87gb0023njawm9h9o3v6-eye-level-even-0021-patrick.png'
        verticalAlign={select('Vertical Align', ['top', 'center', 'bottom'], 'bottom')}
        horizontalAlign={select('Horizontal Align', ['left', 'center', 'right'], 'center')}
      /></div>
  )

  .add('Device Image', () =>
    <div style={{ width: '50%', margin: '10px auto' }}>
      <Device classAdd='test' deviceColor={select('Device Color', {
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
    () => <div style={{ width: '50%', margin: '50px auto' }}><Image
      imageTitle={text('Image Title/Alt', 'test')}
      aspectRatio={select('Aspect Ratio', { NoAspect: 'noAspect', SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'square')}
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
        aspectRatio={select('Aspect Ratio', { NoAspect: 'noAspect', SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'sixteen')}
        caption={text('Caption', 'Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.')}
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
        images={imageGallery2}
        countIndicator={select('Count Indicator', { counter: 'counter', dots: 'dots', none: 'none' }, 'dots')}
        containerAspect={select('Container Aspect Ratio', { SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', NoAspect: 'noAspect' }, 'sixteen')}
        aspectRatio={select('Aspect Ratio', { SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'sixteen')}
        caption={text('Caption', 'Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.')}
      />
    </div>
  )
  .add(
    'Image Carousel (Circular)',
    () => <div style={{ width: '75%', margin: '50px auto' }}>
      <CircularCarousel
        aspectRatio={select('Aspect Ratio', { SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped', NoAspect: 'noAspect' }, 'standard')}
        countIndicator={select('Count Indicator', { counter: 'counter', dots: 'dots', none: 'none' }, 'dots')}
        caption={text('Caption', 'Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.')}
        shadow={select('shadow', { yes: 'yes', no: 'no' }, 'no')}
      >
        {imageGallery2.map((img, index) => {
          return <Image
            key={`img-${index}`}
            aspectRatio='noAspect'
            skipIntro
            imgSource={img}
            visibilityOverride
          />
        })}
      </CircularCarousel>
    </div>
  )
  .add(
    'Museum (Gallery of Galleries)',
    () => <Museum
      classAdd=''
      galleries={galleries}
      countIndicator={select('Count Indicator', { counter: 'counter', dots: 'dots', none: 'none' }, 'dots')}
      view={select('View Mode', { lightMode: 'lightMode', darkMode: 'darkMode' }, 'lightMode')}
      columns={number('Columns', 4)}
      thumbAspect={select('Aspect Ratio', { SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square' }, 'sixteen')}
      containerAspect={select('Container Aspect Ratio', { SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', NoAspect: 'noAspect' }, 'sixteen')}
      caption={text('Caption', 'Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.')}
    />)

  .add(
    'Grid Gallery (Mosaic)',
    () => <GridGallery
      mobileCarousel={boolean('mobileCarousel', true)}
      mixedOr={boolean('mixedOr', false)}
      altAsset={['https://i.vimeocdn.com/video/737947212.webp?mw=2800&q=70',
        'https://i.vimeocdn.com/video/737973734.webp?mw=2800&q=70',
        'https://i.vimeocdn.com/video/737960529.webp?mw=1400&mh=583&q=70']}
      altRatio={select('Alt Aspect Ratio', { SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', NoAspect: 'noAspect', None: '' }, '')}
      classAdd=''
      headingCaption='Lesson 2: Design Matters'
      images={imageGallery2}
      thumbs={imageGallery2}
      countIndicator={select('Count Indicator', { counter: 'counter', dots: 'dots', none: 'none' }, 'dots')}
      view={select('View Mode', { lightMode: 'lightMode', darkMode: 'darkMode' }, 'lightMode')}
      carousel={select('carousel', { yes: 'yes', no: 'no' }, 'no')}
      columns={number('Columns', 3)}
      thumbAspect={select('Image Aspect Ratio', { SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', NoAspect: 'noAspect' }, 'square')}
      containerAspect={select('Container Aspect Ratio', { SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', NoAspect: 'noAspect' }, 'square')}
      caption={text('Caption', 'Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.')}
    />)

  .add(
    'Images Stacked',
    () => <div style={{ width: '75%' }}>
      <StackedImage
        images={imageGallery}
        aspectRatio={select('Aspect Ratio', { SixteenNine: 'sixteen', FourThree: 'standard', OneOne: 'square', Cropped: 'cropped' }, 'sixteen')}
        caption={text('Caption', 'Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.')}
      />
    </div>
  )