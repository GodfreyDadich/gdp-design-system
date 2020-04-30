import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import HoverVideo from '../components/HoverVideo'
import Video from '../components/Video'
import Device from '../components/Device'
import CircularCarousel from '../components/CircularCarousel'


const videoEnded = function () {
  // console.log('video over')
}

export default {
  title: 'Design System|Videos',
  component: Video
}

export const VideoEmbed = () =>
  <div style={{ width: '80%', margin: '5% auto' }}>
    <Video
      title=''
      aspectRatio='cropped'
      fullBleed={false}
      vidSource='https://vimeo.com/299777569'
      thumb='https://i.vimeocdn.com/video/737947212_1000.jpg'
    />
  </div>

export const VideoEmbedAutoplay = () =>
  <div style={{ width: '80%', margin: '5% auto' }}>
    <Video
      title=''
      aspectRatio='cropped'
      fullBleed={false}
      autoplay
      volume={0}
      loop
      vidSource='https://vimeo.com/299777569'
      thumb='https://i.vimeocdn.com/video/737702480_1000.jpg'
      onEnd={videoEnded}
    />
  </div>

export const VideoWithCaption = () =>
  <div style={{ width: '80%', margin: '5% auto' }}>
    <Video
      title=''
      aspectRatio='cropped'
      fullBleed={false}
      vidSource='https://vimeo.com/299777569'
      thumb='https://i.vimeocdn.com/video/737702480_1000.jpg'
      caption={text('Caption','Caption tk ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim. Donec vivra ut ibh. Culpa ulmco eiusmod uterif dolor ipsem lorem dol onsecteur mis moguet fila.')}
    />
  </div>

export const VideoWithSidebar = () =>
  <div style={{ width: '70%', margin: '5% auto' }}>
    <Video
      title=''
      aspectRatio='cropped'
      fullBleed={false}
      vidSource='https://vimeo.com/299777569'
      thumb='https://i.vimeocdn.com/video/737702480_1000.jpg'
      sideBar={{ 
        text: text('Sidebar Text','Smaller length, Sidebar text area.'),
        image: 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2NqemtpN3Y4aTAycmJmemF3aG54bmZxeHctd2lyZWQtbG9nby1yZ2IucG5nIiwiZWRpdHMiOnsid2VicCI6eyJxdWFsaXR5Ijo5MH19fQ==',
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

export const DeviceVideo = () =>
  <div style={{ width: '70%', margin: '5% auto' }}>
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

export const FramelessPlayOnHover = () =>
  <div style={{ width: '70%', margin: '5% auto' }}>
    <HoverVideo
      vidSource='https://player.vimeo.com/video/324374859'
      thumb='https://i.vimeocdn.com/video/767777887'
      aspectRatio='custom'
      customPadding='62%'
    />
  </div>

export const VideoCarousel = () =>
  <div style={{ width: '70%', margin: '5% auto' }}>
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
  </div>
