import React from 'react';

const Sidebar = ({ copy, content1, content2, subtitle }) => (
  <div className='leftCarving'>
    <p className='mainContent'>
      <p className='mainContent__subtitle'>{subtitle}</p>
      {content1}
      <figure className='leftCarving__content'>
        <div id='leftCarving__content__border'>
        </div>
        {copy}
      </figure>
      {content2}
    </p>
    <style jsx>{`
  .leftCarving {
    display: flex;
    justify-content: center;

    #leftCarving__content__border {
      border-top: solid .8vh;
      width: 23.2vw;
      padding-bottom: 1.1vw;
    }
    .leftCarving__content {
      float:left;  
      clear:both;
      width: 48%;
      margin: 1vw -9vw 1vw 1vw;
      height: 17vw;
      font-family: Atlas Grotesk;
      font-weight: 600;
      font-size: 1.8vw;
      line-height: 1.9vw;
      letter-spacing: .01vw;
      transform: translateX(-45%);
    }
    .mainContent {
      float: right;
      position: relative;
      margin-left: 3vw;
      margin-right: 3vw;
      width: 48vw;
      font-size: .6vw;
      line-height: 1vw;
      letter-spacing: .01vw;
      font-family: Noe Text;
      font-weight: 100;
      
      .mainContent__subtitle {
        font-family: Atlas Grotesk;
        font-weight: 700;
      }
    }
  }
  `}</style>
  </div>
)

export default Sidebar;