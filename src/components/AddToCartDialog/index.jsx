import { AddToCartButton, CloseButton, CloseButtonMobile, Comments, CommentsInput, Container, Content, ContentBox, Description, Footer, Header, Image, OptionBox, OptionDescription, OptionList, OptionRequired, OptionTitle, Overlay, Price, ProductTitle, ProductTitleMobile, Row, ScrolableContent, ScrollAreaScrollbar, ScrollAreaThumb, ScrollSafeArea, Separator } from './styles';
import { useEffect, useState } from 'react';

import { IoCloseSharp } from 'react-icons/io5';
import * as Dialog from '@radix-ui/react-dialog';
import * as ScrollArea from '@radix-ui/react-scroll-area';

import { IncrementableButton } from '../IncrementableButton';
import { Discount, ProductPrice } from '../Product/styles';
import { OptionCard } from '../OptionCard';
import { api } from '../../lib/axios';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import { v4 as uuidv4 } from 'uuid';

export function AddToCartDialog({data}) {
    const [options, setOptions] = useState([]);
    const [optionsSelected, setOptionsSelected] = useState([]);
    const [amount, setAmount] = useState(1);
    const [price, setPrice] = useState('');
    const { addToCart } = useContext(CartContext);

    function handleSetAmount(action) {
        if(action === 'plus') {
            setAmount(state => state + 1);
        } else if(action === 'minus') {
            if(amount !== 1) {
                setAmount(state => state - 1);
            }
        }
    }

    function calculateOptionsSelectedPrice() {
        let price = 0;

        optionsSelected.forEach(opt => {
            price += opt.price;
        })

        return price;
    }

    async function getOptions(categoryId) {
        const res = await api.get('options?categoryId='+categoryId);
        setOptions(res.data);
    }

    function handleAddToCart() {
        const cartProductId = uuidv4();
        let product = {
            cartProductId,
            id: data.id,
            imageUrl: data.imageUrl,
            title: data.title,
            price: data.price.discounted === "" ? data.price.original : data.price.discounted,
            amount: amount,
            options: optionsSelected
        }
        addToCart(product)
        setPrice(data.price.discounted === "" ? parseInt(data.price.original) : parseInt(data.price.discounted))
    }

    useEffect(() => {
        getOptions(data.categoryId);
    }, [])

    useEffect(() => {
        let currentPrice = 0
        if(data.price.discounted === "") {
            currentPrice = parseInt(data.price.original) * amount;
        } else {
            currentPrice = parseInt(data.price.discounted) * amount;
        }

        currentPrice += calculateOptionsSelectedPrice();

        setPrice(currentPrice);
    }, [amount, optionsSelected])
    
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

                        <CloseButtonMobile>
                            <IoCloseSharp />
                        </CloseButtonMobile>

                        <ScrolableContent>
                            <ScrollSafeArea>
                                <ProductTitleMobile>{data.title}</ProductTitleMobile>
                                <Description>{data.description}</Description>
                                { data.price.discounted === "" ? 
                                    (
                                        <Price>
                                            <ProductPrice>
                                                {data.price.original.toLocaleString('pt-br', {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                })}                
                                            </ProductPrice>
                                        </Price>
                                    ) : 
                                    (
                                        <Price>
                                            <ProductPrice>
                                                {data.price.discounted.toLocaleString('pt-br', {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                })}                
                                            </ProductPrice>
                                            <ProductPrice discount={true}>
                                                {data.price.original.toLocaleString('pt-br', {
                                                    style: 'currency',
                                                    currency: 'BRL'
                                                })}                
                                            </ProductPrice>
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
                                                        <OptionCard 
                                                            data={item} 
                                                            key={item.id}
                                                            optionsSelected={optionsSelected}
                                                            setOptionsSelected={setOptionsSelected}
                                                        />
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
                            <IncrementableButton 
                                amount={amount}
                                setAmount={handleSetAmount}                            
                            />

                            <AddToCartButton
                                onClick={handleAddToCart}
                            >
                                Adicionar {price.toLocaleString('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                })}
                            </AddToCartButton>
                        </Footer>
   
                    </ContentBox>
                </Content>
            </Container>
        </Dialog.Portal>
    )
}