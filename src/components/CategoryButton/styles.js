import styled from "styled-components";
import { motion } from "framer-motion"

export const Container = styled(motion.button)`
    z-index: 8;
    border: 2px solid ${props => (props.active ? props.theme['bar'] : props.theme['border'])};;
    background-color: ${props => (props.active ? props.theme['bar'] : props.theme['background'])};
    color: ${props => (props.active ? props.theme['white'] : props.theme['gray-900'])};;
    border-radius: 12px;
    padding: 0.5rem 0.75rem;
    text-align: center;
    white-space: nowrap;
    font-size: 1rem;
    cursor: pointer;
`;