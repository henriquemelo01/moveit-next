import "../styles/global.css";

// Arquivo utilizado para aproveitarmos toda a estrutura previa de uma aplicação. Ex: Menu

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
