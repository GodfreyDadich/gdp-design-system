import React from 'react';
import { storiesOf } from '@storybook/react';
import PodcastEmbed from '../components/PodcastEmbed'
import InstaEmbed from '../components/InstaEmbed'

storiesOf('Media', module)
.add('Podcast Embed', () =>
  <PodcastEmbed />
)
.add('Instagram Embed', () =>
  <InstaEmbed />
)