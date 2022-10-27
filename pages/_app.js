import { RecoilRoot } from "recoil";
import GlobalStyle from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
