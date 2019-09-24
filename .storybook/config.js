import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
// import { withInfo } from '@storybook/addon-info';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  }
});

addDecorator(withKnobs)
// addDecorator(withInfo)

function loadStories() {
  require('../src/stories/Typography');
  require('../src/stories/Card');
  require('../src/stories/Colors');
  require('../src/stories/Gilmore');
  require('../src/stories/Hero');
  require('../src/stories/Image');
  require('../src/stories/Icons');
  require('../src/stories/Loader');
  require('../src/stories/Media');
  require('../src/stories/Modals');
  require('../src/stories/Navigation');
  require('../src/stories/Parallax');
  require('../src/stories/Select');
  require('../src/stories/Video');
}

configure(loadStories, module);
