import { Container, Box, Title, Price, CheckboxIndicator, CheckboxRoot } from './styles';
import { IoCheckbox } from 'react-icons/io5';

export function OptionCard({data}) {
    console.log(data);
    return (
        <Container>
            <CheckboxRoot id={data.id}>
                <CheckboxIndicator>
                    <IoCheckbox size={26} color="#FBA94C" />
                </CheckboxIndicator>
            </CheckboxRoot>
            <Box htmlFor={data.id}>
                <Title>{data.title}</Title>
                <Price>+ R$ 2,00</Price>
            </Box>
        </Container>
    )
}