import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
`;

export const Header = styled.header`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const HeaderFixed = styled.header`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${props => props.theme['background']};
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
    margin: 0.25rem 0;
    font-size: 1.75rem;

    @media (max-width: 1024px) {
        font-size: 1.55rem     
    }

    @media (max-width: 768px) {
        font-size: 1.40rem;
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