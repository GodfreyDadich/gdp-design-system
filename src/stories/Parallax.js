import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../components/Card'
import Video from '../components/Video'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'

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
