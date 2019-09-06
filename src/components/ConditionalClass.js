import React from 'react'

const ConditionalClass = ({ pass, classAdd, style, children }) =>
  pass
    ? <div className={classAdd} style={style}>{children}</div>
    : children

export default ConditionalClass