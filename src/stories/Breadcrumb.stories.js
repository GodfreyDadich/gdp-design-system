import React from 'react';
import { text } from '@storybook/addon-knobs';
import Breadcrumb from '../components/Breadcrumb';
import { breadCrumbData } from '../utils/defaults'

export default {
  title: 'Design System|Navigation/Breadcrumb',
  component: Breadcrumb
}

export const GDPBreadCrumb = () =>
  <Breadcrumb
    delimiter={text('Separator', '/')}
    links={breadCrumbData}
  />
