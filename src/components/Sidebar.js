import React from 'react';

const Sidebar = ({ copy, content }) => (
  <div className='sidebar'>
    <p className='sidebar__content'>
      <div id='sidebar__content__border'>
      </div>
      {copy}
    </p>
    <p className='mainContent'>
      {content}
    </p>
    <style jsx>{`
  .sidebar {
    display: flex;
    justify-content: center;

    #sidebar__content__border {
      border-top: solid 1.3vh;
      width: 17vw;
      padding-bottom: 1.4vw;
    }
    .sidebar__content {
      margin-top: 18vw;
      width: 17.1vw;
      font-family: Atlas Grotesk;
      font-weight: 600;
      font-size: 1.69vw;
      position: relative;
      line-height: 2.1vw;
      letter-spacing: .01vw;
      display: inline-block;
    }
    .mainContent {
      margin-left: 3vw;
      margin-right: 3vw;
      width: 50vw;
      font-size: 1.3vw;
      line-height: 2vw;
      letter-spacing: .01vw;
      font-family: Noe Text;
      font-weight: 100;
    }
  }
  `}</style>
  </div>
)

export default Sidebar;