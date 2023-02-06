import { Button, Container, Counter } from "./styles";
import { IoAdd, IoRemove  } from 'react-icons/io5';

export function IncrementableButton({amount, setAmount}) {
    return (
        <Container>
            <Button onClick={() => setAmount('minus')}>
                <IoRemove size={24} />
            </Button>
            <Counter>{amount}</Counter>
            <Button onClick={() => setAmount('plus')}>
                <IoAdd size={24} />
            </Button>
        </Container>
    );
}