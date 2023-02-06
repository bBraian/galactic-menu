import { Container, Box, Title, Price, CheckboxIndicator, CheckboxRoot } from './styles';
import { IoCheckbox } from 'react-icons/io5';

export function OptionCard({data, optionsSelected, setOptionsSelected}) {
    function handleSetOptionsSelected(option) {
        optionsSelected.forEach(opt => {
            let exists = Object.values(optionsSelected).includes(option.id);
            if(exists) {
                
            } else {

            }
        })
    }

    return (
        <Container>
            <CheckboxRoot id={data.id}>
                <CheckboxIndicator>
                    <IoCheckbox size={26} color="#FBA94C" />
                </CheckboxIndicator>
            </CheckboxRoot>
            <Box htmlFor={data.id}>
                <Title>{data.title}</Title>
                <Price>
                    {data.price.toLocaleString('pt-br', {
                        style: 'currency',
                        currency: 'BRL'
                    })}
                </Price>
            </Box>
        </Container>
    )
}