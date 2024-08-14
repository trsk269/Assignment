import React from 'react';
import '../components/Email.css';

function Email() {
  return (
    <>
      <div className="email-item">
        <div className="email-info">
          <div className="line01">
            <div className="email-dot"></div>
            <div className="email-address">Beata@gmail.com</div>
          </div>
          <div className="email-date">Mar 7</div>
        </div>
        
        <div className="email-content">
          I've tried a lot and .
        </div>
        
        <div className="email-tags">
          <span className="tag interested">
            <i className="fas fa-circle"></i> Interested
          </span>
          <span className="tag campaign">
            <i className="fab fa-telegram"></i> Campaign Name
          </span>
        </div>
      </div>
    </>
  );
}

export default Email;
