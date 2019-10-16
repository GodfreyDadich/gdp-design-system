import React from 'react'
import PropTypes from 'prop-types'

const ConditionalLink = ({ linkUrl, linkTarget, children }) =>
  (typeof linkUrl === 'string' && linkUrl.length > 0)
    ? <a href={linkUrl} target={linkTarget || ''}>{children}</a>
    : children

ConditionalLink.propTypes = {
  linkUrl: PropTypes.string,
  linkTarget: PropTypes.string
}

ConditionalLink.defaultProps = {
  linkTarget: ''
}

export default ConditionalLink
