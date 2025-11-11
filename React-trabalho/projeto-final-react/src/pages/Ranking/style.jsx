import styled from "styled-components";

const MARIO_COLORS = {
    SKY_BLUE: '#6C83FF',
    BLOCK_BROWN: '#955816',
    COIN_YELLOW: '#FFCC00',
    PIPE_GREEN: '#00871B',
    DANGER_RED: '#E72020',
    BLACK_OUTLINE: '#000000',
    WHITE_TEXT: '#f8f9fa',
    DARK_BLUE: '#2142C1',
};

const MEDAL_COLORS = {
    GOLD: MARIO_COLORS.COIN_YELLOW,
    SILVER: '#C0C0C0',
    BRONZE: '#CD7F32',
};

export const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${MARIO_COLORS.SKY_BLUE};
    color: ${MARIO_COLORS.WHITE_TEXT};
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    padding-left: 260px; /* espaço da sidebar */

    @media (max-width: 1024px) {
        padding-left: 220px;
    }

    @media (max-width: 768px) {
        padding-left: 0; 
        justify-content: flex-start;
    }
`;

export const RankingContainer = styled.div`
    flex: 1;
    max-width: 800px;
    margin: 0 auto;
    padding: 50px 40px;

    @media (max-width: 768px) {
        padding: 30px 20px;
    }

    @media (max-width: 480px) {
        padding: 20px 15px;
    }
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 30px;
    color: ${MARIO_COLORS.COIN_YELLOW};
    text-shadow: 4px 4px 0px ${MARIO_COLORS.DANGER_RED};

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const UserList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const UserCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${MARIO_COLORS.BLOCK_BROWN};
    padding: 20px 25px;
    border-radius: 8px;
    border: 4px solid ${MARIO_COLORS.BLACK_OUTLINE};
    box-shadow: 6px 6px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    gap: 20px;
    transition: all 0.2s;

    &:hover {
        transform: translate(-3px, -3px);
        box-shadow: 9px 9px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    }

    @media (max-width: 600px) {
        flex-direction: column;
        text-align: center;
        padding: 15px;
        gap: 10px;
    }
`;

export const Posicao = styled.span`
    font-size: 1.5rem;
    font-weight: 700;
    width: 50px;
    text-align: center;
    text-shadow: 1px 1px 0px ${MARIO_COLORS.BLACK_OUTLINE};

    color: ${({ $index }) => {
        if ($index === 0) return MEDAL_COLORS.GOLD;
        if ($index === 1) return MEDAL_COLORS.SILVER;
        if ($index === 2) return MEDAL_COLORS.BRONZE;
        return MARIO_COLORS.WHITE_TEXT;
    }};

    @media (max-width: 600px) {
        width: auto;
    }
`;

export const Foto = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid ${MARIO_COLORS.COIN_YELLOW};
    box-shadow: 0 0 0 2px ${MARIO_COLORS.BLACK_OUTLINE};

    @media (max-width: 600px) {
        width: 50px;
        height: 50px;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
`;

export const Nome = styled.span`
    font-weight: 600;
    font-size: 1.2rem;
    text-shadow: 1px 1px 0px ${MARIO_COLORS.DARK_BLUE};

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const Pontos = styled.span`
    font-size: 1rem;
    color: ${MARIO_COLORS.COIN_YELLOW};
    margin-top: 4px;
    font-weight: bold;
`;
