import styled from 'styled-components';

const MARIO_COLORS = {
    COIN_YELLOW: '#FFCC00',
    PIPE_GREEN: '#00871B',
    DANGER_RED: '#E72020',
    BLACK_OUTLINE: '#000000',
    SIDEBAR_BG: '#333333',
};

export const Container = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 260px;
    background-color: ${MARIO_COLORS.SIDEBAR_BG};
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    box-shadow: 6px 0 0px ${MARIO_COLORS.BLACK_OUTLINE};
    font-family: 'Press Start 2P', cursive;
    overflow-y: auto;
    z-index: 1000;
    transition: transform 0.3s ease;
    gap: 1.5rem; 

    @media (max-width: 1024px) {
        width: 220px;
        padding: 1.5rem 0.8rem;
    }

    @media (max-width: 768px) {
        width: 200px;
        max-width: 200px;
        transform: translateX(${props => (props.$isOpen ? '0' : '-200px')});
        box-shadow: 4px 0 12px rgba(0,0,0,0.5);
        padding: 1rem 0.5rem;
        align-items: center;
    }
`;

export const ToggleButton = styled.button`
    display: none;
    position: fixed;
    top: 20px;
    left: ${props => (props.$isOpen ? '205px' : '20px')};
    z-index: 1100;
    background-color: ${MARIO_COLORS.COIN_YELLOW};
    border: 2px solid ${MARIO_COLORS.BLACK_OUTLINE};
    padding: 8px;
    cursor: pointer;
    border-radius: 6px;
    font-weight: bold;
    color: ${MARIO_COLORS.BLACK_OUTLINE};
    transition: left 0.3s ease;

    @media (max-width: 768px) {
        display: block;
    }
`;

export const Logo = styled.div`
    font-size: 1rem;
    font-weight: 700;
    color: ${MARIO_COLORS.COIN_YELLOW};
    text-align: center;
    margin-bottom: 0.5rem;
    text-shadow: 2px 2px 0px ${MARIO_COLORS.DANGER_RED};

    @media (max-width: 768px) {
        font-size: 0.7rem;
        margin-bottom: 0;
        width: 100%;
    }
`;

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        width: 100%;
    }
`;

export const MenuItem = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 6px;
    cursor: pointer;
    background: ${props => (props.$isActive ? MARIO_COLORS.PIPE_GREEN : 'transparent')};
    border: 3px solid ${MARIO_COLORS.BLACK_OUTLINE};
    color: #fff;
    font-size: 0.75rem;
    text-align: left;
    transition: all 0.15s ease-in-out;
    box-shadow: 4px 4px 0 ${MARIO_COLORS.BLACK_OUTLINE};
    margin: 0;

    &:hover, &:focus {
        background-color: ${MARIO_COLORS.PIPE_GREEN};
        transform: translate(-3px, -3px);
        box-shadow: 7px 7px 0 ${MARIO_COLORS.BLACK_OUTLINE};
        outline: none;
    }

    &:active {
        transform: translate(0, 0);
        box-shadow: 3px 3px 0 ${MARIO_COLORS.BLACK_OUTLINE};
        background-color: ${MARIO_COLORS.PIPE_GREEN};
    }

    @media (max-width: 768px) {
        width: 80px;
        max-width: 80px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 4px;
        font-size: 0.6rem;
        box-shadow: 2px 2px 0 ${MARIO_COLORS.BLACK_OUTLINE};
        text-align: center;
    }
`;

export const ProfileButton = styled(MenuItem)`
    background: ${props => (props.$isActive ? MARIO_COLORS.DANGER_RED : 'transparent')};
    
    &:hover, &:focus, &:active {
        background-color: ${MARIO_COLORS.DANGER_RED};
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${MARIO_COLORS.COIN_YELLOW};
    font-size: 1.2rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const Label = styled.span`
    white-space: nowrap;
    font-size: 0.7rem;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 0.55rem;
    }
`;

export const Footer = styled.div`
    margin-top: auto;
    padding-top: 1.5rem;
    border-top: 3px dashed ${MARIO_COLORS.BLACK_OUTLINE};
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;

    @media (max-width: 768px) {
        margin-top: 1rem;
        border-top: none;
        padding-top: 0;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
    }
`;
