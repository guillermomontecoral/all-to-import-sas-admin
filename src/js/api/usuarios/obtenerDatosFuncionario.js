import { API_URL } from "../../config";
import { jwtDecode } from "jwt-decode";

export const getIdUsuarioDesdeToken = () => {
  const token = sessionStorage.getItem("token");
  if (!token) return null;

  const decodedToken = jwtDecode(token);
  return decodedToken.sub; // El ID del usuario
};

// Uso del ID del usuario
const userId = getIdUsuarioDesdeToken();
console.log("User ID:", userId);

export const obtenerDatosFuncionario = async () => {
  try {
    const usuarioId = getIdUsuarioDesdeToken();

    const response = await fetch(
      `${API_URL}Usuario/BuscarFuncionario/${usuarioId}`
    );
    const datos = await response.json();
    return datos;
  } catch (error) {
    console.error("Error obteniendo al usuario:", error);
  }
};
