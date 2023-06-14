import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Resumen = ({ darkMode, changeComponent, selectedImages }) => {
  const mainClasses = darkMode ? 'bg-dark text-light container-fluid' : 'bg-light text-dark container-fluid';
  const data = selectedImages.selectedImages;
  const imagenes = data.Imagenes.selectedImages;

  return (
    <main className={`main-section ${mainClasses}`}>
      <div className="row vh-100">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <Card className="row vh-100">
            <Card.Body>
              <h2>Resumen de Facturación</h2>
              <Row>
                <Col>
                  <p>Tipo de Identificación: {data.TipoIdentificacion}</p>
                  <p>Número de Identificación: {data.NumeroIdentificacion}</p>
                  <p>Nombres: {data.Nombres}</p>
                  <p>Apellidos: {data.Apellidos}</p>
                  <p>Dirección: {data.Direccion}</p>
                  <p>Teléfono: {data.Telefono}</p>
                  <p>Email: {data.Email}</p>
                </Col>
                <Col>
                  <Carousel>
                    {imagenes.map((image, index) => (
                      <Carousel.Item key={index}>
                        <img src={image} className="d-block w-100" style={{ objectFit: 'contain' }} alt={`Image ${index}`} />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Resumen;
