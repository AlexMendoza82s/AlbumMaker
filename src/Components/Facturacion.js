import React, { useState } from 'react';
import { Card, Form, Alert, Button, Tab, Tabs } from 'react-bootstrap';

const InformacionFacturacion = ({ darkMode, changeComponent, selectedImages }) => {
  const mainClasses = darkMode ? 'bg-dark text-light container-fluid' : 'bg-light text-dark container-fluid';
  const [activeTab, setActiveTab] = useState('tab1');
  const [email1, setEmail1] = useState('');
  const [email2, setEmail2] = useState('');
  const [telefono1, setTelefono1] = useState('');
  const [telefono2, setTelefono2] = useState('');
  const [InfoFacturacion, setInfoFacturacion] = useState(false);
  const [isFieldValidated, setFieldValidated] = useState({});
  const [errorFields, setErrorFields] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleInfoFacturacion = () => {
    setInfoFacturacion(!InfoFacturacion);
    if (!InfoFacturacion) {
      document.getElementById('cboTipoIdentificacion1').value=document.getElementById('cboTipoIdentificacion').value;
      document.getElementById('txtTipoIdentificacion1').value=document.getElementById('txtTipoIdentificacion').value;
      document.getElementById('txtNombres1').value=document.getElementById('txtNombres').value;
      document.getElementById('txtApellidos1').value=document.getElementById('txtApellidos').value;
      document.getElementById('txtEmail1').value=document.getElementById('txtEmail').value;
      document.getElementById('txtTelefono1').value=document.getElementById('txtTelefono').value;
      document.getElementById('txtDireccion1').value=document.getElementById('txtDireccion').value;
      setEmail2(document.getElementById('txtEmail1').value);
      setTelefono2(document.getElementById('txtTelefono1').value)
    }
  };


  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validateNumber = (value) => {
    const numberRegex = /^\d+$/;
    return numberRegex.test(value);
  };

  const validateText = (value) => {
    return value.trim() !== '';
  };

  const validateField = (value, required, type) => {
    if (required && value.trim() === '') {
      return false; // Campo obligatorio y vacío, no es válido
    }
    if (required && type === 'email' && !validateEmail(value)) {
      return false; // Campo obligatorio y no cumple con la validación de correo electrónico, no es válido
    }
    if (required && type === 'number' && !validateNumber(value)) {
      return false; // Campo obligatorio y no cumple con la validación de número, no es válido
    }
    if (required && type === 'text' && !validateText(value)) {
      return false; // Campo obligatorio y está vacío o contiene solo espacios en blanco, no es válido
    }
    return true; // Campo válido
  };

  const handleChangeEmail1 = (event) => {
    const value = event.target.value;
    setEmail1(value);
  };

  const handleChangeTelefono1 = (event) => {
    setTelefono1(event.target.value);
  };

  const handleChangeEmail2 = (event) => {
    const value = event.target.value;
    setEmail2(value);
  };

  const handleChangeTelefono2 = (event) => {
    setTelefono2(event.target.value);
  };


  const handleBlur = (event) => {
    const fieldId = event.target.id;
    const fieldValue = event.target.value;
    const isRequired = event.target.required;
    const fieldType = event.target.getAttribute('data-field-type');
    const isValid = validateField(fieldValue, isRequired, fieldType);

    setFieldValidated((prevValidation) => ({
      ...prevValidation,
      [fieldId]: isValid,
    }));

    setErrorFields((prevErrorFields) => {
      if (isRequired && !isValid) {
        return [...prevErrorFields, fieldId];
      } else {
        return prevErrorFields.filter((errorField) => errorField !== fieldId);
      }
    });
  };
  const handleBlurAll = () => {
    const fields = document.querySelectorAll('[onBlur]');
    fields.forEach((field) => {
      field.dispatchEvent(new Event('blur', { bubbles: true }));
    });
  };  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleBlurAll();
    if (!validateForm()) {
      const formData = {
        TipoIdentificacion: document.getElementById('cboTipoIdentificacion1').value,
        NumeroIdentificacion: document.getElementById('txtTipoIdentificacion1').value,
        Nombres: document.getElementById('txtNombres1').value,
        Apellidos: document.getElementById('txtApellidos1').value,
        Email: email2,
        Telefono: telefono2,
        Direccion: document.getElementById('txtDireccion1').value,
        Imagenes: selectedImages
      };
      changeComponent('Resumen', { selectedImages: formData });      
    } else {
      setAlertMessage('No es posible continuar, no se han cargado todos los datos');
      setTimeout(() => {
        setAlertMessage('');
      }, 5000);
    }
  };  
   
  
  const validateForm = () => {
    const isValid = Object.values(isFieldValidated).every((field) => field);
    setIsFormValid(isValid);
  };

  return (
    <main className={`main-section ${mainClasses}`}>
      <div className="row vh-100 align-items-start pt-4">
        {alertMessage && (
          <Alert variant="danger" className="mt-3">
            {alertMessage}
          </Alert>
        )}
        <div className="col-12 d-flex justify-content-center">
          <Form onSubmit={handleSubmit}>
            <Tabs activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
              <Tab eventKey="tab1" title="Informacion de Facturacion" style={{ border: '1px solid #ccc', borderRadius: '5px' }}>
                <Card style={{ width: '100%' }} className="custom-card">
                  <Card.Body>
                    <Form.Group>
                      <Form.Label>Tipo de Identificación</Form.Label>
                      <Form.Control name="cboTipoIdentificacion" id="cboTipoIdentificacion" as="select" defaultValue="" required onBlur={handleBlur} className={`${isFieldValidated['cboTipoIdentificacion'] === false ? 'is-invalid' : ''}`}>
                        <option value="" disabled hidden>
                          Seleccione un tipo
                        </option>
                        <option value="cedula">Cédula</option>
                        <option value="pasaporte">Pasaporte</option>
                        <option value="licencia">Licencia de conducir</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Numero de Identificacion</Form.Label>
                      <Form.Control name="txtTipoIdentificacion" maxLength={15} id="txtTipoIdentificacion" type="text" placeholder="Ingrese su numero de identificacion" required onBlur={handleBlur} className={`${isFieldValidated['txtTipoIdentificacion'] === false ? 'is-invalid' : ''}`} data-field-type="text" />
                    </Form.Group>
                    <Form.Group >
                      <Form.Label>Nombres</Form.Label>
                      <Form.Control maxLength={30} id="txtNombres" type="text" placeholder="Ingrese sus nombres" required onBlur={handleBlur} className={`${isFieldValidated['txtNombres'] === false ? 'is-invalid' : ''}`} data-field-type="text" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Apellidos</Form.Label>
                      <Form.Control name="txtApellidos" maxLength={30} id="txtApellidos" type="text" placeholder="Ingrese sus apellidos" required onBlur={handleBlur} className={`${isFieldValidated['txtApellidos'] === false ? 'is-invalid' : ''}`} data-field-type="text" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Correo Electrónico</Form.Label>
                      <Form.Control name="txtEmail" maxLength={25} id="txtEmail" type="text" placeholder="Ingrese su correo electrónico" value={email1} onChange={handleChangeEmail1} required onBlur={handleBlur} className={`${isFieldValidated['txtEmail'] === false ? 'is-invalid' : ''}`} data-field-type="email" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Teléfono</Form.Label>
                      <Form.Control name="txtTelefono" maxLength={15} id="txtTelefono" type="text" placeholder="Ingrese su número de teléfono" value={telefono1} onChange={handleChangeTelefono1} required onBlur={handleBlur} className={`${isFieldValidated['txtTelefono'] === false ? 'is-invalid' : ''}`} data-field-type="number" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Check name="chkFacturacion" type="switch" id="chkFacturacion" label="Usar la misma informacion para facturacion" checked={InfoFacturacion} onChange={handleInfoFacturacion} className="pt-3 pb-3" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Dirección</Form.Label>
                      <Form.Control name="txtDireccion" id="txtDireccion" style={{height :'100px'}} maxLength={300} as="textarea" rows={3} placeholder="Ingrese su dirección" required data-field-type="text" />
                    </Form.Group>
                  </Card.Body>
                </Card>
              </Tab>
              <Tab eventKey="tab2" title="Informacion de Entrega" style={{ border: '1px solid #ccc', borderRadius: '5px' }} >
                <Card style={{ width: '100%' }} className="custom-card">
                  <Card.Body>
                    <Form.Group>
                      <Form.Label>Tipo de Identificación</Form.Label>
                      <Form.Control name="cboTipoIdentificacion1" id="cboTipoIdentificacion1" as="select" defaultValue="" required onBlur={handleBlur} className={`${isFieldValidated['cboTipoIdentificacion1'] === false ? 'is-invalid' : ''}`} data-field-type="text">
                        <option value="" disabled hidden>
                          Seleccione un tipo
                        </option>
                        <option value="cedula">Cédula</option>
                        <option value="pasaporte">Pasaporte</option>
                        <option value="licencia">Licencia de conducir</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Numero de Identificacion</Form.Label>
                      <Form.Control name="txtTipoIdentificacion1" maxLength={15} id="txtTipoIdentificacion1" type="text" placeholder="Ingrese su numero de identificacion" required onBlur={handleBlur} className={`${isFieldValidated['txtTipoIdentificacion1'] === false ? 'is-invalid' : ''}`} data-field-type="text" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Nombres</Form.Label>
                      <Form.Control name="txtNombres1" maxLength={30} id="txtNombres1" type="text" placeholder="Ingrese sus nombres" required onBlur={handleBlur} className={`${isFieldValidated['txtNombres1'] === false ? 'is-invalid' : ''}`} data-field-type="text" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Apellidos</Form.Label>
                      <Form.Control name="txtApellidos1" maxLength={30} id="txtApellidos1" type="text" placeholder="Ingrese sus apellidos" required  onBlur={handleBlur} className={`${isFieldValidated['txtApellidos1'] === false ? 'is-invalid' : ''}`} data-field-type="text" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Correo Electrónico</Form.Label>
                      <Form.Control name="txtEmail1" maxLength={25} id="txtEmail1" type="text" placeholder="Ingrese su correo electrónico" value={email2} onChange={handleChangeEmail2} required onBlur={handleBlur} className={`${isFieldValidated['txtEmail1'] === false ? 'is-invalid' : ''}`} data-field-type="email" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Teléfono</Form.Label>
                      <Form.Control name="txtTelefono1" maxLength={15} id="txtTelefono1" type="text" placeholder="Ingrese su número de teléfono" value={telefono2} onChange={handleChangeTelefono2} required onBlur={handleBlur} className={`${isFieldValidated['txtTelefono1'] === false ? 'is-invalid' : ''}`} data-field-type="number" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Dirección</Form.Label>
                      <Form.Control name="txtDireccion1" id="txtDireccion1" maxLength={300} style={{height :'100px'}} as="textarea" rows={3} placeholder="Ingrese su dirección" required onBlur={handleBlur} className={`${isFieldValidated['txtDireccion1'] === false ? 'is-invalid' : ''}`} data-field-type="text" />
                    </Form.Group>
                  </Card.Body>
                </Card>
              </Tab>
            </Tabs>
            <div className="d-flex justify-content-center mt-4 mb-4">
              <Button variant="primary" type="submit">
                Resumen del Pedido
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default InformacionFacturacion;
