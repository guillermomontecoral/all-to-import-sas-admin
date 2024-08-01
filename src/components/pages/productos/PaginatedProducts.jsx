// import React, { useState, useEffect } from 'react';
// import { API_URL } from '../../../js/config';

// const PaginatedProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [pageSize] = useState(10);
//   const [totalRecords, setTotalRecords] = useState(0);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, [pageNumber]);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch(`${API_URL}Producto?numeroPagina=${pageNumber}&totalPaginas=${pageSize}`);
//       console.log('Response status:', response.status); // Depuración
//       console.log('Response headers:', response.headers); // Depuración

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const contentType = response.headers.get('content-type');
//       console.log('Content-Type:', contentType); // Depuración

//       if (!contentType || !contentType.includes('application/json')) {
//         throw new TypeError("Expected JSON response");
//       }

//       const data = await response.json();
//       console.log('Data:', data); // Depuración

//       if (data && data.data) {
//         setProducts(data.data);
//         setTotalRecords(data.totalRecords);
//       } else {
//         setProducts([]);
//         setTotalRecords(0);
//       }
//     } catch (error) {
//       console.error('Fetch error:', error);
//       setError(error.message);
//       setProducts([]);
//       setTotalRecords(0);
//     }
//   };

//   const handlePageChange = (newPageNumber) => {
//     setPageNumber(newPageNumber);
//   };

//   return (
//     <div>
//       {error && <div style={{ color: 'red' }}>Error: {error}</div>}
//       <ul>
//         {products.length > 0 ? (
//           products.map(product => (
//             <li key={product.id}>{product.nombre}</li>
//           ))
//         ) : (
//           <li>No products available</li>
//         )}
//       </ul>
//       <Pagination
//         currentPage={pageNumber}
//         totalRecords={totalRecords}
//         pageSize={pageSize}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// };

// const Pagination = ({ currentPage, totalRecords, pageSize, onPageChange }) => {
//   const totalPages = Math.ceil(totalRecords / pageSize);

//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       onPageChange(currentPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       onPageChange(currentPage + 1);
//     }
//   };

//   return (
//     <div>
//       <button
//         onClick={handlePrevious}
//         disabled={currentPage === 1}
//       >
//         Anterior
//       </button>
//       {[...Array(totalPages)].map((_, index) => (
//         <button
//           key={index}
//           onClick={() => onPageChange(index + 1)}
//           disabled={index + 1 === currentPage}
//         >
//           {index + 1}
//         </button>
//       ))}
//       <button
//         onClick={handleNext}
//         disabled={currentPage === totalPages}
//       >
//         Siguiente
//       </button>
//     </div>
//   );
// };

// export default PaginatedProducts;

import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Text,
  VStack,
  Button,
  Stack,
  useColorModeValue,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Select,
  Flex,
} from "@chakra-ui/react";
import { API_URL } from "../../../js/config";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useProductos } from "../../../hooks/useProductos";
import Cargando from "../../Cargando";
import { Link } from "react-router-dom";

