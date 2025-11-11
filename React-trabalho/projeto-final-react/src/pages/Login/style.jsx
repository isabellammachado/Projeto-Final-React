import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

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

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const slideIn = keyframes`
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
`;

export const AuthContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: ${COLORS.SKY_BLUE};
    padding: 20px;
    animation: ${slideIn} 0.5s ease-out;
`;

export const AuthCard = styled.div`
    background-color: ${COLORS.BLOCK_BROWN};
    padding: 40px;
    border-radius: 8px;
    border: 2px solid ${COLORS.BORDER};
    box-shadow: 6px 6px 0px ${COLORS.BORDER};
    width: 100%;
    max-width: 400px;
    text-align: center;
`;

export const Title = styled.h1`
    color: ${COLORS.COIN_YELLOW};
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 10px;
    line-height: 1.3;
`;

export const SubTitle = styled.p`
    color: ${COLORS.WHITE_TEXT};
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 25px;
    line-height: 1.6;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const InputGroup = styled.div`
    display: flex;
    align-items: center;
    background-color: ${COLORS.INPUT_DARK};
    border-radius: 6px;
    padding: 12px 15px;
    border: 2px solid ${COLORS.BORDER};
    transition: border-color 0.3s, box-shadow 0.3s;

    &:focus-within {
        border-color: ${COLORS.COIN_YELLOW};
        box-shadow: 0 0 0 2px ${COLORS.COIN_YELLOW};
    }

    svg {
        color: ${COLORS.COIN_YELLOW};
        margin-right: 10px;
        transition: color 0.3s;
    }

    input {
        flex-grow: 1;
        background: none;
        border: none;
        color: ${COLORS.WHITE_TEXT};
        font-size: 1rem;
        padding: 5px 0;
        outline: none;

        &::placeholder {
            color: #cccccc; // contraste maior
        }
    }
`;

export const PrimaryButton = styled.button`
    background-color: ${COLORS.COIN_YELLOW};
    color: ${COLORS.BLACK_OUTLINE};
    padding: 12px;
    border: 2px solid ${COLORS.BLACK_OUTLINE};
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-shadow: 4px 4px 0px ${COLORS.BLACK_OUTLINE};
    transition: all 0.1s;

    &:hover:not(:disabled) {
        background-color: ${COLORS.DANGER_RED};
        color: ${COLORS.WHITE_TEXT};
        transform: translate(-2px, -2px);
        box-shadow: 6px 6px 0px ${COLORS.BLACK_OUTLINE};
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    &.loading svg {
        animation: ${spin} 1s linear infinite;
    }
`;

export const FooterText = styled.p`
    color: ${COLORS.WHITE_TEXT};
    margin-top: 25px;
    font-size: 0.95rem;
    font-weight: 600;
`;

export const AuthLink = styled(Link)`
    color: ${COLORS.COIN_YELLOW};
    text-decoration: none;
    font-weight: 700;

    &:hover {
        color: ${COLORS.DANGER_RED};
        text-decoration: underline;
    }
`;
