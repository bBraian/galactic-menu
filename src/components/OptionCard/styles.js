import styled from "styled-components";
import * as Checkbox from '@radix-ui/react-checkbox';

export const Container = styled.div`
    border-radius: 12px;
    border: 1px solid ${props => props.theme['border']};
    padding: 4px 12px;
    display: flex;
    align-items: center;
`;

export const CheckboxRoot = styled(Checkbox.Root)`
    width: 22px;
    height: 22px;
    border-radius: 7px;
    border: 1px solid ${props => props.theme['border']};
    background-color: #f9f9f1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        background-color: #f1f1f1;
    }
`; 

export const CheckboxIndicator = styled(Checkbox.Indicator )`
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`; 

export const Box = styled.label`
    margin-left: 10px;
    cursor: pointer;
`; 

export const Title = styled.h2`
    font-size: 1rem;
    font-weight: 400;
`; 

export const Price = styled.p`
    font-size: 0.80rem;
    font-weight: 400;
`;
