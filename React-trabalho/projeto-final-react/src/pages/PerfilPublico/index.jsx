import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import fotoDefault from "../../assets/images/images.png";
import { SideBarComponent } from "../../components/Sidebar";
import {
  Container,
  AreaPerfil,
  CardPerfil,
  PerfilCabecalho,
  PerfilFoto,
  PerfilInformacoes,
  PerfilEmail,
  PerfilPontuacao,
  TituloPerfil,
} from "./style";

export const PerfilPublico = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://68dda415d7b591b4b78cfdb5.mockapi.io/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!user) return <div style={{ color: "#fff" }}>Carregando...</div>;

  return (
    <Container>
      <SideBarComponent />

      <AreaPerfil>
        <TituloPerfil>Perfil de {user.nome}</TituloPerfil>

        <CardPerfil>
          <PerfilCabecalho>
            <PerfilFoto
              src={user.avatar || fotoDefault}
              alt={`Foto de ${user.nome}`}
            />

            <PerfilInformacoes>
              <h2>{user.nome}</h2>
              <PerfilEmail>{user.email}</PerfilEmail>
            </PerfilInformacoes>
          </PerfilCabecalho>

          <PerfilPontuacao>
            <p>
              <strong>Pontuação:</strong> {user.pontos} Pontos
            </p>
          </PerfilPontuacao>
        </CardPerfil>
      </AreaPerfil>
    </Container>
  );
};
