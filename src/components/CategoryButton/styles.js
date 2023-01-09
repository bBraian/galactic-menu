import styled from "styled-components";

export const Container = styled.button`
    border: 1px solid ${props => props.theme['border']};
    border-radius: 12px;
    padding: 0.5rem 0.75rem;
`;