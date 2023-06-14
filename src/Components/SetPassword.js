import React from 'react';

const SetPassword = ({ darkMode,changeComponent }) => {
  const mainClasses = darkMode ? 'bg-dark text-light container-fluid' : 'bg-light text-dark container-fluid';
  return (
    <main className={`main-section ${mainClasses}`}>
      <div className="row vh-100">
        <div className="col-12">
          Informacion de seteo de claves de usuarios no disponible
        </div>
      </div>
    </main>
  );

};

export default SetPassword;
