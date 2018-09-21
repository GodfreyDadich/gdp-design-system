import React from 'react'

/* TODO: 
  Lifecycle functions. Calculate height of UL 
*/
class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedValue : '',
      options : props.options || ['test'],
      placeholder : props.placeholder || 'placeholder',
      expanded: props.expanded || false,
      selectPadding: props.selectPadding || 20,
      borderColor: props.borderColor || '#000',
      borderWidth: props.borderWidth || 1,
      fontSize: props.fontSize || 12,
      selectFont: props.selectFont || 'sans-serif',
      textColor: props.textColor || '#000',
      selectIcon: props.selectIcon || 'caret',
      backgroundColor: props.backgroundColor || '#fff',
      disabled: props.disabled || false,
      borderRadius: props.borderRadius || 0,
      cursor: 0,
      result: []
    }
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  doSelection (newValue) {
    this.setState({ selectedValue: newValue })
    this.toggleState(false)
  }

  toggleState (toggleValue) {
    if (this.state.disabled) return
    this.setState({ expanded: typeof toggleValue === 'boolean' ? toggleValue : !this.state.expanded })
  }

  componentWillReceiveProps (props) {
    this.setState({
      options: props.options,
      placeholder: props.placeholder,
      expanded: props.expanded,
      selectPadding: props.selectPadding,
      borderWidth: props.borderWidth,
      borderColor: props.borderColor,
      selectFont: props.selectFont,
      fontSize: props.fontSize,
      textColor: props.textColor,
      selectIcon: props.selectIcon,
      backgroundColor: props.backgroundColor,
      disabled: props.disabled,
      borderRadius: props.borderRadius
    })
  }

  handleKeyDown (e) {
    const { cursor, options } = this.state

    if (e.keyCode === 38 && cursor > 0) {
      this.setState( prevState => ({
        cursor: prevState.cursor - 1
      }))
    } else if (e.keyCode === 40 && cursor < options.length - 1) {
      this.setState( prevState => ({
        cursor: prevState.cursor + 1
      }))
    }
    if (e.keyCode === 13) {
      this.doSelection(options[cursor])
    }
  }

  render () {
    const {
      selectedValue,
      options,
      placeholder,
      expanded,
      selectPadding,
      borderWidth,
      borderColor,
      selectFont,
      fontSize,
      textColor,
      selectIcon,
      backgroundColor,
      disabled,
      borderRadius,
      cursor
    } = this.state

    const calculatedHeight = (fontSize + 8) * options.length
    const inputHeight = 2 * Math.round((fontSize + 5)/2)

    return (
      <div className={`select${expanded ? ' expanded' : ''}${disabled ? ' disabled' : ''}`} onBlur={(e) => this.toggleState(false)}>
        <input className='select__value' placeholder={placeholder} value={selectedValue} onFocus={(e) => this.toggleState(true)} onKeyDown={this.handleKeyDown} readOnly/>
        <div className={`select__icon`} onClick={(e) => this.toggleState()}>
          <div className='caret'>&gt;</div>
          <div className='triangle' />
          <div className='chevron' />
        </div>
        <ul className='select__options'>
          {
            options.map((option, index) => <li tabIndex={index} className={`select__option ${cursor === index ? 'active' : ''}`} onClick={(e) => this.doSelection(option)} key={option + index} >{option}</li>)
          }
        </ul>
        <style jsx>{`
          .select {
            position: relative;
            display: inline-block;
            color: ${textColor};
            border-color: ${borderColor};
            border-width: ${borderWidth}px;
            border-style: solid;
            padding: ${selectPadding}px;
            font-family: ${selectFont};
            background-color: ${backgroundColor};
            border-radius: ${borderRadius}px;
            
            &__icon {
              position: absolute;
              z-index: 1;
              color: ${borderColor};
              right: ${selectPadding - 5}px;
              top: calc(${fontSize/2 + selectPadding}px - 18%);
              width: 19px;
              height: 19px;
              transform: rotate(90deg);
              transform-origin: 25% 50%;
              transform-style: preserve-3D;
              transition: transform 0.25s;

              div {
                display:none;
              }

              .${selectIcon}{
                display:block;
              }

              .triangle {
                position: relative;
                width: 0;
                height: 0;
                margin-left: 2px;
                margin-top: 5px;
                border-top: 5px solid transparent;
                border-left: 8px solid ${borderColor};
                border-bottom: 5px solid transparent;
              }

              .chevron {
                position: relative;
                text-align: center;
                padding: 2px;
                margin-bottom: 5px;
                height: 0;
                width: 5px;
                transform: rotate(-90deg);
                transform-origin: 50% 50%;
                transform-style: preserve-3D;                
                
                &:before {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: -8px;
                  height: 100%;
                  width: 51%;
                  background: ${borderColor};
                  transform: skew(0deg, 40deg);
                }
                &:after {
                  content: '';
                  position: absolute;
                  top: 0;
                  right: 8px;
                  height: 100%;
                  width: 50%;
                  background: ${borderColor};
                  transform: skew(0deg, -40deg);
                }                
              }
            }   

            &__value {
              position: relative;
              z-index: 2;
              background: transparent;
              border: none;
              color: ${textColor};
              font-size: ${fontSize}px;
              font-family: ${selectFont};
              height: ${inputHeight}px;
              padding: 0;
              margin: 0;
              margin-right: 25px;
              max-width: 100%;
              text-overflow: ellipsis;
              width: 120px;

              &::placeholder {
                color: ${textColor};
                opacity: 0.6;
                font-size: ${fontSize}px;
                font-family: ${selectFont};
              }
            }

            &__options {
              position: absolute;
              top: ${inputHeight + 2 + (selectPadding * 2)}px;
              left: 0;
              height: 0;
              min-width: 100%;
              opacity: 0;
              font-size: ${fontSize}px;              
              font-family: inherit;
              overflow: hidden;
              list-style: none;
              padding: 0;
              margin:  0;
              transition: height .2s;
              transition-delay: .1s;
              box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
            }

            &__option {
              cursor: pointer;
              height: ${fontSize + 4}px;
              margin: 2px 0;
              padding: 0 4px;
              white-space: nowrap;

              &:hover, &.active {
                background-color: #e8eef7;
              }
            }
            &.expanded {
              & > .select__options {
                height: ${calculatedHeight}px;
                opacity: 1;
              }

              & > .select__icon {
                transform: rotate(270deg);
              }                
            } 
            
            &.disabled {
              opacity: 0.4;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default Select
