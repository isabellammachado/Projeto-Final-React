import styled from "styled-components";

const COLORS = {
  SKY_BLUE: "#6C83FF",
  BLOCK_BROWN: "#955816",
  COIN_YELLOW: "#FFCC00",
  PIPE_GREEN: "#00871B",
  DANGER_RED: "#E72020",
  DARK_BLUE: "#2142C1",
  WHITE_TEXT: "#FFFFFF",
  BLACK_OUTLINE: "#000000",
  INPUT_DARK: "#333549",
};

export const Container = styled.div`
  display: flex;
  background-color: ${COLORS.SKY_BLUE};
  min-height: 100vh;
  color: ${COLORS.WHITE_TEXT};
  font-family: "Inter", sans-serif;
  overflow-x: hidden;
`;

export const Content = styled.main`
  flex: 1;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 260px; /* espaço da sidebar */
  transition: margin-left 0.3s ease;

  @media (max-width: 1024px) {
    margin-left: 200px;
    padding: 30px 40px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 25px 20px;
  }

  @media (max-width: 480px) {
    padding: 20px 15px;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 2.3rem;
    color: ${COLORS.DANGER_RED};
    margin-bottom: 10px;
    font-weight: 800;
    text-shadow: 3px 3px 0px ${COLORS.BLACK_OUTLINE};
  }

  p {
    font-size: 1rem;
    color: ${COLORS.WHITE_TEXT};
    font-family: "Inter", sans-serif;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  max-width: 450px;
  padding: 12px 16px;
  border-radius: 6px;
  border: 3px solid ${COLORS.BLACK_OUTLINE};
  background-color: ${COLORS.INPUT_DARK};
  color: ${COLORS.WHITE_TEXT};
  font-size: 1rem;
  box-shadow: 4px 4px 0px ${COLORS.BLACK_OUTLINE};
  margin-top: 15px;

  &::placeholder {
    color: #cccccc;
  }

  &:focus {
    border-color: ${COLORS.COIN_YELLOW};
    box-shadow: 0 0 8px ${COLORS.COIN_YELLOW}, 4px 4px 0px ${COLORS.BLACK_OUTLINE};
    outline: none;
    transform: translate(-1px, -1px);
  }

  @media (max-width: 480px) {
    max-width: 100%;
    font-size: 0.9rem;
  }
`;

export const CategoryGrid = styled.div`
  display: grid;
  justify-content: center;
  align-items: start;
  grid-template-columns: repeat(3, 1fr); 
  gap: 40px;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 30px;
  padding-bottom: 40px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); 
    gap: 25px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
    gap: 20px;
    padding: 0 20px;
  }
`;

export const CategoryCard = styled.div`
  position: relative;
  background-color: ${COLORS.BLOCK_BROWN};
  border-radius: 10px;
  padding: 25px 20px;
  text-align: center;
  border: 4px solid ${COLORS.BLACK_OUTLINE};
  box-shadow: 6px 6px 0px ${COLORS.BLACK_OUTLINE};
  transition: all 0.2s ease;

  &:hover,
  &:focus-within {
    transform: translate(-5px, -5px);
    box-shadow: 10px 10px 0px ${COLORS.BLACK_OUTLINE};
    outline: none;
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: ${COLORS.WHITE_TEXT};
    text-shadow: 1px 1px 0px ${COLORS.DARK_BLUE};
  }

  p {
    font-size: 0.95rem;
    color: ${COLORS.COIN_YELLOW};
    margin-bottom: 15px;
    font-weight: 600;
  }

  @media (max-width: 480px) {
    padding: 20px 15px;

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`;

export const DifficultyButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 18px;
  flex-wrap: wrap;
`;

export const DifficultyButton = styled.button`
  padding: 8px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  border: 3px solid ${COLORS.BLACK_OUTLINE};
  box-shadow: 3px 3px 0px ${COLORS.BLACK_OUTLINE};
  font-weight: 600;
  transition: all 0.2s;
  text-transform: uppercase;

  background-color: ${({ $level }) =>
    $level === "easy"
      ? COLORS.PIPE_GREEN
      : $level === "medium"
        ? COLORS.COIN_YELLOW
        : COLORS.DANGER_RED};

  color: ${({ $level }) =>
    $level === "medium" ? COLORS.BLACK_OUTLINE : COLORS.WHITE_TEXT};

  opacity: ${({ selected }) => (selected ? 1 : 0.9)};
  transform: ${({ selected }) => (selected ? "scale(1.1)" : "scale(1)")};

  &:hover,
  &:focus {
    transform: scale(1.15);
    box-shadow: 5px 5px 0px ${COLORS.BLACK_OUTLINE};
    outline: none;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 6px 8px;
  }
`;

export const StartButton = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background-color: ${COLORS.PIPE_GREEN};
  color: ${COLORS.WHITE_TEXT};
  font-weight: 600;
  border: 3px solid ${COLORS.BLACK_OUTLINE};
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s;
  box-shadow: 4px 4px 0px ${COLORS.BLACK_OUTLINE};

  &:hover,
  &:focus {
    background-color: ${COLORS.DARK_BLUE};
    transform: translate(-3px, -3px);
    box-shadow: 7px 7px 0px ${COLORS.BLACK_OUTLINE};
    outline: none;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 10px;
  }
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  color: ${({ $favorited }) => ($favorited ? COLORS.COIN_YELLOW : "#ccc")};
  transition: all 0.2s;

  &:hover,
  &:focus {
    transform: scale(1.3);
    color: ${COLORS.COIN_YELLOW};
    outline: none;
  }
`;