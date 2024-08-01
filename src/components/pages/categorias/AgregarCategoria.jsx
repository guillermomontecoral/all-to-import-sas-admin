import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Cargando from "../../Cargando";

const AgregarCategoria = () => {
  const [categoria, setcategoria] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Heading>Agrgar una nueva categoría</Heading>
      <Box as="form" onSubmit={handleSubmit} m={10}>
        <Grid w={"50%"} gap={6}>
          <GridItem>
            <FormControl isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input
                type="text"
                placeholder="Ingrese un nombre"
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Descripción</FormLabel>
              <Textarea
                type="text"
                placeholder="Ingrese una descripción"
                minH={"150px"}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </FormControl>
            {/* </Grid> */}
          </GridItem>
          <GridItem>
            <Button colorScheme={"teal"} type="submit">
              Guardar cambios
            </Button>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default AgregarCategoria;
