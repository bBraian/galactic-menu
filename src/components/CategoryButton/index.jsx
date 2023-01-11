import { Container } from "./styles";

export function CategoryButton({ title, active, ...rest }) {
    return (
        <Container {...rest} active={active}>
            {title}
        </Container>
    )
}