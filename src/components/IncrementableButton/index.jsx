import { Button, Container, Counter } from "./styles";
import { IoAdd, IoRemove  } from 'react-icons/io5';

export function IncrementableButton() {
    return (
        <Container>
            <Button>
                <IoRemove size={24} />
            </Button>
            <Counter>1</Counter>
            <Button>
                <IoAdd size={24} />
            </Button>
        </Container>
    );
}