import { createContext, useEffect, useState } from "react";
import { obtenerProductos } from "../js/api/productos/obtenerProductos"

export const ProductosContext = createContext();

const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productos = await obtenerProductos();
        setProductos(productos);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <ProductosContext.Provider value={{ productos, loading, error }}>
      {children}
    </ProductosContext.Provider>
  );
};

export default ProductosProvider;
