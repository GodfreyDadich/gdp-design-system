import React from 'react'

const Loader = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%'
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" className='loader'>
        <defs>
          <clipPath id="a"><path d="M336.34,931.6a1.86,1.86,0,0,1-1.9-1.91V411.37a1.86,1.86,0,0,1,1.9-1.9H484.5c144.18,0,261.06,116.88,261.06,261.06S628.68,931.6,484.5,931.6Z" fill="none"/></clipPath>
        </defs>
        <path d="M540,1080c298.23,0,540-241.77,540-540S838.23,0,540,0,0,241.77,0,540s241.77,540,540,540" fill="#00ad68"/>
        <path id='dadich' d="M336.34,931.6a1.86,1.86,0,0,1-1.9-1.91V411.37a1.86,1.86,0,0,1,1.9-1.9H484.5c144.18,0,261.06,116.88,261.06,261.06S628.68,931.6,484.5,931.6Z" fill="#fff"/>
        <path id='godfrey' d="M743.66,148.4a1.86,1.86,0,0,1,1.9,1.91V668.63a1.86,1.86,0,0,1-1.9,1.9H595.5c-144.18,0-261.06-116.88-261.06-261.06S451.32,148.4,595.5,148.4Z"/>
        <g clipPath="url(#a)" id='blue-chip'><path d="M743.66,148.4a1.86,1.86,0,0,1,1.9,1.91V668.63a1.86,1.86,0,0,1-1.9,1.9H595.5c-144.18,0-261.06-116.88-261.06-261.06S451.32,148.4,595.5,148.4Z" fill="#0c8f93"/></g>
        <style jsx>{`
          .loader {
            position: absolute;
            display: block;
            width: 4vw;
            top: calc( 50%);
            left: calc( 50%);
            transform: translate(-50%, -50%);
          }
          #dadich {
            animation: rotateForward 2.5s infinite ease-out;
            transform-origin: 53% 63%;
          }
          #godfrey {
            animation: rotateForward 2.5s infinite ease-out;
            transform-origin: 50% 40%;
          }
          #blue-chip {
            animation: fadeInOut 2.5s infinite ease-out;
          }
          @keyframes rotateForward {
            0% {
              transform: rotate(-359deg);
            }
            33% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(0deg);
            }                    
          }  
          @keyframes fadeInOut {
            0% {
              opacity: 0;
            }
            31% {
              opacity: 0;
            }          
            40% {
                opacity: 1;
            }
            100% {
                opacity: 1;
            }  
          }         
        `}</style>
      </svg>
    </div>
  )
}

export default Loader
