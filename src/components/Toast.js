import React from 'react'
import { Heading4 } from './Type'

class Toast extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      active: props.active
    }
    this.closeToast = this.closeToast.bind(this)
    this.openToast = this.openToast.bind(this)
    this.startTimer = this.startTimer.bind(this)
  }

  openToast () {
    this.setState({
      active: true
    })
  }

  closeToast () {
    this.setState({
      active: false
    })
    this.props.callback()
  }
  startTimer () {
    if (this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(this.closeToast, 2500)
  }
  componentWillUnmount () {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.active !== this.state.active) {
      this.startTimer()
      this.openToast()
    }
  }

  render () {
    const {
      active
    } = this.state
    const {
      message,
      header
    } = this.props
    return (
      <div
        style={{
          position: 'fixed',
          bottom: active ? '22px' : '-140px',
          opacity: active ? 1 : 0,
          right: '42px',
          backgroundColor: 'rgb(72,255,0)',
          borderRadius: '7px',
          padding: '20px 40px',
          transition: 'bottom 0.75s, opacity 0.75s'
        }}
        className='toast'
      >
      
        <svg
          style={{
            width: '30px',
            height: '30px',
            display: 'inline-block',
            verticalAlign: 'middle'
          }}
          viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FFF" cx="15" cy="15" r="15"/><path d="M11,16.5060194 C12.0257687,17.0691545 14.2957686,20 14.2957686,20 C14.2957686,20 16,13.4119807 20,10" stroke="#48FF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>
        <div
          className='toast-content'
          style={{
            position: 'relative',
            display: 'inline-block',
            verticalAlign: 'middle',
            margin: '15px 40px 15px 20px'
          }}
        >
          <Heading4 style={{ fontSize: '19px', marginBottom: '5px' }}>{header}</Heading4>
          <span>{message}</span>
        </div>
        <div className='close' onClick={this.closeToast}
          style={{
            position: 'absolute',
            top: '12px',
            right: '15px',
            fontFamily: 'Institut',
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontSize: '10px',
            lineHeight: '1.33'
          }}
        >close</div>
      </div>
    )
  }
}
export default Toast
