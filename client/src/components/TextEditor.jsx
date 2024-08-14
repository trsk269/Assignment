import React, { useState, useEffect } from 'react';
import '../components/TextEditor.css';

function TextEditor() {
  const [showReply, setShowReply] = useState(false);

  const handleReplyClick = () => {
    setShowReply(true);
  };

  const handleCloseReply = () => {
    setShowReply(false);
  };

  const handleKeyDown = (event) => {
    if (event.metaKey && event.key === 'n') {
      setShowReply(true);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <div className="email-header-writer">
        <div className="sender-info">
          <div className="sender-name">Orlando</div>
          <div className="sender-email">orladom@gmail.com</div>
        </div>
        <div className="email-actions">
          <button className="action-btn">
            <i className="fas fa-circle"></i> Meeting Completed
          </button>
          <button className="action-btn">Move ▼</button>
          <button className="action-btn">⋮</button>
        </div>
      </div>

      <div className="email-content01">
        <div className="email-subject">
          <div className="subject-line">New Product Launch</div>
          <div className="email-date">20 June 2022 : 9:16AM</div>
        </div>
        <div className="email-body">
          <p><strong>from :</strong> jeanne@icloud.com cc : lennon.j@mail.com</p>
          <p><strong>to :</strong> lennon.j@mail.com</p>
          <p>Hi {`{FIRST_NAME}`},</p>
          <br/>
          <p className="left-align">
            I would like to introduce you to SaaSgrow, a productized design service specifically tailored for SaaS startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.
          </p>
        </div>
        <button className="view-replies-btn">View all 4 replies</button>
      </div>

      <div className="reply-section">
        <button className="reply-btn" onClick={handleReplyClick}>
          <i className="fas fa-reply"></i> Reply
        </button>
      </div>

      {showReply && (
        <div className="reply-window">
        <div className="reply-header">
           <p className="reply-title">Reply</p>
           <button onClick={handleCloseReply} className="close-btn">X</button>
        </div>

          <div className="reply-content">
  <div className="input-group">
    <label><strong>To :</strong></label>
    <input type="email" value="jeanne@icloud.com" />
  </div>
  <div className="input-group">
    <label><strong>From :</strong></label>
    <input type="email" value="peter@reachinbox.com" />
  </div>
  <div className="input-group">
    <label><strong>Subject :</strong></label>
    <input type="text" value="Warmup Welcome" />
  </div>
  <textarea placeholder="Hi Jeanne,"></textarea>
</div>

          <div className="action-bar">
            <button className="send-btn">Send ▼</button>
            <button className="action-btn">⚡ Variables</button>
            <button className="action-btn">👁 Preview Email</button>
            <button className="action-btn">A: Font</button>
            <button className="action-btn">🔗</button>
            <button className="action-btn">🖼️</button>
            <button className="action-btn">😊</button>
            <button className="action-btn">👤</button>
            <button className="action-btn">⟷</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TextEditor;
