import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <ChakraProvider>
      <Header />
      <Box minH="90vh" backgroundColor=" ">
        <Component {...pageProps} />
      </Box>
      <Footer />
    </ChakraProvider>
  </>
);

export default App;
