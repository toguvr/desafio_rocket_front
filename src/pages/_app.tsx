import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import { Header } from "../components/Header";
import client from "../services/apollo-client";
import GlobalStyle from "../styles/GlobalStyle";
import AppContainer from "../hooks";
import { ToastContainer } from "react-toastify";
import SEO from "../components/SEO";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AppContainer>
        <SEO
          title="capputeeno | Home"
          description="capputeeno, loja online"
          image="/assets/capputeeno.png"
        />
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </AppContainer>
    </ApolloProvider>
  );
}

export default MyApp;
