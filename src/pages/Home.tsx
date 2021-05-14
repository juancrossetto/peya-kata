import { Flex, Stack, Text } from "@chakra-ui/react";
import React, { FC, useEffect, useState } from "react";


  
const HomePage: FC = () => {
  return (
    <Stack h="80vh" alignItems="center" justifyContent="center">
      <Flex justifyContent="center" alignItems="center" w="50%">
        <Text>Home</Text>
      </Flex>
    </Stack>
  );
};

export default withLoading(HomePage);
