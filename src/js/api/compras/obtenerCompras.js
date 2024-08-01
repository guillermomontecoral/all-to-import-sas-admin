import { API_URL } from '../../config';

export const obtenerCompras = async () => {
  try {
    const response = await fetch(`${API_URL}Compra`);
    const datos = await response.json();
    return datos;

  } catch (error) {
    console.error("Error compras:", error);
    return []; // En caso de error, devuelve un array vacío o maneja el error de otra manera
  }

};