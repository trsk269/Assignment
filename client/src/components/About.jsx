import React from 'react';
import '../components/About.css';

function About() {
  return (
    <div>
      <div className="lead-details">
        <h2>Lead Details</h2>
        <div className="lead-item">
          <span className="item-label">Name</span>
          <span className="item-value">Orlando</span>
        </div>
        <div className="lead-item">
          <span className="item-label">Contact No</span>
          <span className="item-value">+54-9062827869</span>
        </div>
        <div className="lead-item">
          <span className="item-label">Email ID</span>
          <span className="item-value">orlando@gmail.com</span>
        </div>
        <div className="lead-item">
          <span className="item-label">Linkedin</span>
          <span className="item-value">linkedin.com/timvadde</span>
        </div>
        <div className="lead-item">
          <span className="item-label">Company Name</span>
          <span className="item-value">Reachinbox</span>
        </div>
      </div>
      
      <div className="activities">
  <h2>Activities</h2>
  <div className="campaign-details">
    <span className="campaign-name">Campaign Name</span>
    <div className="campaign-steps">
      <span>3 Steps</span> | <span>5 Days in Sequence</span>
    </div>
    <div className="activity-step">
      <div className="step-icon"><i className="fas fa-envelope"></i></div>
      <div className="step-details">
        <span className="step-title">Step 1: Email</span>
        <span className="step-status"><i className="fas fa-check-circle"></i> Sent 3rd, Feb</span>
      </div>
    </div>
    <div className="activity-step">
      <div className="step-icon"><i className="fas fa-envelope"></i></div>
      <div className="step-details">
        <span className="step-title">Step 2: Email</span>
        <span className="step-status"><i className="fas fa-envelope-open"></i> Opened 5th, Feb</span>
      </div>
    </div>
    <div className="activity-step">
      <div className="step-icon"><i className="fas fa-envelope"></i></div>
      <div className="step-details">
        <span className="step-title">Step 3: Email</span>
        <span className="step-status"><i className="fas fa-envelope-open"></i> Opened 5th, Feb</span>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default About;
