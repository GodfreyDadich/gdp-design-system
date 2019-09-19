import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import HoverVideo from '../components/HoverVideo'
import Video from '../components/Video'
import Device from '../components/Device'
import CircularCarousel from '../components/CircularCarousel'


const videoEnded = function () {
  // console.log('video over')
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
          location: select('Sidebar Location', {
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
        deviceColor={select('Device Color', {
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

  .add('Video Carousel', () =>
    <CircularCarousel aspectRatio='sixteen'>
      <Video
        title=''
        aspectRatio='sixteen'
        fullBleed={false}
        volume={0}
        loadActive
        vidSource='https://vimeo.com/299777569'
        thumb='https://i.vimeocdn.com/video/737702480_1000.jpg'
        onEnd={videoEnded}
      />
      <Video
        title=''
        aspectRatio='sixteen'
        fullBleed={false}
        volume={0}
        loadActive
        vidSource='https://vimeo.com/299777569'
        thumb='https://i.vimeocdn.com/video/737702480_1000.jpg'
        onEnd={videoEnded}
      />
      <Video
        title=''
        aspectRatio='sixteen'
        fullBleed={false}
        volume={0}
        loadActive
        vidSource='https://vimeo.com/299777569'
        thumb='https://i.vimeocdn.com/video/737702480_1000.jpg'
        onEnd={videoEnded}
      />
      <Video
        title=''
        aspectRatio='sixteen'
        fullBleed={false}
        volume={0}
        loadActive
        vidSource='https://vimeo.com/299777569'
        thumb='https://i.vimeocdn.com/video/737702480_1000.jpg'
        onEnd={videoEnded}
      />      
    </CircularCarousel>
  )

  .add('Hover Video', () =>
    <div style={{ width: '50%', margin: '1000px auto 0' }}>
      <HoverVideo
        vidSource='https://player.vimeo.com/video/324374859'
        thumb='https://i.vimeocdn.com/video/767777887'
        aspectRatio='custom'
        autoplay
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