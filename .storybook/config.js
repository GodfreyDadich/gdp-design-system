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

configure(require.context('../src/stories', true, /\.(js|mdx)$/), module)
