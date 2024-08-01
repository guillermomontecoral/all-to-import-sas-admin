import { API_URL } from '../../config';

export const obtenerComprasDelCliente = async (correoElectronico) => {
  console.log(correoElectronico)
  try {
    const response = await fetch(`${API_URL}Compra/ComprasCliente/${correoElectronico}`);
    const datos = await response.json();
    return datos;

  } catch (error) {
    console.error("Error compras cliente:", error);
    return []; // En caso de error, devuelve un array vacío o maneja el error de otra manera
  }

};