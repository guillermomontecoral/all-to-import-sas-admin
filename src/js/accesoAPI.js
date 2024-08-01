// const URL = import.meta.env.VITE_API_URL_AZURE;
// // const URL = import.meta.env.VITE_API_URL_LOCAL;

// import { jwtDecode } from "jwt-decode";

// /*Usuarios*/
// export const registrarUsuario = async (usuario) => {
//   const response = await fetch(`${URL}Usuario/Cliente`, {
//     method: "POST",
//     body: JSON.stringify(usuario),
//     headers: { "Content-type": "application/json" },
//   });

//   const data = await response.json();
//   if (response.status === 200) {
//     return data;
//   } else {
//     throw new Error(data || "Error en el registro");
//   }
// };

// export const login = async (usuario) => {
//   const response = await fetch(`${URL}Login`, {
//     method: "POST",
//     body: JSON.stringify(usuario),
//     headers: { "Content-type": "application/json" },
//   });

//   const data = await response.json();
//   if (response.status === 200) {
//     return data;
//   } else {
//     throw new Error(data || "Error en el login");
//   }
// };

// export const getIdUsuarioDesdeToken = () => {
//   const token = sessionStorage.getItem("token");
//   if (!token) return null;

//   const decodedToken = jwtDecode(token);
//   return decodedToken.sub; // El ID del usuario
// };

// // Uso del ID del usuario
// const userId = getIdUsuarioDesdeToken();
// console.log("User ID:", userId);

// export const getDatosUsuario = async () => {
//   try {
//     const response = await fetch(`${URL}Usuario/BuscarCliente/${getIdUsuarioDesdeToken()}`);
//     const datos = await response.json();
//     return datos;
//   } catch (error) {
//     console.error("Error obteniendo al usuario:", error);
//   }
// };

// // export const getDireccionUsuario = async () => {
// //   try {
// //     const response = await fetch(`${URL}Usuario/Direccion/${getIdUsuarioDesdeToken()}`);
// //     const datos = await response.json();
// //     return datos;
// //   } catch (error) {
// //     console.error("Error obteniendo las direcciones:", error);
// //     //return []; // En caso de error, devuelve un array vacío o maneja el error de otra manera
// //   }
// // };

// // console.log(getDireccionUsuario)

// /*Productos*/
// export const obtenerProductos = async () => {
//   try {
//     const response = await fetch(`${URL}Producto`);
//     if (!response.ok) {
//       throw new Error('Error al obtener los productos');
//     }
//     const datos = await response.json();
//     return datos;

//   } catch (error) {
//     console.error("Error obteniendo los productos:", error);
//     throw error; // En caso de error, devuelve un array vacío o maneja el error de otra manera
//   }
// };

// export const obtenerProductoPorId = async (id) => {
//   try {
//     const response = await fetch(`${URL}Producto/${id}`);
//     const datos = await response.json();
//   //  console.log(datos)
//     return datos;

//   } catch (error) {
//     console.error("Error obteniendo los productos:", error);
//     return []; // En caso de error, devuelve un array vacío o maneja el error de otra manera
//   }
// };

// export const obtenerProductoPorCategoria = async (id) => {
//   try {
//     const response = await fetch(`${URL}Producto/PorductosPorCategoria/${id}`);
//     const datos = await response.json();
//     return datos;

//   } catch (error) {
//     console.error("Error obteniendo los productos:", error);
//     return []; // En caso de error, devuelve un array vacío o maneja el error de otra manera
//   }
// };

// /*Filtros*/
// export const buscarPorTextoEnNombre = async (filtro) => {
//   try {
//     const response = await fetch(`${URL}Producto/filtrar/${filtro}`);
//     const datos = await response.json();
//    // console.log(datos)
//     return datos;

//   } catch (error) {
//     console.error("Error obteniendo los productos:", error);
//     return []; // En caso de error, devuelve un array vacío o maneja el error de otra manera
//   }
// };


// /*Categorias*/
// //Aun no se esta usando
// // export const crearCategoria = async (categoria) => {
// //   const response = await fetch(`${URL}Producto/AltaCategoria`, {
// //     method: "POST",
// //     body: JSON.stringify(categoria),
// //     headers: { "Content-type": "application/json" },
// //   });

// //   const data = await response.json();
// //   if (response.status === 200) {
// //     return data;
// //   } else {
// //     throw new Error(data || "Error en el login");
// //   }
// // }

// export const obtenerCategorias = async () => {
//   try {
//     const response = await fetch(`${URL}Producto/Categorias`);
//     const datos = await response.json();
//   //  console.log(datos)
//     return datos;

//   } catch (error) {
//     console.error("Error obteniendo los productos:", error);
//     return []; // En caso de error, devuelve un array vacío o maneja el error de otra manera
//   }
// };

// export const obtenerCategoriaPorId = async (id) => {
//   try {
//     const response = await fetch(`${URL}Producto/CategoriaPorId/${id}`);
//     const datos = await response.json();
//   //  console.log(datos)
//     return datos;

//   } catch (error) {
//     console.error("Error obteniendo los productos:", error);
//     return []; // En caso de error, devuelve un array vacío o maneja el error de otra manera
//   }
// };


// /*Compras*/
// export const obtenerComprasDelCliente = async (correoElectronico) => {
//   console.log(correoElectronico)
//   try {
//     const response = await fetch(`${URL}Compra/ComprasCliente/${correoElectronico}`);
//     const datos = await response.json();
//     return datos;

//   } catch (error) {
//     console.error("Error compras cliente:", error);
//     return []; // En caso de error, devuelve un array vacío o maneja el error de otra manera
//   }

// };

// export const obtenerCompras = async () => {
//   try {
//     const response = await fetch(`${URL}Compra`);
//     const datos = await response.json();
//     return datos;

//   } catch (error) {
//     console.error("Error compras:", error);
//     return []; // En caso de error, devuelve un array vacío o maneja el error de otra manera
//   }

// };


