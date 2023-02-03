import { Container, Checkbox, Box, Title, Price } from './styles';

export function OptionCard() {
    return (
        <Container>
            <Checkbox>O</Checkbox>
            <Box>
                <Title>Metade</Title>
                <Price>R$ 2,00</Price>
            </Box>
        </Container>
    )
}