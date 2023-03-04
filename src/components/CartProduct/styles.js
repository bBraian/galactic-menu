import styled from "styled-components";
import * as Collapsible from '@radix-ui/react-collapsible';

export const Container = styled.div``;

export const Separator = styled.hr`
    margin: 12px 0;
    border-top: 1px solid ${props => props.theme['border']};
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
`;

export const Product = styled.div`
    display: flex;
    flex: 1;
`;

export const ProductImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 16px;
`;

export const ProductInfosBox = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 6px 12px;
    gap: 2px;
    overflow: hidden;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1;
`;

export const ProductTitle = styled.h2`
    color: ${props => props.theme['gray-600']};
    font-weight: 500;
    font-size: 1rem;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
`;

export const ProductDiscount = styled.div`
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

export const CustomRow = styled(Collapsible.Root)`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 2px;
`;

export const CollapsibleTrigger = styled(Collapsible.Trigger)`
    display: flex;
    flex-direction: row;
    border: 0;
    gap: 5px;
`;

export const CollapsibleContent = styled(Collapsible.Content)`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

export const Option = styled.li`
    font-size: 14px;
`;

export const ButtonShowOptionals = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 0;
    cursor: pointer;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transition: background-color ease-in-out 0.1s;
    &:hover {
        background-color: #d7d7d7;
    }
`;

export const ProductPrice = styled.p`
    color: ${props => props.theme['gray-900']};
    font-weight: 600;
    font-size: 14px;
`;

export const ProductEdits = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    gap: 12px;
    justify-content: flex-end;
`;

export const ProductCounter = styled.p`
`;

export const BaseButton = styled.button`
    width: 26px;
    height: 26px;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: background-color ease-in-out 0.1s;
    cursor: pointer;
    padding: 2px;
`;

export const DeleteButton = styled(BaseButton)`
    &:hover {
        background-color: #ffc0c0;
    }
`;

export const IncrementableButton = styled(BaseButton)`
    &:hover {
        background-color: #d7d7d7;
    }
`;