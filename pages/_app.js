import { RecoilRoot } from "recoil";
import GlobalStyle from "../styles/GlobalStyles";
import "antd/dist/antd.css";
import CssBaseline from "@mui/material/CssBaseline";
// import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      {/* <ChakraProvider> */}
      <CssBaseline />
      <GlobalStyle />
      <Component {...pageProps} />
      {/* </ChakraProvider> */}
    </RecoilRoot>
  );
}

export default MyApp;
