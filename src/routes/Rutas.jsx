import React, { Fragment, lazy, Suspense } from "react";
import { Outlet, Route } from "react-router-dom";
import { PATH_LOGIN } from "./paths";
import Cargando from "../components/Cargando";
import UsuarioProvider from "../context/UsuarioProvider";
import CategoriasProvider from "../context/CategoriasProvider";
import ProductosProvider from "../context/ProductosProvider";

export const renderizarRutas = (rutas) => {
  return rutas.map((ruta, index) => {
    const Component = ruta.element || Fragment;
    const Layout = ruta.layout || Fragment;
    const RutaProtegida = ruta.protected || Fragment;
    return (

            <Route
              key={index}
              path={ruta.path}
              element={
                <Suspense fallback={<Cargando />}>
                  <RutaProtegida>
                    <Layout>
                      {ruta.children ? <Outlet /> : <Component />}
                    </Layout>
                  </RutaProtegida>
                </Suspense>
              }
            >
              {ruta.children && renderizarRutas(ruta.children)}
            </Route>
    );
  });
};

export const rutas = [
  {
    path: PATH_LOGIN,
    element: lazy(async () => await import("../components/pages/Login")),
  },
  {
    path: "/panel-admin",
    layout: lazy(async () => await import("../components/layout/Dashboard")),
    protected: lazy(async () => await import("./RutasProtegidas")),
    children: [
      {
        path: "inicio",
        element: lazy(async () => await import("../components/pages/Inicio")),
      },
      {
        path: "productos",
        element: lazy(
          async () =>
            await import("../components/pages/productos/PaginatedProducts")
        ),
        // element: lazy(async () => await import("../components/pages/productos/Productos")),
      },
      {
        path: "editar-producto/:id",
        element: lazy(
          async () =>
            await import("../components/pages/productos/EditarProducto")
        ),
      },
      {
        path: "categorias",
        element: lazy(
          async () => await import("../components/pages/categorias/Categorias")
        ),
      },
      {
        path: "agregar-categoria",
        element: lazy(
          async () =>
            await import("../components/pages/categorias/AgregarCategoria")
        ),
      },
      {
        path: "editar-categoria/:id",
        element: lazy(
          async () =>
            await import("../components/pages/categorias/EditarCategoria")
        ),
      },
      {
        path: "ventas",
        element: lazy(
          async () =>
            await import("../components/pages/ventas/Ventas")
        ),
      },
      {
        path: "detalle-venta/:id",
        element: lazy(
          async () =>
            await import("../components/pages/ventas/DetalleVenta")
        ),
      },
      {
        path: "funcionarios",
        element: lazy(
          async () =>
            await import("../components/pages/funcionarios/Funcionarios")
        ),
      },
      {
        path: "registrar-funcionario",
        element: lazy(
          async () =>
            await import("../components/pages/funcionarios/Funcionarios")
        ),
      },
    ],
  },
  {
    path: "*",
    element: lazy(async () => await import("../components/pages/NotFound")),
  },
];
