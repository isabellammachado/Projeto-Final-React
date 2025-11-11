import { useEffect, useState } from "react";
import {
  Foto,
  Info,
  Nome,
  PageContainer,
  Pontos,
  Posicao,
  RankingContainer,
  Title,
  UserCard,
  UserList,
} from "./style";

import { SideBarComponent } from "../../components/Sidebar/index";
import axios from "axios";
import { Link } from "react-router";

export const Ranking = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get(
          "https://68dda415d7b591b4b78cfdb5.mockapi.io/users"
        );

        const data = response.data;

        const ordenados = [...data].sort(
          (a, b) => (b.pontos || 0) - (a.pontos || 0)
        );

        setUsuarios(ordenados);
      } catch (error) {
        console.log("Erro ao buscar usuários:", error);
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <PageContainer>
      <SideBarComponent />

      <RankingContainer>
        <Title>Ranking Geral</Title>

        <UserList>
          {usuarios.map((user, index) => (
            <Link
              key={user.id}
              to={`/perfil/${user.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <UserCard>
                <Posicao $index={index}>{index + 1}º</Posicao>

                <Foto src={user?.avatar || fotoDefault} />

                <Info>
                  <Nome>{user.nome}</Nome>
                  <Pontos>{user.pontos || 0} pts</Pontos>
                </Info>
              </UserCard>
            </Link>
          ))}
        </UserList>
      </RankingContainer>
    </PageContainer>
  );
};
