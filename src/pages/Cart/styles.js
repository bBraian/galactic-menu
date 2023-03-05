import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: 1160px;
`;

export const Header = styled.header`
    height: 81px;
    width: 100%;
    gap: 16px;
    padding: 0 1rem;
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const BackHomeButton = styled(Link)`
    text-decoration: none;
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
    z-index: 999;

    &:hover {
        transform: scale(1.05);
    }
`;

export const ImgBg = styled.img`
    display: none;
    position: absolute;
    width: 100%;
    top: 0;
    /* right: 10px; */
    left: 0;
    height: 81px;
    object-fit: cover;
    /* border-radius: 0px 0px 50px 50px; */
    @media (max-width: 768px) {
        display: flex;
    } 
`;

export const HeaderTitle = styled.h1`
    text-align: center;
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
        text-shadow: 0px 0px 5px #000000;
        color: #fff;
    } 
`;

export const CartList = styled.div`
    @media (max-width: 768px) {
        width: 100vw;
    } 
    
    padding: 89px 1rem;
    display: flex;
    flex-direction: column;
`;

export const Footer = styled.div`
    position: fixed;
    max-width: 1160px;
    background-color: transparent; 
    height: 81px;
    width: 100%;
    padding: 0 1rem;
    bottom: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const GoToCartButtonContent = styled.button`
    text-decoration: none;
    display: flex;
    flex: 1;
    height: 45px;
    background-color: #db8e44;
    border: 0;
    border-radius: 16px;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    cursor: pointer;
    opacity: 0.95;
    transition: all ease-in-out 0.2s;
    
    &:hover {
        scale: 1.01;
        opacity: 1;
    }
`;

export const ItensAmount = styled.div`
    width: 30px;
    height: 30px;
    background-color: #FBA94C;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-radius: 8px;
    font-size: 1rem;
`;

export const SeeCart = styled.h2`
    font-size: 1.25rem;
    color: #fff;
`;

export const ItensTotalPrice = styled.div`
    height: 30px;
    padding: 0 12px;
    background-color: #FBA94C;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-radius: 8px;
    font-size: 1rem;
`;
