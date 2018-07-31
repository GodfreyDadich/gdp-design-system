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
      placeholder : props.placeholder || 'placeholder'
    }
  }

  doSelection(newValue) {
    this.setState({selectedValue: newValue})
  }
  componentWillReceiveProps(props) {
    this.setState({
      options: props.options,
      placeholder: props.placeholder
    })
  }

  render() {
    const {
      selectedValue,
      options,
      placeholder
    } = this.state

    const calculatedHeight = 20 * options.length

    return (
      <div className='select'>
        <input className='select__value' placeholder={placeholder} value={selectedValue} readOnly/>
        <ul className='select__options'>
          {
            options.map( (option,index) => <li className='select__option' onClick={(e) => this.doSelection(option)} key={option+index} >{option}</li> )
          }
        </ul>
        <style jsx>{`
          .select {
            position: relative;
            display: inline-block;

            &__value {
              &:focus {
                & + ul {
                  height: ${calculatedHeight}px;
                }
              }
            }
            &__options {
              position: absolute;
              height: 0;
              overflow: hidden;
              list-style: none;
              padding: 0;
              margin:  0;
              transition: height .25s;
              transition-delay: .2s;

              &.expanded {
                height: ${calculatedHeight}px;
              }
            }

            &__option {
              cursor: pointer;

              &:hover {
                background-color: #e8eef7;
              }
            }
          }
        `}</style>
      </div>
    )
  }
}

export default Select
