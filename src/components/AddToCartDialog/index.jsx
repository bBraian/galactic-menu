import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Container, Content, ContentBox, Footer, Header, Image, Overlay, ProductTitle, ScrolableContent, ScrollAreaScrollbar, ScrollAreaThumb, ScrollSafeArea } from './styles';
import { IoCloseSharp } from 'react-icons/io5';
import * as ScrollArea from '@radix-ui/react-scroll-area';

export function AddToCartDialog() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Container>
                <Content>
                    <Image src="https://qlickmenu.s3-us-west-1.amazonaws.com/companies/products/93cde489-c265-43bd-b5cc-88ceb00eec51.jpg" />
                    <ContentBox>
                        <Header>
                            <ProductTitle>Pizza de Frango</ProductTitle>
                            <CloseButton>
                                <IoCloseSharp />
                            </CloseButton>
                        </Header>
                        <ScrolableContent>
                            <ScrollSafeArea>
                                <p>oi</p><br />
                            </ScrollSafeArea>
                            <ScrollAreaScrollbar orientation="vertical">
                                <ScrollAreaThumb />
                            </ScrollAreaScrollbar>
                            <ScrollArea.Corner />
                        </ScrolableContent>
                        <Footer></Footer>
   
                    </ContentBox>
                </Content>
                
            </Container>
        </Dialog.Portal>
    )
}