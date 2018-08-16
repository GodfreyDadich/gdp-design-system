import { configure, addDecorator } from '@storybook/react';
import { withThemes } from 'storybook-styled-components'

import GDPTheme from '../src/themes/GDPTheme'
import DarkTheme from '../src/themes/DarkTheme'


const themes = {
  'GDP': GDPTheme,
  'Dark': DarkTheme
}

addDecorator(withThemes(themes))

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
