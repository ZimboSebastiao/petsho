import "@/styles/globals.css";
import Layout from "@/components/ui/Layout";
// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </NextUIProvider>
  );
}
