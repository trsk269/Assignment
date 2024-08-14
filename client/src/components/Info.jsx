import React from 'react';
import '../components/Info.css';

function Info() {
  return (
    <>
      <div className="email-header">
        <div className="email-info">
          <div className="email-inbox">All Inbox(s) <i className="fas fa-chevron-down"></i></div>
          <div className="refresh-icon"><i className="fas fa-sync-alt"></i></div>
        </div>
        <div className="email-marks">25/25 Inboxes selected</div>
        <div className="email-search">
          <input placeholder='Search'></input>
        </div>
        <div className="notification">
          <div className='number'>26</div>
          <p>New Replies</p>
          <div>Newest <i className="fas fa-chevron-down"></i>
          </div>
        </div>
    </div>
    </>
  );
}

export default Info;
