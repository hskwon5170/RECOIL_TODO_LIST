import { RecoilRoot } from "recoil";
import GlobalStyle from "../styles/GlobalStyles";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
