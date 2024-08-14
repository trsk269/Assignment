import React, { useEffect, useState } from 'react';
import './OneBox.css';
import image0 from '../images/Frame 2087326278.png';
import image1 from '../images/Home_fill.png';
import image2 from '../images/email.png';
import image3 from '../images/Vector.png';
import image4 from '../images/Frame 23.png';
import image5 from '../images/email-2.png';
import image6 from '../images/v1.png';
import image7 from '../images/Vector-2.png';
import image8 from '../images/LSQ_User.png';
import image9 from '../images/No Message illustration.png';
import image10 from '../images/Vector-3.png';
import InBox from './InBox';

function OneBox() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState('home'); // New state for active section

    // Toggle between dark and light mode
    const handleToggle = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    // Apply the mode to the body or main container
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    // Handle click on the sidebar icons
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <>
            <div className='page02'>
                <nav className="sidebar">
                    <div className="logo">
                        <img src={image0} alt='hello'/>
                    </div>
                    <ul className="nav-list">
                        <li onClick={() => handleSectionChange('home')}>
                            <img src={image1} alt='Home'/>
                        </li>
                        <li onClick={() => handleSectionChange('email')}>
                            <img src={image2} alt='Email'/>
                        </li>
                        <li onClick={() => handleSectionChange('analytics')}>
                            <img src={image3} alt='Analytics'/>
                        </li>
                        <li onClick={() => handleSectionChange('settings')}>
                            <img src={image4} alt='Settings'/>
                        </li>
                        <li onClick={() => handleSectionChange('notifications')}>
                            <img src={image5} alt='Notifications'/>
                        </li>
                        <li onClick={() => handleSectionChange('tasks')}>
                            <img src={image6} alt='Tasks'/>
                        </li>
                        <li onClick={() => handleSectionChange('reports')}>
                            <img src={image7} alt='Reports'/>
                        </li>
                    </ul>
                    <div className="user-profile">
                        <img src={image8} alt='User'/>
                    </div>
                </nav>

                <div className="main-content">
                    <header>
                        <div className="workspace">
                            <h1>Onebox</h1>
                        </div>
                        <div className="user-settings">
                            <div className="toggle-container">
                                <input
                                    type="checkbox"
                                    id="mode-toggle"
                                    className="mode-toggle"
                                    checked={isDarkMode}
                                    onChange={handleToggle}
                                />
                                <label htmlFor="mode-toggle" className="toggle-label">
                                    <span className="sun-icon"></span>
                                    <span className="moon-icon"></span>
                                </label>
                            </div>
                            <span>Tim's Workspace</span>
                            <img src={image10} alt="Arrow" />
                        </div>
                    </header>

                    <div className="content">
                        {activeSection === 'home' && (
                            <div className='env'>
                                <img src={image9} alt="Envelope" />
                                <h2>It's the beginning of a legendary sales pipeline</h2>
                                <p>When you have inbound E-mails <br/>you’ll see them here</p>
                            </div>
                        )}

                        {activeSection === 'email' && (
                            <div>
                                <h2>Email Section</h2>
                                <p>This is where the email content will appear.</p>
                            </div>
                        )}

                        {activeSection === 'analytics' && (
                            <div>
                                <h2>Analytics Section</h2>
                                <p>This is where the analytics content will appear.</p>
                            </div>
                        )}

                        {activeSection === 'settings' && (
                            <div>
                                <h2>Settings Section</h2>
                                <p>This is where the settings content will appear.</p>
                            </div>
                        )}

                        {activeSection === 'notifications' && (
                            <div>
                                <h2>Notifications Section</h2>
                                <p>This is where the notifications content will appear.</p>
                            </div>
                        )}

                        {activeSection === 'tasks' && (
                            <InBox/>
                        )}

                        {activeSection === 'reports' && (
                            <div>
                                <h2>Reports Section</h2>
                                <p>This is where the reports content will appear.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OneBox;
