import * as Dialog from '@radix-ui/react-dialog';
import { AddToCartButton, CloseButton, Container, Content, ContentBox, Description, Footer, Header, Image, Overlay, Price, ProductTitle, ScrolableContent, ScrollAreaScrollbar, ScrollAreaThumb, ScrollSafeArea, Separator } from './styles';
import { IoCloseSharp } from 'react-icons/io5';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { IncrementableButton } from '../IncrementableButton';
import { Discount, ProductPrice } from '../Product/styles';

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

                                <Description>Dry tomatoes and Burrata</Description>
                                <Price>
                                    <ProductPrice>R$ 21,90</ProductPrice>
                                    <ProductPrice discount={true}>R$ 24,00</ProductPrice>
                                    <Discount>- 20%</Discount>
                                </Price>


                                <Separator />

                            </ScrollSafeArea>
                            <ScrollAreaScrollbar orientation="vertical">
                                <ScrollAreaThumb />
                            </ScrollAreaScrollbar>
                            <ScrollArea.Corner />
                        </ScrolableContent>

                        <Footer>
                            <IncrementableButton />

                            <AddToCartButton>
                                Adicionar
                            </AddToCartButton>
                        </Footer>
   
                    </ContentBox>
                </Content>
                
            </Container>
        </Dialog.Portal>
    )
}