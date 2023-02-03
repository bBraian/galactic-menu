import * as Dialog from '@radix-ui/react-dialog';
import { AddToCartButton, CloseButton, Container, Content, ContentBox, Description, Footer, Header, Image, OptionBox, OptionDescription, OptionList, OptionRequired, OptionTitle, Overlay, Price, ProductTitle, Row, ScrolableContent, ScrollAreaScrollbar, ScrollAreaThumb, ScrollSafeArea, Separator } from './styles';
import { IoCloseSharp } from 'react-icons/io5';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { IncrementableButton } from '../IncrementableButton';
import { Discount, ProductPrice } from '../Product/styles';
import { OptionCard } from '../OptionCard';

export function AddToCartDialog({data}) {
    return (
        <Dialog.Portal>
            <Overlay />
            <Container>
                <Content>
                    <Image src={data.imageUrl} />
                    <ContentBox>
                        <Header>
                            <ProductTitle>{data.title}</ProductTitle>
                            <CloseButton>
                                <IoCloseSharp />
                            </CloseButton>
                        </Header>

                        <ScrolableContent>
                            <ScrollSafeArea>

                                <Description>{data.description}</Description>
                                { data.price.discounted === "" ? 
                                    (
                                        <Price>
                                            <ProductPrice>R$ {data.price.original}</ProductPrice>
                                        </Price>
                                    ) : 
                                    (
                                        <Price>
                                            <ProductPrice>R$ {data.price.discounted}</ProductPrice>
                                            <ProductPrice discount={true}>R$ {data.price.original}</ProductPrice>
                                            <Discount>- {data.discount}%</Discount>
                                        </Price>
                                    ) 
                                }

                                <OptionBox>
                                    <Separator />
                                    <Row>
                                        <OptionTitle>Tamanho</OptionTitle>
                                        <OptionRequired>Opcional</OptionRequired>
                                    </Row>
                                    <OptionDescription>Selecione o tamanho</OptionDescription>
                                    <OptionList>
                                        <OptionCard />
                                        <OptionCard />
                                        <OptionCard />
                                        <OptionCard />
                                        <OptionCard />
                                        <OptionCard />
                                        <OptionCard />
                                        <OptionCard />
                                    </OptionList>
                                </OptionBox>
                              

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