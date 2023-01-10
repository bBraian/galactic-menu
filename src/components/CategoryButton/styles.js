import styled from "styled-components";

export const Container = styled.button`
    border: 2px solid ${props => props.theme['border']};
    background-color: ${props => props.theme['white']};
    border-radius: 12px;
    padding: 0.5rem 0.75rem;
    text-align: center;
    white-space: nowrap;
`;