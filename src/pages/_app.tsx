import "@/styles/globals.css";
import "@/styles/_reset.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
