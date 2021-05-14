import {
  Button,
  Container,
  Flex,
  Icon,
  Image,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { Link, useHistory } from "react-router-dom";
import { BsMoon, BsSun } from "react-icons/bs";

import LogoIcon from "./assets/images/logo.svg";

const Layout: FC = ({ children }) => (
  <Container maxWidth="container.xl" alignSelf="center">
    <Stack>
      <Stack>
        <Menu />
      </Stack>
      {children}
    </Stack>
  </Container>
);

const Menu = () => {
  const { push } = useHistory();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justify="space-between" align="center" w="100%">
      <Stack>
        <Image
          src={LogoIcon}
          alt="logo pedidos ya"
          _hover={{ cursor: "pointer" }}
          w="60px"
          onClick={() => push({ pathname: "/asd" })}
          loading="lazy"
          decoding="async"
        />
      </Stack>
      <Button
        display={["none", "none", "flex", "flex"]}
        leftIcon={
          colorMode === "light" ? <Icon as={BsSun} /> : <Icon as={BsMoon} />
        }
        size="sm"
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? "Light" : "Dark"} mode
      </Button>
    </Flex>
  );
};

export default Layout;
