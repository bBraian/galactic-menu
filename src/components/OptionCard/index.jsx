import { Container, Box, Title, Price, CheckboxIndicator, CheckboxRoot } from './styles';
import { IoCheckbox } from 'react-icons/io5';

export function OptionCard({data, optionsSelected, setOptionsSelected}) {
    
    function handleSetOptionsSelected(option) {
        let exists = optionsSelected.some(opt => opt.id === option.id);
        if(exists) {
            setOptionsSelected(optionsSelected.filter(opt => opt.id !== option.id))
        } else {
            setOptionsSelected([...optionsSelected, option])
        }
    }

    return (
        <Container>
            <CheckboxRoot id={data.id} onCheckedChange={() => handleSetOptionsSelected(data)}>
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