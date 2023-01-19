import styled from "styled-components";

export const Container = styled.button`
    border: 2px solid ${props => (props.active ? props.theme['bar'] : props.theme['border'])};;
    background-color: ${props => (props.active ? props.theme['bar'] : props.theme['background'])};
    color: ${props => (props.active ? props.theme['white'] : props.theme['gray-900'])};;
    border-radius: 12px;
    padding: 0.5rem 0.75rem;
    text-align: center;
    white-space: nowrap;
    font-size: 1rem;
    cursor: pointer;
    transition: transform ease-in-out 0.1s;

    &:hover {
        transform: scale(1.05);
    }
`;