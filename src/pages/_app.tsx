import "@/styles/globals.css";
import type { AppProps } from "next/app";
import * as dotenv from "dotenv";
import 'swiper/css';

dotenv.config();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
