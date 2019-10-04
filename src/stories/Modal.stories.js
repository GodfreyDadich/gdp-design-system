import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import SimpleGallery from '../components/SimpleGallery'
import Modal from '../components/Modal'

const modalClosed = () => {
  console.log('modal closed')
}

const imageGallery = [
  'https://upload.wikimedia.org/wikipedia/commons/c/c9/Moon.jpg',
  'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx5dXVzeTAxc3owaW5qbWc0ZXl3enItMjQwOGZwMS1vcGVuZXItbG8tcjIuanBnIiwiZWRpdHMiOnsid2VicCI6eyJxdWFsaXR5Ijo5MH0sInJlc2l6ZSI6eyJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWUsIndpZHRoIjoxMDI0fX19'
]

export default {
  title: 'Design System|Modals/Modal',
  component: Modal
}

export const DarkMode = () =>
  <div><p> this is some test content for below the modal</p>
    <Modal
      view={'darkMode'}
      closeCallback={modalClosed}
      modalVisible={boolean('Toggle modal')}>
      <SimpleGallery
        images={imageGallery}
        aspectRatio='noAspect'
        view={'darkMode'}
        index={0}
      />
    </Modal>
  </div>

export const LightMode = () =>
  <div><p> this is some test content for below the modal</p>
    <Modal
      view={'lightMode'}
      closeCallback={modalClosed}
      modalVisible={boolean('Toggle modal', false)}>
      <SimpleGallery
        images={imageGallery}
        aspectRatio='noAspect'
        view={'lightMode'}
        index={0}
      />
    </Modal>
  </div>
