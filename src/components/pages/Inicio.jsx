import React, { useEffect, useState } from "react";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import VentasPendientesEnvioCard from "../cards/VentasPendientesEnvioCard";
import ProductosSinStokCard from "../cards/ProductosSinStokCard";
import TotalVentasCard from "../cards/TotalVentasCard";

const Inicio = () => {
  // const navigate = useNavigate();
  // const [compras, setCompras] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const productos = await obtenerCompras();
  //     setCompras(productos);
  //     setLoading(false);
  //   };

  //   fetchData();
  // }, []);

  // console.log(compras)
  return (
    <>
      <Flex gap={8} justifyContent={'space-around'}>
        {/* <VentasPendientesEnvioCard />
        <ProductosSinStokCard />
        <TotalVentasCard/> */}
      </Flex>
    </>
  );
};

export default Inicio;
