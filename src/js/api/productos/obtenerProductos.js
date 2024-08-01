import { API_URL } from '../../config';

export const obtenerProductos = async () => {
  try {
    const response = await fetch(`${API_URL}Producto/ProductosParaFuncionario`);
    if (!response.ok) {
      throw new Error('Error al obtener los productos');
    }
    const datos = await response.json();
    return datos;

  } catch (error) {
    console.error("Error obteniendo los productos:", error);
    throw error; // En caso de error, devuelve un array vacío o maneja el error de otra manera
  }
};
