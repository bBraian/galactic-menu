import { Container } from "./styles";

export function CategoryButton({ data, active, setCategorySelected, ...rest }) {
    return (
        <Container {...rest} active={active} onClick={() => setCategorySelected(data.id)} whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
            {data.title}
        </Container>
    )
}