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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    gap: 20px;

    @media (max-width: 1024px) {
        margin-top: 15rem;
    }

    @media (max-width: 768px) {
        margin-top: 11.5rem;
    } 
`;

export const ClientBox = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid #C4C4C4;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
`;

export const ClientBg = styled.img`
    width: 200px;
    height: 130px;
    object-fit: cover;
    border-radius: 16px 0px 100% 16px;
`;

export const ClientPhoto = styled.img`
    width: 95px;
    height: 95px;
    border-radius: 16px;
    object-fit: cover;
    position: absolute;
    left: 125px;
    top: 17.5px;
`;

export const ClientTitle = styled.h2`
    font-size: 38px;
    margin-left: 32px;
    margin-top: 50px;
`;