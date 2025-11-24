import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    
    <Layout font="poppins">
      <Component {...pageProps} />
    </Layout>
  );
}
