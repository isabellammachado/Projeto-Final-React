import styled from "styled-components";

const COLORS = {
  SKY_BLUE: "#6C83FF",
  BLOCK_BROWN: "#955816",
  COIN_YELLOW: "#FFCC00",
  PIPE_GREEN: "#00871B",
  DANGER_RED: "#E72020",
  DARK_BLUE: "#2142C1",
  BLACK_OUTLINE: "#000000",
  WHITE_TEXT: "#FFFFFF",
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${COLORS.SKY_BLUE};
  color: ${COLORS.WHITE_TEXT};
`;

export const AreaPerfil = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px;

  @media (min-width: 768px) {
    padding: 60px 20px;
  }
`;

export const TituloPerfil = styled.h1`
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${COLORS.COIN_YELLOW};
  font-family: sans-serif;
  font-weight: bold;
  text-shadow: 2px 2px 0px ${COLORS.DARK_BLUE};
`;

export const CardPerfil = styled.div`
  background-color: ${COLORS.BLOCK_BROWN};
  border-radius: 10px;
  padding: 30px 40px;
  width: 100%;
  max-width: 600px;
  border: 4px solid ${COLORS.BLACK_OUTLINE};
  box-shadow: 8px 8px 0px ${COLORS.BLACK_OUTLINE};
  margin-top: 25px;
  margin-left: 250px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const PerfilCabecalho = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  padding-bottom: 20px;
  border-bottom: 2px solid ${COLORS.DARK_BLUE};
  margin-bottom: 20px;
`;

export const PerfilFoto = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid ${COLORS.COIN_YELLOW};
  box-shadow: 0 0 0 3px ${COLORS.BLACK_OUTLINE},
    0 4px 15px rgba(0, 0, 0, 0.5);
`;

export const PerfilInformacoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  h2 {
    font-size: 1.5rem;
    font-family: sans-serif;
    font-weight: bold;
    color: ${COLORS.WHITE_TEXT};
    text-shadow: 1px 1px 0px ${COLORS.BLACK_OUTLINE};
  }
`;

export const PerfilEmail = styled.p`
  color: ${COLORS.COIN_YELLOW};
  font-size: 0.95rem;
  font-weight: bold;
`;

export const PerfilPontuacao = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #7a4211;
  border-radius: 6px;
  border: 2px dashed ${COLORS.COIN_YELLOW};

  p {
    font-size: 1rem;
    font-weight: bold;
    font-family: sans-serif;
    color: ${COLORS.WHITE_TEXT};
    text-shadow: 1px 1px 0px ${COLORS.BLACK_OUTLINE};
  }
`;
