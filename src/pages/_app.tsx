import "../styles/global.css";

import type { AppProps } from "next/app";
import StoreProvider from "../redux/StoreProvider";
import { PrivyProvider } from "@privy-io/react-auth";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreProvider>
      <PrivyProvider
        appId={"cllbzjz6201cmmd08nyxiq6qk"}
        config={{
          loginMethods: ["email", "google", "twitter"],
          appearance: {
            theme: "light",
            accentColor: "#676FFF",
            // logo: "https://your-logo-url",
          },
        }}
      >
        <Component {...pageProps} />
      </PrivyProvider>
    </StoreProvider>
  );
};

export default MyApp;
