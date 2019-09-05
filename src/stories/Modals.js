import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import Card from '../components/Card'
import Modal from '../components/Modal'
import Toast from '../components/Toast'

const modalClosed = () => {
  modalState = false
}
const toastCallback = () => {
  // console.log('callback')
}
let modalState = true

storiesOf('Modals', module)
  .add('Modal Window', () => 
    <div><p> this is some test content for below the modal</p>{modalState.toString()}
      <Modal
        closeCallback={modalClosed}
        modalVisible={boolean('Toggle modal', modalState)}>
        <Card
          cardTitle='Test Title'
          cardSubTitle='Test subtitle text ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim.'
          cardContent='Test subtitle text ipsem lorem dolor elis malesada congue. Maect as sed imperet ex, egetejku uismod enim.'
          linkText='Test Link'
          linkUrl=''
          mediaOrientation='top'
          imageTitle='test'
          aspectRatio='standard'
          imgSource='http://nine-eleven-memorial.s3-website-us-west-1.amazonaws.com/public/img/exhibition_object_hero.jpg'
          horizontalAlign='center'
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