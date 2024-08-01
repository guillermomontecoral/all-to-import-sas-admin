import React, { createContext, useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { accesoLogin } from "../js/api/usuarios/login";
import { registrarCliente } from "../js/api/usuarios/cliente/registrarCliente";

export const AutenticacionContext = createContext();

export function AutenticacionProvider({ children }) {
  const [estaAutenticado, setEstaAutenticado] = useState(false);
  const [esAdmin, setEsAdmin] = useState(false);
  const [error, setError] = useState("");
  const toast = useToast();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    let admin = JSON.parse(sessionStorage.getItem("admin")) || false;
    if (token) {
      setEstaAutenticado(true);
    }
    if (admin) {
      setEsAdmin(admin);
    }
  }, []);

  const login = async (usuario) => {
    setError("")
    try {
      const datos = await accesoLogin(usuario);
      if (!datos.esAdmin) {
        // Suponiendo que el atributo que indica si es admin es `esAdmin`
        throw new Error("No puedes acceder a este sitio.");
      }

      console.log("Login realizado con éxito");
      sessionStorage.setItem("token", JSON.stringify(datos.token));
      sessionStorage.setItem("admin", JSON.stringify(datos.esAdmin));
      setEstaAutenticado(true);
      setEsAdmin(datos.esAdmin);
      // toast({
      //   title: "Inicio de sesión exitoso",
      //   description: "Bienvenido",
      //   status: "success",
      //   duration: 5000,
      //   isClosable: true,
      //   position: 'top'
      // });

      return true; // Indica que el login fue exitoso
    } catch (e) {
      console.error("ERROR EN EL LOGIN:", e);

      if (e instanceof TypeError) {
        setError("Error de conexión, por favor vuelva a intentarlo.");
      } else if (e.message) {
        setError(e.message);
      }

      // toast({
      //   title: "Error al iniciar sesión",
      //   description:mensajeError,
      //   status: "error",
      //   duration: 5000,
      //   isClosable: true,
      //   position: 'top'
      // });

      return false; // Indica que hubo un error en el login
    }
  };

  // const registrarClienteModal = async (usuario) => {
  //   try {
  //     // const datos = await registrarUsuario(usuario);
  //     const datos = await registrarCliente(usuario);
  //     console.log("Alta realizada con éxito: " + datos);

  //     toast({
  //       title: "Registro exitoso",
  //       description: "Tu cuenta ha sido creada con éxito",
  //       status: "success",
  //       duration: 5000,
  //       isClosable: true,
  //     });

  //     return true; // Indica que el login fue exitoso
  //   } catch (e) {
  //     console.error("ERROR EN EL LOGIN:", e);
  //     toast({
  //       title: "Error en el registro",
  //       description: e.message || "Ocurrió un error al crear tu cuenta",
  //       status: "error",
  //       duration: 5000,
  //       isClosable: true,
  //     });

  //     return false; // Indica que hubo un error en el login
  //   }
  // };

  // const registrarseClienteModal1 = (usuario) => {
  //   const fetchPromise = registrarUsuario(usuario)
  //     .then((datos) => {
  //       console.log("Alta realizada con éxito");
  //       return datos;
  //     })
  //     .catch((e) => {
  //       console.log("ERROR: " + e);
  //       throw e.message;
  //     });

  //   toast.promise(fetchPromise, {
  //     success: {
  //       title: "Registro exitoso",
  //       description: "Tu cuenta ha sido creada con éxito",
  //     },
  //     error: {
  //       title: "Error en el registro",
  //       description: "Ocurrió un error al crear tu cuenta",
  //     },
  //     loading: {
  //       title: "Creando su cuenta",
  //       description: "Por favor espera",
  //     },
  //   });
  // };

  const logout = () => {
    sessionStorage.removeItem("admin");
    sessionStorage.removeItem("token");
    setEstaAutenticado(false);
    setEsAdmin(false);
  };

  return (
    <AutenticacionContext.Provider
      value={{ estaAutenticado, esAdmin, login, logout, error }}
    >
      {children}
    </AutenticacionContext.Provider>
  );
}
