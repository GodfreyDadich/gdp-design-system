import React from 'react'

export const Icon = ({ style, children }) =>
  <div style={Object.assign({
    display: 'inline-block',
    height: '16px',
    width: '16px',
    textIndent: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }, style)}>{children}</div>

export const InstagramIcon = ({ color, style }) =>
  <Icon style={Object.assign({
    backgroundImage: `url('data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%2013%2013%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%3E.st0%7Bfill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%7D%3C/style%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M11.9%206.5V4.8c0-.5%200-1.1-.1-1.6-.1-1-.8-1.7-1.8-1.9-.5-.1-1-.1-1.5-.1h-4c-.4%200-.8%200-1.2.1-1%20.1-1.7.7-2%201.7-.1.4-.1.9-.1%201.3v4.4c0%20.4%200%20.8.1%201.1.2%201%20.7%201.6%201.7%201.9.4.1.7.1%201.1.1h4.1c.5%200%201%200%201.4-.1.7-.1%201.3-.3%201.7-.9.3-.4.5-1%20.5-1.5%200-.9%200-1.8.1-2.8zM5.1%200h3c.6%200%201.3%200%201.9.1%201.5.2%202.6%201.3%202.9%202.8.1.7.1%201.4.1%202.1v3c0%20.6%200%201.2-.1%201.8a3.4%203.4%200%2001-2.9%203c-.6.2-1.3.2-2%20.2H4.9c-.6%200-1.3%200-1.9-.1-1-.1-1.9-.6-2.5-1.5-.4-.6-.6-1.3-.6-2%20.1-.5.1-.9.1-1.3V4.9v-.3c0-.5%200-1%20.1-1.6C.3%201.4%201.5.3%203.2.1%203.8.1%204.4%200%204.9%200h.2z%22/%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M8.6%206.5c0-1.2-.9-2.1-2.1-2.1-1.2%200-2.1%201-2.1%202.1%200%201.2.9%202.1%202.1%202.1%201.2%200%202.1-.9%202.1-2.1zm-5.4%200a3.24%203.24%200%20116.5.1c0%201.8-1.5%203.2-3.3%203.2-1.7%200-3.2-1.5-3.2-3.3zM10.7%203.1c0%20.5-.4.8-.8.8-.5%200-.8-.4-.8-.8s.4-.8.8-.8c.5%200%20.8.3.8.8z%22/%3E%3C/svg%3E')`
  }, style)} />

export const LinkedInIcon = ({ color, style }) =>
  <Icon style={Object.assign({
    backgroundImage: `url('data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20x%3D%220%22%20y%3D%220%22%20viewBox%3D%220%200%2013%2013%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%3E.st0%7Bfill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%7D%3C/style%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M2.8%203.8c0%20.5.3.8.9.8.6%200%20.9-.4.9-.8-.1-.4-.4-.8-.9-.8-.6%200-.9.4-.9.8zM6.9%206v-.7H5.3v4.9H7V7.4c0-.1%200-.3.1-.4.1-.3.3-.6.8-.6.6%200%20.7.4.7%201.1v2.6h1.6V7.3c0-1.5-.8-2.1-1.8-2.1-.9%200-1.3.4-1.5.8zm-4-.7v4.9h1.6V5.3H2.9z%22/%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M9.8%200H3.2C1.4%200%200%201.4%200%203.2v6.6C0%2011.6%201.4%2013%203.2%2013h6.6c1.8%200%203.2-1.4%203.2-3.2V3.2C13%201.4%2011.6%200%209.8%200m0%201.3a2%202%200%20012%202v6.6a2%202%200%2001-2%202H3.2a2%202%200%2001-2-2V3.2c0-1.1.9-2%202-2h6.6%22/%3E%3C/svg%3E')`
  }, style)} />

export const CloseModal = ({ color, style }) =>
  <div>
    <div id='circle'>
      <div id='cross' />
      <div id='cross2' />
    </div>
    <style>{`  
  #cross {
    transform: rotate(45deg);
    background: black;
    height: 13px;
    position: relative;
    width: 1px;
    left: 11px;
    top: 4.5px;
  }
  #cross2 {
    transform: rotate(45deg);
    background: black;
    height: 1px;
    left: 5px;
    position: absolute;
    top: 11px;
    width: 13px;
  }
  #circle {
    position: absolute;
    background-color:#fff;
    border:1px solid black;    
    height:23px;
    border-radius:50%;
    width:23px;
  }
  `}
    </style>
  </div>