import React from 'react'

class Chips extends React.Component { 
  
  constructor(props) {
    super(props)
    this.state = {
      chips: props.chips || [],
      closeCallback: props.closeCallback || null
    }
  }

  removeChip (toRemove) {
    const newChips = this.state.chips.filter( (chip, index) => index !== toRemove)
    this.setState({chips: newChips})
    this.state.closeCallback(toRemove)
  }

  componentWillReceiveProps(props) {
    this.setState({
      chips: props.chips
    })
  }  

  render() {
    const {
      chips
    } = this.state
    return (
    <div className='chips'>

      {chips.map( (chip, index) => 
        <div className='chip' key={`chip-${index}`}>
          {chip}
          <div className='chip__close' onClick={(e) => this.removeChip(index)}>x</div>
        </div>
      )}
      
      <style jsx>{`
        .chips {
          position: relativel;
          width: 100%;

          .chip {
            position: relative;
            padding: 5px 25px 5px 5px;
            margin: 0 5px; 
            display: inline-block;
            background-color: green;
            font-size: 11px;
            color: white;
            border-radius: 30px;

            &__close {
              position: absolute;
              right: 3px;
              top: 2px;
              width: 10px;
              height: 10px;
              font-size: 10px;
              text-align: center;
              padding: 1px;
              border: 1px solid #fff;
              border-radius: 100%;

            }
          }
        }
      `}</style>
    </div>
  )}
}

export default Chips