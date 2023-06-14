import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.min.js';


import DarkMode from './Components/DarkMode';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Talleres from './Components/Talleres';
import Marcas from './Components/Marcas';
import Servicios from './Components/Servicios';
import InformacionPersonal from './Components/InformacionPersonal';
import SetPassword from './Components/SetPassword';
import Reservaciones from './Components/Reservaciones';
import Privacidad from './Components/Privacidad';
import Politicas from './Components/Politicas';
import Login from './Components/Login';
import InformacionFacturacion from './Components/Facturacion';
import Resumen from './Components/Resumen';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentComponent, setCurrentComponent] = useState('Main');
  const [selectedImages, setSelectedImages] = useState([]);

  const toggleDarkMode = () => {setDarkMode(!darkMode);};
  const changeComponent = (component, images) => {
    setCurrentComponent(component);
    setSelectedImages(images);
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case 'Main':
        return <Main darkMode={darkMode} changeComponent={changeComponent} />;
      case 'Talleres':
        return <Talleres darkMode={darkMode} changeComponent={changeComponent} />;
        case 'Marcas':
          return <Marcas darkMode={darkMode} changeComponent={changeComponent} />;
        case 'Servicios':
          return <Servicios darkMode={darkMode} changeComponent={changeComponent} />;
        case 'InformacionPersonal':
          return <InformacionPersonal darkMode={darkMode} changeComponent={changeComponent} />;
        case 'SetPassword':
          return <SetPassword darkMode={darkMode} changeComponent={changeComponent} />;
        case 'Reservaciones':
          return <Reservaciones darkMode={darkMode} changeComponent={changeComponent} />;
        case 'Privacidad':
          return <Privacidad darkMode={darkMode} changeComponent={changeComponent} />;
        case 'Politicas':
          return <Politicas darkMode={darkMode} changeComponent={changeComponent} />;
        case 'Login':
          return <Login darkMode={darkMode} changeComponent={changeComponent} />;
        case 'InformacionFacturacion':
          return <InformacionFacturacion darkMode={darkMode} changeComponent={changeComponent} selectedImages={selectedImages} />;
        case 'Resumen':
          return <Resumen darkMode={darkMode} changeComponent={changeComponent} selectedImages={selectedImages} />;
            default:
        return <Main darkMode={darkMode} changeComponent={changeComponent} />;
    }
  };

  return (
    <div>
      <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Navbar darkMode={darkMode} changeComponent={changeComponent} />
      {renderComponent()}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;
