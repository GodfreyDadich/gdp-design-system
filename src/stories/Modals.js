import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import Card from '../components/Card'
import SimpleGallery from '../components/SimpleGallery'
import Modal from '../components/Modal'
import Toast from '../components/Toast'

const modalClosed = () => {
  modalState = false
}
const toastCallback = () => {
  // console.log('callback')
}
let modalState = true

const imageGallery = [
  'https://upload.wikimedia.org/wikipedia/commons/c/c9/Moon.jpg',
  'https://d3q6cdqcttrgvi.cloudfront.net/eyJidWNrZXQiOiJnZHAtc2l0ZSIsImtleSI6ImF0dGFjaG1lbnRzL2Nqemx5dXVzeTAxc3owaW5qbWc0ZXl3enItMjQwOGZwMS1vcGVuZXItbG8tcjIuanBnIiwiZWRpdHMiOnsid2VicCI6eyJxdWFsaXR5Ijo5MH0sInJlc2l6ZSI6eyJ3aXRob3V0RW5sYXJnZW1lbnQiOnRydWUsIndpZHRoIjoxMDI0fX19',
]

storiesOf('Modals', module)
  .add('Modal Window', () =>
    <div><p> this is some test content for below the modal</p>{modalState.toString()}
      <Modal
        view={'darkMode'}
        closeCallback={modalClosed}
        modalVisible={boolean('Toggle modal', modalState)}>
        <SimpleGallery
          images={imageGallery}
          aspectRatio='noAspect'
          view={'darkMode'}
          index={0}
        />
      </Modal>
    </div>
  )
  .add('Toast', () =>
    <div>
      <Toast
        active={boolean('Toggle Toast', true)}
        callback={toastCallback}
        header={text('Header', 'Email address copied to clipboard')}
        message={text('Message', 'apply@godfreydadich.com')}
      />
    </div>
  )