import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Hero from '../components/Hero';
import SideBySide from '../components/SideBySide';
import Layered from '../components/Layered';
import Inset from '../components/Inset';

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
  .add('Side by side', () =>
    <SideBySide 
    title={text('Title', 'Marcus Wohlsen')} 
    subtitle={text('Subtitle', 'A rare peek inside Amazon\'s massive wish- fulfiling machine')} 
    source='https://media.wired.com/photos/593256d2edfced5820d0fb9d/master/w_1025,c_limit/20140514-AMAZON-PHOENIX-0110edit.jpg' />
    )
    .add('Layered', () =>
    <Layered 
    title={text('Title', 'WIRED')} 
    subtitle={text('Subtitle', 'A rare peek inside Amazon\'s massive wish- fulfiling machine')} 
    source='https://media.wired.com/photos/593256d2edfced5820d0fb9d/master/w_1025,c_limit/20140514-AMAZON-PHOENIX-0110edit.jpg' />
    )
    .add('Inset', () =>
    <Inset 
    title={text('Title', 'Marcus Wohlsen')} 
    subtitle={text('Subtitle', 'A rare peek inside Amazon\'s massive wish- fulfiling machine')} 
    source='https://media.wired.com/photos/593256d2edfced5820d0fb9d/master/w_1025,c_limit/20140514-AMAZON-PHOENIX-0110edit.jpg' />
    )