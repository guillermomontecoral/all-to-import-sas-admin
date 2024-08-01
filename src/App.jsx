import { useState } from "react";
// import PanelAdministrador from "./components/administrador/layout/PanelAdministrador";
import Login from "./components/pages/Login";
import Dashboard from "./components/layout/Dashboard";
import { AutenticacionProvider } from "./context/AutenticacionProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductosProvider from "./context/ProductosProvider";
import { renderizarRutas, rutas } from "./routes/Rutas";
import UsuarioProvider from "./context/UsuarioProvider";
import CategoriasProvider from "./context/CategoriasProvider";
// import Dashboard from "./components/administrador/layout/Dashboard";
// import Categorias from "./components/administrador/Categorias";
// import AgregarCategoria from "./components/administrador/AgregarCategoria";
// import EditarCategoria from "./components/administrador/EditarCategoria";
// import EditarProducto from "./components/administrador/EditarProducto";
// import ListaProductos from "./components/administrador/ListaProductos";
// import Ventas from "./components/administrador/Ventas";
// import DetalleVenta from "./components/administrador/DetalleVenta";

/*** PROVIDERS ***/
// import { ModalProvider } from "./context/ModalProvider.jsx";
// import CategoriasProvider from "./context/CategoriasProvider.jsx";
// import ProductosProvider from "./context/ProductosProvider.jsx";
// import { FiltrosProvider } from "./context/FiltrosProvider.jsx";

/*** RUTAS ***/
// import RutasConLayouts from "./routes/RutasConLayouts.jsx";
// import { Route, Router, Routes } from "react-router-dom";

const App = () => {
  return (
    // <Router>
    //   <ModalProvider>
    //     <CategoriasProvider>
    //       <ProductosProvider>
    //         <FiltrosProvider>
    //           <Routes>
    //             <Route path="/" element={<PanelAdministrador />} />
    //           </Routes>
    //         </FiltrosProvider>
    //       </ProductosProvider>
    //     </CategoriasProvider>
    //   </ModalProvider>
    // </Router>
    <Router>
      <AutenticacionProvider>
        {/* <UsuarioProvider>
          <CategoriasProvider>
            <ProductosProvider> */}
              <Routes>
                {/* <Route path="/" element={<Login />} />
            <Route path="/panel-admin" element={<Dashboard />} />
            <Route path="/panel-admin/inicio" element={<Inicio />} /> */}
                {renderizarRutas(rutas)}
              </Routes>
            {/* </ProductosProvider>
          </CategoriasProvider>
        </UsuarioProvider> */}
      </AutenticacionProvider>
    </Router>
  );
};

export default App;
