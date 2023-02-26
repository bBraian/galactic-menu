import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: 1160px;
`;

export const Header = styled.header`
    height: 60px;
    width: 100%;
    padding: 0 1rem;
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const BackHomeButton = styled.button`
    display: flex;
    align-items: center;
    gap: 5px;
    border: 2px solid ${props => (props.active ? props.theme['bar'] : props.theme['border'])};;
    background-color: ${props => (props.active ? props.theme['bar'] : props.theme['background'])};
    color: ${props => (props.active ? props.theme['white'] : props.theme['gray-900'])};;
    border-radius: 12px;
    padding: 0.5rem 0.75rem;
    text-align: center;
    white-space: nowrap;
    font-size: 1rem;
    cursor: pointer;
    transition: transform ease-in-out 0.1s;

    &:hover {
        transform: scale(1.05);
    }
`;

export const HeaderTitle = styled.h1`
    @media (min-width: 1024px) {
        position: absolute;
        font-size: 1.85rem;
        left: 50%;
        transform: translate(-50%);
    }

    @media (max-width: 1024px) {
        font-size: 1.65rem;
        position: relative;
    }
    
    @media (max-width: 768px) {
        font-size: 1.50rem;
        position: relative;
    } 
`;

export const CartList = styled.div``;

export const Footer = styled.div``;