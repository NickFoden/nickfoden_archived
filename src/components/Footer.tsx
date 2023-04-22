import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box backgroundColor="black" display="flex">
      <Box margin="0 auto" minH={50} display="flex" alignItems={"center"}>
        <Text textAlign="center" color="gray">
          Nick Foden is pretty into burritos
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
