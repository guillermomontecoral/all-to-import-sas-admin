import React, { useEffect, useState } from 'react'
import {
  Box,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Link, useNavigate } from 'react-router-dom'
import Cargando from '../../Cargando';
import {obtenerCompras} from "../../../js/api/compras/obtenerCompras"
const Ventas = () => {
  const navigate = useNavigate();
  const [compras, setCompras] = useState([])
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchData = async () => {
      const productos = await obtenerCompras();
      setCompras(productos);
      setLoading(false);
    };

    fetchData();
  }, []);

  function formatearFecha(fechaISO) {
    const fecha = new Date(fechaISO);
    
    // Obtener las partes de la fecha
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0'); // getMonth() devuelve el mes en base 0
    const anio = fecha.getFullYear();
    const horas = String(fecha.getHours()).padStart(2, '0');
    const minutos = String(fecha.getMinutes()).padStart(2, '0');
    const segundos = String(fecha.getSeconds()).padStart(2, '0');
    
    // Formatear la fecha y hora
    return `${dia}-${mes}-${anio} ${horas}:${minutos}:${segundos}`;
  }

  console.log(compras)
  return (
    <>
          {loading ? (
        <>
        <Box my={4}>
          <Cargando columns={6} rows={1} startColor="blue.600" />
          </Box>
          <Cargando columns={6} rows={5} startColor="blue.300" />
        </>
      ) : (
        <TableContainer>
          <Table variant="striped">
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead  bg={"gray.500"}>
              <Tr>
                <Th color={"white"}>Id de compra</Th>
                <Th color={"white"}>Fecha de compra</Th>
                {/* <Th color={"white"}>Cantidad de productos</Th> */}
                {/* <Th color={"white"}>Total comprado</Th> */}
                <Th color={"white"}>Tipo de entrega</Th>
                <Th color={"white"}>Estado</Th>
                <Th color={"white"}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {compras.map((compra) => (
                <Tr key={compra.id}>
                  <Td>{compra.id}</Td>
                  <Td>{formatearFecha(compra.fechaCompra)}</Td>
                  {/* <Td>{compra.itemsCompra.length}</Td> */}
                  {/* <Td>$ {compra.totalComprado}</Td>  */}
                  <Td>{compra.entrega.tipo === "RetiroCompra" ? "Retiro en persona" : "Envío a domicilio"}</Td>
                  <Td>Estado...</Td>
                  <Td>
                    <Link to={`/panel-admin/detalle-venta/${compra.id}`}>
                      Ver más
                    </Link>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  )
}

export default Ventas