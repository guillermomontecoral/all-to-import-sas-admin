import { API_URL } from '../../config';

export const obtenerProductoPorId = async (id) => {
  try {
    const response = await fetch(`${API_URL}Producto/${id}`);
    const datos = await response.json();
  //  console.log(datos)
    return datos;

  } catch (error) {
    console.error("Error obteniendo los productos:", error);
    return []; // En caso de error, devuelve un array vacío o maneja el error de otra manera
  }
};