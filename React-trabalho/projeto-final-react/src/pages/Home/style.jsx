import styled from 'styled-components';

const COLORS = {
    SKY_BLUE: '#6C83FF',
    BLOCK_BROWN: '#955816',
    COIN_YELLOW: '#FFCC00',
    PIPE_GREEN: '#00871B',
    DANGER_RED: '#E72020',
    WHITE_TEXT: '#FFFFFF',
    INPUT_DARK: '#333549',
    BORDER: '#000000',
};

export const PageContainer = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: ${COLORS.SKY_BLUE};
    color: ${COLORS.WHITE_TEXT};
    font-family: Arial, sans-serif;

    @media (min-width: 769px) {
        padding-left: 260px;
    }
    @media (max-width: 768px) {
        padding-left: 0;
    }
`;

export const Content = styled.div`
    flex-grow: 1;
    padding: 30px;

    @media (max-width: 768px) {
        padding-top: 60px;
        padding-left: 15px;
        padding-right: 15px;
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;
    border-bottom: 2px solid ${COLORS.BLOCK_BROWN};

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;
export const Title = styled.h1`
    font-size: 2.2rem;
    color: ${COLORS.WHITE_TEXT};
    margin: 0;
    line-height: 1.2;
    font-family: 'Press Start 2P', cursive;
    text-shadow: 2px 2px ${COLORS.BORDER};

    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`;

export const SubTitle = styled.p`
    font-size: 1.7rem;
    color: ${COLORS.WHITE_TEXT};
    margin-top: 8px;
    line-height: 1.6;
    opacity: 0.9;

    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;
export const ShareButton = styled.button`
    background-color: ${COLORS.PIPE_GREEN};
    color: ${COLORS.WHITE_TEXT};
    border: 2px solid ${COLORS.BORDER};
    border-radius: 6px;
    padding: 10px 20px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 auto;

    &:hover {
        background-color: ${COLORS.COIN_YELLOW};
        color: #000;
    }

    &:focus {
        outline: 3px solid ${COLORS.COIN_YELLOW};
        outline-offset: 2px;
    }
`;


export const MainSection = styled.section`
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
    flex-wrap: wrap;
`;

export const SectionTitle = styled.h2`
    font-size: 1.2rem;
    color: ${COLORS.COIN_YELLOW};
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const CategoryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
    gap: 20px;

    @media (min-width: 1600px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const CategoryCard = styled.div`
    background-color: ${COLORS.BLOCK_BROWN};
    border-radius: 8px;
    padding: 30px;
    border: 2px solid ${COLORS.BORDER};
    transition: transform 0.1s;
    min-height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;

export const CardHeader = styled.div`
    margin-bottom: 15px;
    svg {
        color: ${COLORS.COIN_YELLOW};
        width: 30px;
        height: 30px;
    }
`;

export const CardTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 5px;
    color: ${COLORS.WHITE_TEXT};
`;

export const CardSubText = styled.p`
    font-size: 1rem;
    color: ${COLORS.WHITE_TEXT};
    opacity: 0.8;
`;

export const RankingBox = styled.aside`
    background-color: ${COLORS.INPUT_DARK};
    border-radius: 8px;
    padding: 20px;
    border: 2px solid ${COLORS.BORDER};
    width: 300px;
    min-height: 200px;
    
    h2 {
        color: ${COLORS.DANGER_RED};
        margin-bottom: 15px;
    }

    @media (max-width: 1200px) {
        width: 100%;
    }
`;

export const RankingItem = styled.div`
    background-color: ${COLORS.BLOCK_BROWN};
    padding: 10px 15px;
    margin-bottom: 8px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    color: ${COLORS.WHITE_TEXT};
    border: 2px solid transparent;
    transition: border-color 0.2s;

    span {
        color: ${COLORS.COIN_YELLOW};
        font-size: 1.1rem;
        margin-right: 10px;
    }
`;

export const ShareSection = styled.section`
    background-color: ${COLORS.BLOCK_BROWN};
    border-radius: 8px;
    padding: 30px;
    border: 2px solid ${COLORS.BORDER};
    text-align: center;
    margin-top: 30px;
    
    p {
        max-width: 700px;
        margin: 10px auto 20px;
        color: ${COLORS.WHITE_TEXT};
    }
    
    ${SectionTitle} {
        justify-content: center;
    }
`;
export const DifficultyButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 15px;
`;

export const DifficultyButton = styled.button`
    background-color: #00871B;
    color: #FFFFFF;
    border: 2px solid #000000;
    border-radius: 8px;
    padding: 10px 20px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
        background-color: #FFCC00;
        color: #000;
        transform: translateY(-2px);
    }

    &.active {
        background-color: #E72020;
    }
`;

export const EmptyState = styled.div`
    text-align: center;
    color: #FFCC00;
    font-style: italic;
    margin-top: 30px;
    font-size: 1.2rem;
`;
