import { API_URL } from '../../config';
export const obtenerCategoriaPorId = async (id) => {
  try {
    const response = await fetch(`${API_URL}Producto/CategoriaPorId/${id}`);
    const datos = await response.json();
  //  console.log(datos)
    return datos;

  } catch (error) {
    console.error("Error obteniendo los productos:", error);
    return []; // En caso de error, devuelve un array vacío o maneja el error de otra manera
  }
};