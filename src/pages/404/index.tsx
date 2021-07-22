import { FiSearch } from "react-icons/fi";
import { Logo } from "../../components/Header/styles";
import SEO from "../../components/SEO";
import { PageError } from "./styles";

export default function NotFound() {
  return (
    <PageError>
      <SEO
        title="capputeeno | página não encontrada"
        description="capputeeno, página não encontrada em minutos"
        image="/assets/capputeeno.png"
      />
      <div>
        <Logo />
        <h1>404 </h1>
        <h2>
          <FiSearch style={{ marginRight: "16px" }} />
          Página não encontrada
        </h2>
        <p>Não conseguimos encontrar essa página, tente novamente.</p>
      </div>
    </PageError>
  );
}
