import { IoPerson } from "react-icons/io5";
import fotoDefault from "../../assets/images/images.png";
import { SideBarComponent } from "../../components/Sidebar";
import {
  Container, AreaPerfil, CardPerfil, PerfilCabecalho, PerfilFoto, PerfilInformacoes, PerfilEmail,
  PerfilPontuacao, BotaoSair, BotaoEditar, TituloPerfil,
} from "./style";
import { useAuth } from "../../hooks/useAuth";
import { InputFoto } from "../../components/InputdeFoto/index";
import { NestedModal } from "../../components/Modal/index";

export const Perfil = () => {
  const { usuario, logout, editar } = useAuth();

  const FotoNova = (evento) => { //Quando o usuário seleciona um novo arquivo (imagem), o evento é disparado.
    evento.preventDefault();
    const file = evento.target.files[0]; 
    if (!file) return;
    //evento.target.files[0] → pega o primeiro arquivo enviado. Se não houver arquivo (!file), sai da função.

    const lerFoto = new FileReader(); //Cria um novo FileReader para ler a imagem em formato base64 (texto codificado).
    lerFoto.onloadend = () => { //Quando a leitura termina (onloadend):
      editar({ avatar: lerFoto.result });
    };
    lerFoto.readAsDataURL(file);
  };

  return (
    <Container>
      <SideBarComponent />
      <AreaPerfil>
        <TituloPerfil>
          <IoPerson size={28} /> Meu Perfil
        </TituloPerfil>

        <CardPerfil>
          <PerfilCabecalho>
            <PerfilFoto
              src={usuario?.avatar || fotoDefault}
              alt="Foto de perfil"
            />
            <PerfilInformacoes>
              <h2>{usuario?.nome || "Nome"}</h2>
              <PerfilEmail tabIndex={0}>
                {usuario?.email || "email@.com"}
              </PerfilEmail>
              <InputFoto onChange={FotoNova} />
            </PerfilInformacoes>
          </PerfilCabecalho>

          <PerfilPontuacao>
            <p>
              <strong>Pontuação:</strong> {usuario?.pontos || 0} Pontos
            </p>
          </PerfilPontuacao>

          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <NestedModal usuario={usuario} editar={editar} />
            <BotaoSair onClick={logout} aria-label="Botão para sair">
              Sair
            </BotaoSair>
          </div>
        </CardPerfil>
      </AreaPerfil>
    </Container>
  );
};
