import "../styles/global.css";
import { ChallengesProvider } from "../contexts/ChallengesContext";

// Arquivo utilizado para aproveitarmos toda a estrutura previa de uma aplicação. Ex: Menu

/*  Context
Todos os elementos dentro do provider tem acesso ao contexto 
O atributo value do componente ChallengesContext.Provider armazena quais variaveis/funções que desejamos enviar de informação. 

Para acessar os dados do context nos componentes, importamos o metodo useContext(Contexto)  

*/

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
