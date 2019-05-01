import { configure, addDecorator } from '@storybook/react';
import { withThemes } from 'storybook-styled-components'
import { withKnobs } from '@storybook/addon-knobs';

import GDPTheme from '../src/themes/GDPTheme'
import DarkTheme from '../src/themes/DarkTheme'


const themes = {
  'GDP': GDPTheme,
  'Dark': DarkTheme
}

addDecorator(withThemes(themes))
addDecorator(withKnobs)

function loadStories() {
  require('../src/stories/Card');
  require('../src/stories/Chips');
  require('../src/stories/Colors');
  require('../src/stories/Gilmore');
  require('../src/stories/Hero');
  require('../src/stories/Image');
  require('../src/stories/Loader');
  require('../src/stories/Media');
  require('../src/stories/Modals');
  require('../src/stories/Navigation');
  require('../src/stories/Parallax');
  require('../src/stories/Select');
  require('../src/stories/Typography');
  require('../src/stories/Video');
}

configure(loadStories, module);
