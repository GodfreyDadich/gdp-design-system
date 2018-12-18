import React from 'react'
import { Caption } from './Type'

const devices = {
  black: '%3Csvg%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%201394.1%20996.2%22%3E%3Cstyle%3E.st0%7Bfill%3A%23222323%7D%3C/style%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M218.2%200h-51.8C164%200%20162%202%20162%204.3v.7h60.5V4.3C222.5%201.9%20220.6%200%20218.2%200zM404.8%200H285.9c-2.4%200-4.3%202-4.3%204.3v.7h127.6V4.3C409.1%201.9%20407.2%200%20404.8%200z%22/%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M1316.9%2C5.5L68.1%2C4.7C31%2C4.7%2C1%2C34.7%2C1%2C71.8v855.5c0%2C37%2C30%2C67.1%2C67.1%2C67.1l1248.4%2C0.8%20c42.3%2C0%2C76.6-34.3%2C76.6-76.6V81.7C1393.1%2C39.6%2C1359%2C5.5%2C1316.9%2C5.5z%20M1279.7%2C937.2H113.7V61.8h1165.9V937.2z%22/%3E%3Cpath%20d%3D%22M1316.9%2C5.5L68.1%2C4.7C31%2C4.7%2C1%2C34.7%2C1%2C71.8v855.5c0%2C37%2C30%2C67.1%2C67.1%2C67.1l1248.4%2C0.8%20c42.3%2C0%2C76.6-34.3%2C76.6-76.6V81.7C1393.1%2C39.6%2C1359%2C5.5%2C1316.9%2C5.5z%22%20fill%3D%22none%22%20stroke%3D%22%23404040%22%20stroke-width%3D%222%22/%3E%3Cpath%20d%3D%22M1340.1%2C542.5h-3.6c-8.7%2C0-15.7-7-15.7-15.7v-58.6c0-8.6%2C7-15.7%2C15.7-15.7h3.6c8.7%2C0%2C15.7%2C7%2C15.7%2C15.7v58.6%09C1355.7%2C535.5%2C1348.7%2C542.5%2C1340.1%2C542.5z%22%20fill%3D%22none%22%20stroke%3D%22%23262828%22%20stroke-width%3D%224%22%20stroke-miterlimit%3D%2210%22/%3E%3C/svg%3E',
  white: '%3Csvg%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%201394.1%20996.2%22%3E%3Cstyle%3E.st0%7Bfill%3A%23fcfcfc%7D%3C/style%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M218.2%200h-51.8C164%200%20162%202%20162%204.3v.7h60.5V4.3C222.5%201.9%20220.6%200%20218.2%200zM404.8%200H285.9c-2.4%200-4.3%202-4.3%204.3v.7h127.6V4.3C409.1%201.9%20407.2%200%20404.8%200z%22/%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M1316.9%2C5.5L68.1%2C4.7C31%2C4.7%2C1%2C34.7%2C1%2C71.8v855.5c0%2C37%2C30%2C67.1%2C67.1%2C67.1l1248.4%2C0.8%20c42.3%2C0%2C76.6-34.3%2C76.6-76.6V81.7C1393.1%2C39.6%2C1359%2C5.5%2C1316.9%2C5.5z%20M1279.7%2C937.2H113.7V61.8h1165.9V937.2z%22/%3E%3Cpath%20d%3D%22M1316.9%2C5.5L68.1%2C4.7C31%2C4.7%2C1%2C34.7%2C1%2C71.8v855.5c0%2C37%2C30%2C67.1%2C67.1%2C67.1l1248.4%2C0.8%20c42.3%2C0%2C76.6-34.3%2C76.6-72.7V85.6C1393.1%2C39.6%2C1359%2C5.5%2C1316.9%2C5.5z%22%20fill%3D%22none%22%20stroke%3D%22%23f4f4f6%22%20stroke-width%3D%222%22/%3E%3Cpath%20d%3D%22M1358.1%2C560.5h-3.6c-8.7%2C0-15.7-7-15.7-15.7v-58.6c0-8.6%2C7-15.7%2C15.7-15.7h3.6c8.7%2C0%2C15.7%2C7%2C15.7%2C15.7v58.6%09C1373.7%2C553.5%2C1366.7%2C560.5%2C1358.1%2C560.5z%22%20fill%3D%22none%22%20stroke%3D%22%23fafafb%22%20stroke-width%3D%223%22/%3E%3C/svg%3E'
}

const Device = ({ deviceColor, classAdd, caption, children, active }) =>
  <div className={classAdd}
    style={{
      position: 'relative',
      paddingTop: '71.4%',
      borderRadius: '6.5%',
      overflow: 'hidden',
      boxShadow: 'rgba(0, 0, 0, 0.2) -4px 22px 16px -8px',
    }}>
    <div style={{
      position: 'absolute',
      top: '5.6%',
      left: '8.12%',
      width: '85%',
      zIndex: '21',
      backgroundColor: '#000'
    }}>{React.cloneElement(children, { active })}</div>
    {caption && caption.length > 0 ? <Caption classAdd='col-6 skip-3 col-6-tab skip-1-tab'>{caption}</Caption> : ''}
    <div style={{
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: '22',
      backgroundImage: `url(data:image/svg+xml,${devices[deviceColor]})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }} />
  </div>

export default Device
