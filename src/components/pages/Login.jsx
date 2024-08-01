import { useEffect, useRef, useState } from "react";
import Logo from "/img/all-to-import-logo.png";
import {
  Container,
  FormControl,
  Input,
  Stack,
  Button,
  Heading,
  VStack,
  Checkbox,
  Link,
  FormLabel,
  Flex,
  Box,
  Image,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { IconXboxX } from "@tabler/icons-react";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const { login, logout, esAdmin, error } = useAuth();
  const [loading, setLoading] = useState(false); // Añadir estado loading
  const navigate = useNavigate();
  const [captchaToken, setCaptchaToken] = useState(null);
  const captcha = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const usuario = {
        correo,
        clave,
        captchaToken: captchaToken || "",
      };

      const loginExitoso = await login(usuario);
      console.log(loginExitoso);
      console.log(esAdmin);
      if (loginExitoso) {
        navigate("/panel-admin/inicio");
      }
    } catch (e) {
      console.error("Error al iniciar sesión:", e);
      captcha.current.reset(); // Resetea el reCAPTCHA en caso de error
      setCaptchaToken(null);
    } finally {
      setLoading(false);
    }
  };

  const handleReCaptcha = () => {
    console.log("hubo un click en recaptcha");

    setCaptchaToken(captcha.current.getValue());
  };

  useEffect(() => {
    setCorreo("");
    setClave("");
    setCaptchaToken(null); // Resetea el token cuando el modal se cierra
  }, []);
  return (
    <Container maxW="7xl" h={"100vh"} p={{ base: 5, md: 10 }}>
      <Flex align="center" justify="center" h="100%" flexDirection={"column"}>
        <Flex align="center" justifyContent={"space-between"} gap={2}>
          <Box>
            <Image boxSize="200px" src={Logo} alt="Dan Abramov" />
          </Box>
          <Heading textTransform={"uppercase"} fontSize="3xl">
            All To Import SAS - Administración
          </Heading>
        </Flex>
        <Stack spacing={4} align="center">
          <Stack spacing={10} align="center">
            <Box>
              <Heading fontSize="xl">Ingresar al sistema</Heading>
            </Box>
          </Stack>
          <VStack
            as="form"
            spacing={8}
            w={{ base: "sm", sm: "lg" }}
            p={{ base: 5, sm: 6 }}
            onSubmit={handleSubmit}
          >
            {" "}
            {loading ? (
              <Flex justifyContent="center" alignItems="center">
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              </Flex>
            ) : (
              <>
                <VStack spacing={6} w="100%">
                  <FormControl id="email" isRequired>
                    <FormLabel m={0}>Correo Electrónico</FormLabel>
                    <Input
                      type="email"
                      placeholder="Ingrese su correo electrónico"
                      variant="flushed"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                      // onClick={handleClick}
                    />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel m={0}>Contraseña</FormLabel>
                    <Input
                      type="password"
                      placeholder="Ingrese su contraseña"
                      variant="flushed"
                      value={clave}
                      onChange={(e) => setClave(e.target.value)}
                    />
                  </FormControl>
                </VStack>
                <VStack w="100%">
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    w="100%"
                  >
                    <Checkbox colorScheme="green" size="md">
                      Recordar mis datos
                    </Checkbox>
                    <Link fontSize={{ base: "md", sm: "md" }}>
                      ¿Olvidaste la contraseña?
                    </Link>
                  </Stack>
                  <ReCAPTCHA
                    sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
                    ref={captcha}
                    onChange={handleReCaptcha}
                  />

                  <Button
                    type="submit"
                    bg="green.300"
                    color="white"
                    _hover={{
                      bg: "green.500",
                    }}
                    rounded="md"
                    w="100%"
                  >
                    Ingresar
                  </Button>
                  {error && (
                    <Flex
                      p={2}
                      flexDirection={"row"}
                      alignItems={"center"}
                      color={"red.500"}
                      gap={2}
                      rounded={8}
                      w={"100%"}
                    >
                      <IconXboxX />
                      <Text fontWeight={400}>{error}</Text>
                    </Flex>
                  )}
                </VStack>
              </>
            )}
          </VStack>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Login;
