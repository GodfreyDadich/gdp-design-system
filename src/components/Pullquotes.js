import React from 'react'
import {
  Pullquote,
  LeftCarving,
  QuoteBlock,
  SidebarQuote
} from './Type';

class Pullquotes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: props.type
    }
  }

  render() {
    const {
      type
    } = this.state

    return (<div className='testadd'>
      {(() => {
        switch (type) {
          case 'pullquote-text':
            return <Pullquote />
          case 'left-carving':
            return <LeftCarving />
          case 'quote-block':
            return <QuoteBlock />
          case 'sidebar-quote':
            return <SidebarQuote />
          default:
            return null
        }
      })()}
      <style jsx>{`
      `}</style>
    </div>
    )
  }
}

export default Pullquotes
