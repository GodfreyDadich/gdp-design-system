import React from 'react'
import PropTypes from 'prop-types'

const ConditionalClass = ({ pass, classAdd, style, children }) =>
  pass
    ? <div className={classAdd} style={style}>{children}</div>
    : children

ConditionalClass.propTypes = {
  pass: PropTypes.bool,
  classAdd: PropTypes.string,
  style: PropTypes.object
}

export default ConditionalClass
