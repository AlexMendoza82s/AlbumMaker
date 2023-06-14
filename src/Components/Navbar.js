import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = ({ darkMode,changeComponent }) => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-light bg-light text-dark' : 'navbar-dark bg-dark text-light'}`}>
                <div className="container-fluid">
                    <button className="navbar-brand" style={{ border: 'none', background: 'none', padding: '0', cursor: 'pointer' }}>
                        <i className={`fas fa-solid fa-images text-danger`} style={{ marginRight: '5px' }}></i>
                        <span className={`text-danger`}>Album Maker</span>
                    </button>
                    <button className={`navbar-toggler text-primary ${darkMode ? 'navbar-light' : 'navbar-dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className={`navbar-toggler-icon ${darkMode ? 'text-primary' : 'text-primary'}`}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className={`nav-link active`} onClick={() => changeComponent('Main')} style={{ cursor: 'pointer', border: 'none', background: 'none' }}>
                                    <i className={`fas fa-home`} style={{ marginRight: '5px' }}></i>
                                    <span>Home</span>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link`} onClick={() => changeComponent('Talleres')} style={{ cursor: 'pointer', border: 'none', background: 'none' }}>
                                    <i className={`fas fa-wrench`} style={{ marginRight: '5px' }}></i>
                                    <span>Talleres</span>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link`} onClick={() => changeComponent('Marcas')} style={{ cursor: 'pointer', border: 'none', background: 'none' }}>
                                    <i className={`fas fa-building`} style={{ marginRight: '5px' }}></i>
                                    <span>Marcas</span>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link`} onClick={() => changeComponent('Servicios')} style={{ cursor: 'pointer', border: 'none', background: 'none' }}>
                                    <i className={`fas fa-regular fa-bell-concierge`} style={{ marginRight: '5px' }}></i>
                                    <span>Servicios</span>
                                </button>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="nav-item">
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <button type="button" className={`btn dropdown-toggle ${darkMode ? '' : 'text-light'}`} data-bs-toggle="dropdown" aria-expanded="false">
                                        Opciones Adicionales
                                    </button>
                                    <ul className={`dropdown-menu ${darkMode ? '' : 'dropdown-menu-dark'} dropdown-menu-end`}>
                                        <li>
                                            <button className={`dropdown-item ${darkMode ? '' : 'text-light'}`} onClick={() => changeComponent('InformacionPersonal')} style={{ cursor: 'pointer', border: 'none', background: 'none' }}>
                                                Mi Informacion
                                            </button>
                                        </li>
                                        <li>
                                            <button className={`dropdown-item ${darkMode ? '' : 'text-light'}`} onClick={() => changeComponent('SetPassword')} style={{ cursor: 'pointer', border: 'none', background: 'none' }}>
                                                Modificar Clave
                                            </button>
                                        </li>
                                        <li>
                                            <button className={`dropdown-item ${darkMode ? '' : 'text-light'}`} onClick={() => changeComponent('Reservaciones')} style={{ cursor: 'pointer', border: 'none', background: 'none' }}>
                                                Mis Reservas
                                            </button>
                                        </li>
                                        <li>
                                            <button className={`dropdown-item ${darkMode ? '' : 'text-light'}`} onClick={() => changeComponent('Privacidad')} style={{ cursor: 'pointer', border: 'none', background: 'none' }}>
                                                Declaracion de Privacidad
                                            </button>
                                        </li>
                                        <li>
                                            <button className={`dropdown-item ${darkMode ? '' : 'text-light'}`} onClick={() => changeComponent('Politicas')} style={{ cursor: 'pointer', border: 'none', background: 'none' }}>
                                                Politicas del Sitio
                                            </button>
                                        </li>
                                        <li>
                                            <button className={`dropdown-item ${darkMode ? '' : 'text-light'}`} onClick={() => changeComponent('Login')} style={{ cursor: 'pointer', border: 'none', background: 'none' }}>
                                                Iniciar Sesion
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>    
        </>
      );
    };
    
    export default Navbar;    