import React from 'react';
import { storiesOf } from '@storybook/react';
import Hero from '../components/Hero'

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