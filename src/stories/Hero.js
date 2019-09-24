import React from 'react'
import { text } from '@storybook/addon-knobs'
import Hero from '../components/Hero'
import SideBySide from '../components/SideBySide'
import Layered from '../components/Layered'
import Inset from '../components/Inset'

const imgSixteenNine = 'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2NqemtxeHhjZjAwaDI5dmI0djRlZGpoOGYtMjMwN2h3LW9wZW5lci1sby1yMi5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlLCJ3aWR0aCI6MTAyNH19fQ=='

const breadCrumbData = [
  {
    title: 'home',
    slug: 'http://google.com'
  },
  {
    title: 'work',
    slug: 'http://google.com'
  },
  {
    title: 'wired',
    slug: 'http://google.com'
  }
]

export default {
  title: 'Design System|Hero',
  component: Hero
}

export const StaticImage = () => <Hero type='image' source={imgSixteenNine} />

export const WithVideo = () =>
  <Hero
    type='video'
    source='https://vimeo.com/299978304'
    thumb='https://i.vimeocdn.com/video/738220216_1000.jpg'
  />

export const DipticHero = () =>
  <SideBySide
    title={text('Title', 'Marcus Wohlsen')}
    subtitle={text('Subtitle', 'A rare peek inside Amazon\'s massive wish- fulfiling machine')}
    breadCrumbData={breadCrumbData}
    delimiter={text('Separator', '/')}
    source='https://media.wired.com/photos/593256d2edfced5820d0fb9d/master/w_1025,c_limit/20140514-AMAZON-PHOENIX-0110edit.jpg'
  />

export const LayeredHero = () =>
  <Layered
    title={text('Title', 'WIRED')}
    subtitle={text('Subtitle', 'A rare peek inside Amazon\'s massive wish- fulfiling machine')}
    breadCrumbData={breadCrumbData}
    delimiter={text('Separator', '/')}
    source='https://media.wired.com/photos/593256d2edfced5820d0fb9d/master/w_1025,c_limit/20140514-AMAZON-PHOENIX-0110edit.jpg'
  />

export const InsetHero = () =>
  <Inset
    source='https://media.wired.com/photos/593256d2edfced5820d0fb9d/master/w_1025,c_limit/20140514-AMAZON-PHOENIX-0110edit.jpg'
  />
