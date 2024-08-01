import { API_URL } from "../../config";

export const accesoLogin = async (usuario) => {
  const response = await fetch(`${API_URL}Login`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(usuario),
    // credentials: 'include'  // Esto asegura que las cookies se envíen y se reciban

  });

  const data = await response.json();
  if (response.status === 200) {
    console.log(data);
    return data;
  } else {
    throw new Error(data || "Error en el login");
  }
};
