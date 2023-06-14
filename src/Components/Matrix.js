import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Alert, Button  } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

const Matrix = ({ darkMode, changeComponent }) => {
  const [matrixData, setMatrixData] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [highlightedItem, setHighlightedItem] = useState(null);
  const [draggedItemPosition, setDraggedItemPosition] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const handleContinue = () => {
    const hasObjects = matrixData.some(row => row.some(item => item !== ''));
    if (hasObjects) {
      const items = [];
      matrixData.forEach((row) => {
        row.forEach((item) => {
          if (item !== '') {
            items.push(item);
          }
        });
      });
      setSelectedItems(items);
      changeComponent('InformacionFacturacion', { selectedImages: items });      
    } else {
      setAlertMessage('Debe cargar al menos un objeto en la matriz');
      setTimeout(() => {
        setAlertMessage('');
      }, 5000);
    }
  };
    const handleDrop = (targetRowIndex, targetColumnIndex, draggedItem) => {
    const updatedMatrix = [...matrixData];
    const isPositionEmpty = updatedMatrix[targetRowIndex][targetColumnIndex] === '';

    if (
      draggedItemPosition &&
      (draggedItemPosition.row !== targetRowIndex ||
        draggedItemPosition.column !== targetColumnIndex)
    ) {
      if (isPositionEmpty) {
        updatedMatrix[targetRowIndex][targetColumnIndex] = draggedItem;
        clearPreviousPosition(draggedItemPosition);
      } else {
        const tempItem = updatedMatrix[targetRowIndex][targetColumnIndex];
        updatedMatrix[targetRowIndex][targetColumnIndex] = draggedItem;
        updatedMatrix[draggedItemPosition.row][draggedItemPosition.column] = tempItem;
      }
    } else if (!draggedItemPosition) {
      if (isPositionEmpty) {
        updatedMatrix[targetRowIndex][targetColumnIndex] = draggedItem;
      } else {
        setAlertMessage('La posición de destino está ocupada');
        setTimeout(() => {
          setAlertMessage('');
        }, 5000);
      }
    }

    setMatrixData(updatedMatrix);
    clearDraggedItemPosition();
  };

  const clearDraggedItemPosition = () => {
    setDraggedItemPosition(null);
  };

  const clearPreviousPosition = (position) => {
    const updatedMatrix = [...matrixData];
    updatedMatrix[position.row][position.column] = '';
    setMatrixData(updatedMatrix);
  };

  const handleDragStart = (rowIndex, columnIndex) => {
    setDraggedItemPosition({ row: rowIndex, column: columnIndex });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e, rowIndex, columnIndex) => {
    e.preventDefault();
    setHighlightedItem({ rowIndex, columnIndex });
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setHighlightedItem(null);
  };

  const handleDragDrop = (e, rowIndex, columnIndex) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const image = event.target.result;
        handleDrop(rowIndex, columnIndex, image);
      };
      reader.readAsDataURL(file);
    } else {
      setAlertMessage('Debe arrastrar una imagen válida');
      setTimeout(() => {
        setAlertMessage('');
      }, 5000);
    }
  };
  
  const handleDelete = (rowIndex, columnIndex) => {
    const updatedMatrix = [...matrixData];
    updatedMatrix[rowIndex][columnIndex] = ''; // Eliminar el objeto estableciendo la posición como vacía
  
    setMatrixData(updatedMatrix); // Actualizar el estado de la matriz
  };

  return (
    <div>
      {alertMessage && (
        <Alert variant="danger" className="mt-3">
          {alertMessage}
        </Alert>
      )}
      <div className={`matrix ${darkMode ? 'bg-dark text-light' : ''}`}>
        {matrixData.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((item, columnIndex) => (
              <div
                key={columnIndex}
                className={`item ${highlightedItem && highlightedItem.row === rowIndex && highlightedItem.column === columnIndex ? 'highlighted' : ''}`}
                style={{ width: '100%', height: '200px' }}
                onDragOver={handleDragOver}
                onDragEnter={(e) => handleDragEnter(e, rowIndex, columnIndex)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDragDrop(e, rowIndex, columnIndex)}
                draggable={item !== ''}
                onDragStart={() => handleDragStart(rowIndex, columnIndex)}
              >
                <Card
                  style={{ width: '100%', height: '100%' }}
                  className={`card ${item ? 'has-image' : ''} ${highlightedItem && highlightedItem.row === rowIndex && highlightedItem.column === columnIndex ? 'highlighted' : ''}`}
                >
                  {item && (
                    <div className="card-img-wrapper ">
                        <Image src={item} alt="Image" className="card-img-top rounded" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        <div className="position-absolute top-0 end-0" style={{cursor:'pointer'}} title="Eliminar" onClick={() => handleDelete(rowIndex, columnIndex)}>
                            <i className={`fas fa-thin fa-trash text-danger`} size="2x" style={{ marginRight: '5px' }}></i>                        
                        </div>
                    </div>
                  )}
                    {!item && (
                        <div className="placeholder d-flex justify-content-center align-items-center" style={{ width: '100%', height: '100%', color: 'gray', backgroundColor: 'transparent' }}>
                    {rowIndex * row.length + columnIndex + 1}
                </div>        
                )}
                </Card>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Button variant="primary" onClick={handleContinue} className="mt-3">
        Continuar
      </Button>
      
    </div>
  );
};

export default Matrix;
