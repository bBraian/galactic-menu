import { useEffect, useState } from "react";
import { 
    Container,
    Image,
    Content,
    ProductInfos,
    ProductText,
    Title,
    Description,
    Discount,
    Price,
    ProductPrice,
    ButtonAddProduct
} from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import { AddToCartDialog } from "../AddToCartDialog";

export function Product({data}) {
    const [discount, setDiscount] = useState(false);
    useEffect(() => {
        if(data.price.discounted !== "") {
            calculateDiscount();
        } 
    }, [])

    function calculateDiscount() {
        let originalPrice = parseFloat(data.price.original);
        let priceWithDiscount = parseFloat(data.price.discounted);
        let result = (100 - ((priceWithDiscount * 100) / originalPrice));
        setDiscount(result.toFixed(0));
    }
    
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild >
                <Container>
                    <Image src={data.imageUrl} />
                    <Content>

                        <ProductInfos>
                            <ProductText>
                                <Title>{data.title}</Title>
                                <Description>{data.description}</Description>
                            </ProductText>
                            {discount && <Discount>- {discount}%</Discount> }
                        </ProductInfos>

                        <ProductInfos>
                            {data.price.discounted === "" ? 
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
                                    </Price>
                                ) 
                            }
                            <ButtonAddProduct>+</ButtonAddProduct>
                        </ProductInfos>
                    </Content>
                </Container>
            </Dialog.Trigger>
            
            <AddToCartDialog 
                data={{...data, discount: discount}}
            />
        </Dialog.Root>
    )
}