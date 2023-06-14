import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const DarkMode = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-light bg-light text-dark' : 'navbar-dark bg-dark text-light'}`}>
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li className="nav-item">
                        <div className="ms-auto form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="darkModeSwitch" checked={darkMode} onChange={toggleDarkMode} />
                            <label className={`form-check-label`} htmlFor="darkModeSwitch">
                                {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>    
  );
};

export default DarkMode;
