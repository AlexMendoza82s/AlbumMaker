import React from 'react';
import Matrix from './Matrix';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = ({ darkMode, changeComponent }) => {
  const mainClasses = darkMode ? 'bg-dark text-light container-fluid' : 'bg-light text-dark container-fluid';
  return (
    <main className={`main-section ${mainClasses}`}>
      <div className="row vh-100">
        <div className="col-12">
          <Matrix darkMode={darkMode} changeComponent={changeComponent}/>
        </div>
      </div>
    </main>
  );
};

export default Main;

