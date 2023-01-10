import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
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

export const CategoryBox = styled.div`
    display: flex;
    gap: 0.65rem;
    padding: 0.8rem 1rem;
    overflow-y: hidden;
    overflow-x: scroll;
    flex-direction: row;
`;