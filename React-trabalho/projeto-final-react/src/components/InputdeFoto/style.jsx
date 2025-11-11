import styled from 'styled-components';

const MARIO_COLORS = {
    COIN_YELLOW: '#FFCC00',
    PIPE_GREEN: '#00871B',
    DANGER_RED: '#E72020',
    BLACK_OUTLINE: '#000000',
    WHITE_TEXT: '#f8f9fa',
};

export const FileInputContainer = styled.div`
    position: relative;
    display: inline-block;
    margin-top: 15px;

    input[type="file"] {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }
`;

export const FileLabel = styled.label`
    background-color: ${MARIO_COLORS.DANGER_RED};
    color: ${MARIO_COLORS.WHITE_TEXT};
    font-family: 'Inter', sans-serif;  /* Fonte moderna, sem pixel */
    font-size: 0.9rem;
    font-weight: 600;

    border: 3px solid ${MARIO_COLORS.BLACK_OUTLINE};
    border-radius: 6px;
    padding: 10px 18px;
    cursor: pointer;
    transition: all 0.15s;
    box-shadow: 4px 4px 0px ${MARIO_COLORS.BLACK_OUTLINE};

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:hover {
        background-color: ${MARIO_COLORS.PIPE_GREEN};
        transform: translate(-2px, -2px);
        box-shadow: 6px 6px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    }

    &:active {
        transform: translate(0, 0);
        box-shadow: 2px 2px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    }
`;