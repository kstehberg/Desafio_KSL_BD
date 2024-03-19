// src/components/Alert.jsx
import React from 'react';

const Alert = ({ mensaje, tipo }) => {
  if (!mensaje) return null; // No renderizar nada si no hay mensaje

  return (
    <div className={`alert ${tipo === 'success' ? 'alert-success' : 'alert-danger'}`} role="alert">
      {mensaje}
    </div>
  );
};

export default Alert;