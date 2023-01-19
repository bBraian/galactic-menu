import * as Dialog from '@radix-ui/react-dialog';
import { Container, Overlay } from './styles';

export function AddToCartDialog() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Container>
                ops
                <Dialog.Title />
                <Dialog.Description />
                <Dialog.Close />
            </Container>
        </Dialog.Portal>
    )
}