import React from 'react'
import { CloseModal } from '../components/Icons'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: props.modalVisible
    }
  }

  componentDidMount() {
    if (this.props.modalVisible === true) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }
  componentWillReceiveProps(props) {
    if (props.modalVisible === true) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    this.setState({
      modalVisible: props.modalVisible
    })
  }

  closeModal() {
    this.setState({
      modalVisible: false
    })
    if (this.props.onModalClose) this.props.onModalClose()
    document.body.style.overflow = 'auto'
  }

  render() {
    const {
      modalVisible
    } = this.state
    return (
      <div className={`modal_container${modalVisible ? ' is_open' : ''}`}>
        <div className='modal'
          style={{
            background: this.props.view === 'lightMode' ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'
          }}>                
          <div className='modal__closeButton' onClick={e => this.closeModal(e)}>
            <CloseModal/>
          </div>
          <div className='modal__content'>{modalVisible ? this.props.children : ''}</div>
        </div>

        <style jsx>{`
          .modal_container {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.35);
            z-index: 1000;
            display: none;
            
            .modal {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;       
              z-index: 1000;

              &__closeButton {
                cursor: pointer;
                position: absolute;
                top: 30px;
                right: 30px;
                width: 30px;
                height: 30px;
                z-index:9999;
                background-repeat: no-repeat;
              }
            }
            
            &.is_open {
              display: block;
              .modal {
                display: block;
              }
            }
          }          
        `}</style>
      </div>
    )
  }
}

export default Modal