const PaginatedProducts = () => {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(5);
  const [totalRecords, setTotalRecords] = useState(0);
  // const [error, setError] = useState(null);
  // const { productos } = useProductos();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [pageNumber]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `${API_URL}Producto/ProductosParaFuncionario?numeroPagina=${pageNumber}&totalPaginas=${pageSize}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new TypeError("Expected JSON response");
      }

      const data = await response.json();
      if (data && data.data) {
        setProducts(data.data);
        setTotalRecords(data.totalRecords);
      } else {
        setProducts([]);
        setTotalRecords(0);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      // setError(error.message);
      setProducts([]);
      setTotalRecords(0);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  return (
    <>
      <Box>
        {loading ? (
          <>
            <Box my={4}>
              <Cargando columns={8} rows={1} startColor="blue.600" />
            </Box>
            <Cargando
              columns={8}
              rows={5}
              height={"50px"}
              startColor="blue.300"
            />
          </>
        ) : products.length > 0 ? (
          <>
            <Flex justifyContent={'space-between'}>
              <Box mb={8}>
                <Heading>Productos</Heading>
              </Box>
              <Box>
                <Select borderColor={'black'} variant={"outline"} placeholder='Ordenar por...'>
                  <option>Por nombre</option>
                  <option>Precio Menor a mayor</option>
                  <option>Precio Mayor a menor</option>
                  <option>Stock Menor a mayor</option>
                  <option>Stock Mayor a menor</option>
                  <option>Habilitados</option>
                </Select>
              </Box>
            </Flex>
            <TableContainer>
              <Table variant="striped">
                <TableCaption>{totalRecords} productos en total</TableCaption>
                <Thead bg={"gray.500"}>
                  <Tr>
                    <Th color={"white"}>Código</Th>
                    <Th color={"white"}>Imagen</Th>
                    <Th color={"white"}>Nombre</Th>
                    <Th color={"white"}>Descripción</Th>
                    <Th color={"white"}>Precio</Th>
                    <Th color={"white"}>Categoría</Th>
                    <Th color={"white"}>Stock</Th>
                    <Th color={"white"}>Habilitado</Th>
                    <Th color={"white"}></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {products.map((producto) => (
                    <Tr key={producto.id}>
                      <Td>{producto.codigo}</Td>
                      <Td>
                        <Image
                          src={`data:image/jpeg;base64,${producto.imagen}`}
                          alt="Imagen actual"
                          boxSize="50px"
                          objectFit="contain"
                        />
                      </Td>
                      <Td
                        overflow={"hidden"}
                        whiteSpace={"break-spaces"}
                        textOverflow={"ellipsis"}
                        w={"15%"}
                      >
                        {producto.nombre}
                      </Td>
                      <Td
                        overflow={"hidden"}
                        whiteSpace={"break-spaces"}
                        textOverflow={"ellipsis"}
                        w={"35%"}
                      >
                        {producto.descripcion}
                      </Td>
                      <Td>$ {producto.precio}</Td>
                      <Td>{producto.categoria?.nombre || "Arreglar esto"}</Td>
                      <Td>{producto.stock}</Td>
                      <Td>Crear esto</Td>
                      <Td>
                        <Link to={`/editar-producto/${producto.id}`}>
                          Editar
                        </Link>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <Text>No productos disponibles para mostrar.</Text>
        )}
      </Box>
      <Box py={8}>
        <Pagination
          currentPage={pageNumber}
          totalRecords={totalRecords}
          pageSize={pageSize}
          onPageChange={handlePageChange}
        />
      </Box>
    </>
  );
};

// Componente de Paginación
const Pagination = ({ currentPage, totalRecords, pageSize, onPageChange }) => {
  const totalPages = Math.ceil(totalRecords / pageSize);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <Stack
      direction={{ base: "column", sm: "row" }}
      as="nav"
      aria-label="Pagination"
      spacing={2}
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <PaginationButton
          onClick={handlePrevious}
          isDisabled={currentPage === 1}
        >
          <IconArrowLeft />
        </PaginationButton>
      </Box>
      <Stack direction="row" spacing={2}>
        {[...Array(totalPages)].map((_, index) => (
          <PaginationButton
            key={index}
            onClick={() => onPageChange(index + 1)}
            isActive={index + 1 === currentPage}
          >
            {index + 1}
          </PaginationButton>
        ))}
      </Stack>
      <Box>
        <PaginationButton
          onClick={handleNext}
          isDisabled={currentPage === totalPages}
        >
          <IconArrowRight />
        </PaginationButton>
      </Box>
    </Stack>
  );
};

const PaginationButton = ({ children, isDisabled, isActive, ...props }) => {
  const activeStyle = {
    bg: useColorModeValue("gray.500", "gray.700"),
    color: "white",
  };

  return (
    <Button
      py={1}
      px={3}
      border="1px solid"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      rounded="md"
      _hover={!isDisabled && activeStyle}
      cursor={isDisabled ? "not-allowed" : "pointer"}
      {...(isActive && activeStyle)}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PaginatedProducts;
