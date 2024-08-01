import React from 'react'
import { useParams } from 'react-router-dom';

const DetalleVenta = () => {
  const { id } = useParams();

  return (
    <div>DetalleVenta</div>
  )
}

export default DetalleVenta