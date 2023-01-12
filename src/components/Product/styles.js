import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    border: 1px solid ${props => props.theme['border']};
    flex-direction: row;
    border-radius: 16px;
    width: 100%;
`;

export const Image = styled.img`
    width: 130px;
    height: 130px;
    object-fit: cover;
    background-repeat: no-repeat;
    border-radius: 16px 0 0 16px;

    @media (max-width: 1024px) {
        height: 114px;
        width: 114px;        
    }

    @media (max-width: 768px) {
        height: 100%;
        width: 80px;
    } 
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 12px;
    flex: 1;
`;

export const ProductInfos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ProductText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Title = styled.h2`
    font-size: 1rem;
    font-weight: 500;
    color: ${props => props.theme['gray-900']};
`;

export const Description = styled.p`
    font-size: 0.75rem;
    text-align: start;
    color: ${props => props.theme['gray-500']};
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden!important;
    text-overflow: ellipsis;
`;

export const Discount = styled.div`
    background-color: ${props => props.theme['yellow-500']};
    border-radius: 4px;
    height: 1rem;
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    padding: 0 6px;
    justify-content: center;
    align-items: center;
    font-size: 0.625rem;
    font-weight: 500;
    color: ${props => props.theme['white']};
`;

export const Price = styled.div`
    display: flex;
    gap: 4px;
    align-items: flex-end;
`;

export const ProductPrice = styled.span`
    color: ${props => (props.discount ? props.theme['gray-500'] : props.theme['gray-900'])};
    font-weight: ${props => (props.discount ? 400 : 500)};
    text-decoration: ${props => (props.discount ? 'line-through' : 'none')};
    font-size: 14px;
`;

export const ButtonAddProduct = styled.button`
    height: 1.75rem;
    width: 1.75rem;
    border-radius: 10px;
    border: 0;
    font-size: 1.25rem;
    text-align: center;
    color: ${props => props.theme['white']};
    background-color: ${props => props.theme['bar']};
`;