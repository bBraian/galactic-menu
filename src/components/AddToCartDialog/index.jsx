import { AddToCartButton, CloseButton, Comments, CommentsInput, Container, Content, ContentBox, Description, Footer, Header, Image, OptionBox, OptionDescription, OptionList, OptionRequired, OptionTitle, Overlay, Price, ProductTitle, Row, ScrolableContent, ScrollAreaScrollbar, ScrollAreaThumb, ScrollSafeArea, Separator } from './styles';
import { useEffect, useState } from 'react';

import { IoCloseSharp } from 'react-icons/io5';
import * as Dialog from '@radix-ui/react-dialog';
import * as ScrollArea from '@radix-ui/react-scroll-area';

import { IncrementableButton } from '../IncrementableButton';
import { Discount, ProductPrice } from '../Product/styles';
import { OptionCard } from '../OptionCard';
import { api } from '../../lib/axios';

export function AddToCartDialog({data}) {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        getOptions(data.categoryId);
    }, [])

    async function getOptions(categoryId) {
        const res = await api.get('options?categoryId='+categoryId);
        setOptions(res.data);
    }
    
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

                                {options.map(opt => {
                                    return (
                                        <OptionBox key={opt.id}>
                                            <Separator />
                                            <Row>
                                                <OptionTitle>{opt.title}</OptionTitle>
                                                <OptionRequired>
                                                    {opt.required ? "Obrigatório" : "Opcional"}
                                                </OptionRequired>
                                            </Row>
                                            <OptionDescription>{opt.description}</OptionDescription>
                                            <OptionList>
                                                {opt.optionsList.map(item => {
                                                    return (
                                                        <OptionCard data={item} key={item.id} />
                                                    )
                                                })}
                                            </OptionList>
                                        </OptionBox>
                                    )
                                })}

                                <Separator />

                                <Comments>Observações</Comments>

                                <CommentsInput placeholder='(opcional)' rows={2} />
                              

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