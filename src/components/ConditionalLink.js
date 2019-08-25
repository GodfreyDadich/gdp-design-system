import React from 'react'

const ConditionalLink = ({ linkUrl, linkTarget, children }) =>
  (typeof linkUrl === 'string' && linkUrl.length > 0)
    ? <a href={linkUrl} target={linkTarget || ''}>{children}</a>
    : children

export default ConditionalLink
