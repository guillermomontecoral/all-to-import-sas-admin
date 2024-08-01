import { createContext, useState } from 'react';

export const FiltrosContext = createContext();

export const FiltrosProvider = ({ children }) => {
  const [filtros, setFiltros] = useState({
    precioDesde: 0,
    precioHasta: 0,
    categoria: 0,
    nombre: '',
    //orden: 'desc', // 'asc' para ascendente, 'desc' para descendente
  });

  return (
    <FiltrosContext.Provider value={{ filtros, setFiltros }}>
      {children}
    </FiltrosContext.Provider>
  );
};
