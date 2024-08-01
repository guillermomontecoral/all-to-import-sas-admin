// src/pages/NotFound.jsx
import React from "react";
import { Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={9}
      justifyContent="center"
      alignItems="center"
      minH="50vh"
      textAlign="center"
      py={10}
      px={6}
    >
      {/* <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text"
      >
        404
      </Heading> */}
      <Box boxSize={"md"} px={4}>
        <Image src="/img/404-page-not-found-1-24.svg" alt="Imagen de error 404 Page Not Found" objectFit={"cover"} />
      </Box>
      <Text fontSize={"xl"} color={"gray.500"} my={3}>
        La página que estás buscando parece que no existe.
      </Text>
      <Button
        bg="#8fe5f8"
        color="black"
        variant="solid"
        _hover={{
          bg : "#68e1fd"
        }}
      >
        {/* Aca validar si es admin o cliente para enviarlo a distintos lados */}
        <Link to="/">Ir a la página principal</Link>
      </Button>
    </Box>
  );
};

export default NotFound;
