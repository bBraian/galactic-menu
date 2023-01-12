import { Container } from "./styles";

export function CategoryButton({ data, active, setCategorySelected, ...rest }) {
    return (
        <Container {...rest} active={active} onClick={() => setCategorySelected(data.id)}>
            {data.title}
        </Container>
    )
}