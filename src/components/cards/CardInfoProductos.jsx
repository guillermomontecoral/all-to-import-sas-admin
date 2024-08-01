import React from 'react'
import {
  chakra,
  VStack,
  HStack,
  Text,
  Container,
  Box,
  Icon,
  Button,
  SimpleGrid,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";

const CardInfoProductos = () => {
  return (
    <Box
      // minW={{ base: "xs", sm: "xs", lg: "sm" }}
      w="md"
      rounded="md"
      bgGradient={"linear(to-r, #85a2af, #00b7ffdc)"}
      boxShadow="md"
      color={'white'}
      my={3}
      p={6}
    >
      <Box textAlign="center">
        <Heading fontSize="2xl" fontWeight={500} minH={20}>
          Ventas totales
        </Heading>
        <Box fontSize="7xl" fontWeight="bold">
          <Text>{compras.length}</Text>
        </Box>
        <Button
          variant={"outline"}
          colorScheme="white"
          size="md"
          onClick={() => navigate("/ventas")}
        >
          Ir a las ventas
        </Button>
      </Box>
    </Box>
  )
}

export default CardInfoProductos