import styled from "styled-components";
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: 1160px;
`;

export const Header = styled.header`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const HeaderFixed = styled.header`
    left: 0;
    position: fixed;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    box-shadow: 0 2px 8px 0 rgb(0 0 0 / 15%);
    background-color: ${props => props.theme['background']};
`;

export const HeaderFixedBox = styled.div`
    width: 100%;
    max-width: 1785px;
    
    @media (max-width: 1264px) {
        max-width: 1185px;
    }
    @media (max-width: 960px) {
        max-width: 900px;
    }
`;

export const CompanyBgImg = styled.img`
    width: 100%;
    height: 10rem;
    object-fit: cover;
    background-repeat: no-repeat;
    border-radius: 0 0 16px 16px;

    @media (max-width: 1024px) {
        height: 8.875rem;
    }

    @media (max-width: 768px) {
        border-radius: 0;
        height: 5.565rem;
    } 
`;

export const CompanyInfos = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    padding: 0 1rem;
`;

export const CompanyLogo = styled.img`
    height: 8.25rem;
    width: 8.25rem;
    border-radius: 16px;
    position: absolute;
    bottom: 0;

    @media (max-width: 1024px) {
        height: 7.25rem;
        width: 7.25rem;        
    }

    @media (max-width: 768px) {
        height: 5rem;
        width: 5rem;
    } 
`;

export const CompanyTitle = styled.h1`
    padding-left: 9.15rem;
    margin: 0.25rem 0;
    font-size: 1.85rem;

    @media (max-width: 1024px) {
        padding-left: 8.15rem;
        font-size: 1.65rem     
    }

    @media (max-width: 768px) {
        padding-left: 5.90rem;
        font-size: 1.50rem;
    } 
`;

export const CompanyTitleSm = styled.h1`
    margin: 0.5rem 0 -0.35rem 0;
    font-size: 1.75rem;

    @media (max-width: 1024px) {
        font-size: 1.55rem     
    }

    @media (max-width: 768px) {
        font-size: 1.40rem;
    } 
`;

export const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar)`
    display: flex;
    user-select: none;
    touch-action: none;
    margin: 0 1rem;
    padding: 2px 0;
    flex-direction: column;
    height: 10px;
`;

export const ScrollAreaThumb = styled(ScrollArea.ScrollAreaThumb)`
    flex: 1;
    background: #C4C4C4;
    border-radius: 100px;
    position: relative;
  
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        min-width: 44px;
        min-height: 44px;
    }
`;

export const CategoryBox = styled.div`
    display: flex;
    gap: 0.65rem;
    padding: ${props => props.paddingTop} 1rem 0.65rem 1rem;
    overflow-y: hidden;
    overflow-x: auto;
    flex-direction: row;
`;

export const FoodList = styled.div`
    padding: 0 1rem;
    margin-bottom: 4rem;
    margin-top: 16rem;


    @media (max-width: 1024px) {
        margin-top: 15rem;
    }

    @media (max-width: 768px) {
        margin-top: 11.5rem;
    } 
`;

export const CategoryDiv = styled.div``;

export const CategoryTitle = styled.h2`
    font-size: 1.25rem;
    margin: 0 8px;
    font-weight: 500;
    margin-top: 1.25rem;
    margin-bottom: 1rem;
`;
export const ProductCategoryBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    gap: 20px;

    @media (max-width: 1024px) {  
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    } 
`;

export const GoToCartButton = styled.div`
    position: fixed;
    background-color: transparent;
    bottom: 18px;
    max-width: 1160px;
    width: 100%; 
    height: 45px;
    border: 0;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
`;

export const GoToCartButtonContent = styled(Link)`
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
    margin: 0 1rem;
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
