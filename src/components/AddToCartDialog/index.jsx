import * as Dialog from '@radix-ui/react-dialog';
import { Container, Content, ContentBox, Image, Overlay } from './styles';

export function AddToCartDialog() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Container>
                <Content>
                    <Image src="https://qlickmenu.s3-us-west-1.amazonaws.com/companies/products/93cde489-c265-43bd-b5cc-88ceb00eec51.jpg" />
                    <ContentBox>
                        Ola mundo
                        <Dialog.Close />
                    </ContentBox>
                </Content>
                
            </Container>
        </Dialog.Portal>
    )
}