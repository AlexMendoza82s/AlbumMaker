import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const Footer = ({ darkMode }) => {
  return (
    <>
      <footer className={`text-center bg-${darkMode ? 'light' : 'dark'} text-${darkMode ? 'dark' : 'light'}`}>      
        <div className={`container p-0`}>
          <section className={`mb-0`}>
            <a className={`btn btn-outline-${darkMode ? 'dark' : 'light'} btn-floating m-1`} href="https://www.facebook.com/" role="button">
              <i className="bi bi-facebook"></i>
            </a>
            <a className={`btn btn-outline-${darkMode ? 'dark' : 'light'} btn-floating m-1`} href="https://twitter.com/?lang=es" role="button">
              <i className="bi bi-twitter"></i>
            </a>
            <a className={`btn btn-outline-${darkMode ? 'dark' : 'light'} btn-floating m-1`} href="https://www.google.com.ec" role="button">
              <i className="bi bi-google"></i>
            </a>
            <a className={`btn btn-outline-${darkMode ? 'dark' : 'light'} btn-floating m-1`} href="https://www.linkedin.com/in/alexmendozamorante/" role="button">
              <i className="bi bi-linkedin"></i>
            </a>
            <a className={`btn btn-outline-${darkMode ? 'dark' : 'light'} btn-floating m-1`} href="https://github.com/AlexMendoza82s/BootCamp" role="button">
              <i className="bi bi-github"></i>
            </a>
            <a className={`btn btn-outline-${darkMode ? 'dark' : 'light'} btn-floating m-1`} href="https://wa.link/ak5czc" role="button">
              <i className="bi bi-whatsapp"></i>
            </a>
          </section>
        </div>
        <div className={`text-center p-2 bg-${darkMode ? 'light' : 'dark'}`}>
          © 2023 Boot Camp Espol - Alex Mendoza Morante
        </div>
      </footer>
    </>
  );
};

export default Footer;
