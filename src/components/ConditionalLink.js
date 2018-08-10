import React from 'react'

const ConditionalLink = ({linkUrl, children}) => typeof linkUrl === 'string' && linkUrl.length > 0 ? 
  <a href={linkUrl}>{children}</a> :
  children

export default ConditionalLink