import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Breadcrumb from '../components/Breadcrumb'

const breadCrumbData = [
  {
    title: 'test title 1',
    slug: 'http://google.com'
  },
  {
    title: 'test title 2',
    slug: 'http://google.com'
  },
  {
    title: 'test title 3',
    slug: 'http://google.com'
  }
]
storiesOf('Navigation', module)
  .add(
    'breadcrumb',
    () => <Breadcrumb
      delimiter={text('Separator', '/')}
      links={breadCrumbData}
    />
  )