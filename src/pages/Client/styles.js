import styled from "styled-components";

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

export const ClientList = styled.div`
    padding: 0 1rem;
    margin-bottom: 5rem;
    margin-top: 15rem;


    @media (max-width: 1024px) {
        margin-top: 15rem;
    }

    @media (max-width: 768px) {
        margin-top: 11.5rem;
    } 
`;