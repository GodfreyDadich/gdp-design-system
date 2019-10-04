import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import Toast from '../components/Toast'

const toastCallback = () => {
  // console.log('callback')
}

export default {
  title: 'Design System|Modals/Toast',
  component: Toast
}

export const GDPToast = () =>
  <Toast
    active={boolean('Toggle Toast', true)}
    callback={toastCallback}
    header={text('Header', 'Email address copied to clipboard')}
    message={text('Message', 'apply@godfreydadich.com')}
  />
