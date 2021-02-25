import "../styles/global.css";
import { ChallengesProvider } from "../contexts/ChallengesContext";

// Arquivo utilizado para aproveitarmos toda a estrutura previa de uma aplicação. Ex: Menu

/*  Context
Todos os elementos dentro do provider tem acesso ao contexto 
O atributo value do componente ChallengesContext.Provider armazena quais variaveis/funções que desejamos enviar de informação. 

Para acessar os dados do context nos componentes, importamos o metodo useContext(Contexto)  

OBS: 
Como o CountdownProvider precisa de informações do Challenges provider para o seu funcionamento, colocamos o mesmo dentro do ChallengeProvider. Entretanto, como não vamos utilizar o contexto do countdown em varias páginas de nossa aplicação, o componente CountdownProvider exportando no contexto é colocado apenas na página que desejamos ter acesso aos dados do mesmo por volta dos componentes - ver o arquivo index.tsx
*/

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
