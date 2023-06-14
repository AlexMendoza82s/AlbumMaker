import React from 'react';

const Servicios = ({ darkMode,changeComponent }) => {
  const mainClasses = darkMode ? 'bg-dark text-light container-fluid' : 'bg-light text-dark container-fluid';
  return (
    <main className={`main-section ${mainClasses}`}>
      <div className="row vh-100">
        <div className="col-12">
          Informacion de servicios no disponible
        </div>
      </div>
    </main>
  );

};

export default Servicios;
