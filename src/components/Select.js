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
      textColor: props.textColor || '#000',
      selectIcon: props.selectIcon || 'caret',
      backgroundColor: props.backgroundColor || '#fff'
    }
  }

  doSelection(newValue) {
    this.setState({selectedValue: newValue})
    // this.toggleState(true)
  }

  toggleState(toggleValue) {
    this.setState({expanded: typeof toggleValue === 'boolean' ? toggleValue : !this.state.expanded})
  }

  componentWillReceiveProps(props) {
    this.setState({
      options: props.options,
      placeholder: props.placeholder,
      expanded: props.expanded,
      selectPadding: props.selectPadding,
      borderWidth: props.borderWidth,
      borderColor: props.borderColor,
      fontSize: props.fontSize,
      textColor: props.textColor,
      selectIcon: props.selectIcon,
      backgroundColor: props.backgroundColor
    })
  }

  render() {
    const {
      selectedValue,
      options,
      placeholder,
      expanded,
      selectPadding,
      borderWidth,
      borderColor,
      fontSize,
      textColor,
      selectIcon,
      backgroundColor
    } = this.state

    const calculatedHeight = (fontSize + 8) * options.length

    return (
      <div className={`select ${expanded ? 'expanded' : ''}`} onBlur={(e) => this.toggleState(false)}>
        <input className='select__value' placeholder={placeholder} value={selectedValue} onClick={(e) => this.toggleState()} readOnly/>
        <div className={`select__icon`} onClick={(e) => this.toggleState()}>
          <div className='caret'>&gt;</div>
          <div className='triangle' />
          <div className='chevron' />
        </div>
        <ul className='select__options'>
          {
            options.map( (option,index) => <li className='select__option' onClick={(e) => this.doSelection(option)} key={option+index} >{option}</li> )
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
            font-family: sans-serif;
            background-color: ${backgroundColor};
            
            &__icon {
              position: absolute;
              z-index: 1;
              color: ${borderColor};
              right: ${selectPadding - 5}px;
              top: calc(${fontSize/2 + selectPadding}px - 15%);
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

              &::placeholder {
                color: ${textColor};
                opacity: 0.6;
                font-size: ${fontSize}px;
              }
            }

            &__options {
              position: absolute;
              height: 0;
              top: ${fontSize + (selectPadding * 2) + 4}px;
              font-size: ${fontSize}px;              
              font-family: inherit;
              overflow: hidden;
              list-style: none;
              padding: 0;
              margin:  0;
              transition: height .2s;
              transition-delay: .1s;
            }

            &__option {
              cursor: pointer;
              height: ${fontSize + 4}px;
              margin: 2px 0;

              &:hover {
                background-color: #e8eef7;
              }
            }
            &.expanded {
              & > .select__options {
                height: ${calculatedHeight}px;
              }

              & > .select__icon {
                transform: rotate(270deg);
              }                
            }            
          }
        `}</style>
      </div>
    )
  }
}

export default Select
