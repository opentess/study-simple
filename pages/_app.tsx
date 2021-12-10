import "../styles/globals.css";
import { UserContext } from "../lib/context";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContext.Provider value={{ user: {}, username: "tom" }}>
      <Component {...pageProps} />;
    </UserContext.Provider>
  );
}
export default MyApp;
