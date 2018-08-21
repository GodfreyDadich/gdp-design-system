import React from 'react'

class Modal extends React.Component { 
  
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: props.modalVisible,
      closeCallback: props.closeCallback || null
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      modalVisible: props.modalVisible,
      closeCallback: props.closeCallback
    })
  }

  overlayClick(target) {
    if ( Object.values(target.classList).some(clss => clss ==='modal_container') ) {
      this.closeModal()
    }
  }

  closeModal() {
    this.setState({
      modalVisible: false
    })
    !!this.state.closeCallback()
  }

  render() {
    const {
      chips,
      modalVisible
    } = this.state
    return (
      <div className={`modal_container${modalVisible ? ' is_open' : ''}`} onClick={(e) => this.overlayClick(e.target)}>
        <div className='modal'>
          <div className='modal__closeButton' onClick={(e) => this.closeModal(e)}>X</div>
            <div className='modal__content'>{this.props.children}</div>
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
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background: #fff;
              border: 1px solid transparent;
              border-radius: 10px;
              max-width: 70%;
              padding: 24px;
              box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
              z-index: 1010;
              display: none;
              overflow: hidden;
  
              &__closeButton {
                position: fixed;
                top: 5px;
                right: 5px;
                cursor: pointer;
              }

              &__content {
                position: relative;
                display: block;
                max-height: 85vh;
                overflow-y: auto;
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