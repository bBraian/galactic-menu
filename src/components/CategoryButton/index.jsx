import { Container } from "./styles";

export function CategoryButton({ title, ...rest }) {
    return (
        <Container {...rest}>
            {title}
        </Container>
    )
}