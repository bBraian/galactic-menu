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
import { formatNumberToPrice } from "../../utils";

export function Product({data}) {
    const [discount, setDiscount] = useState(false);
    useEffect(() => {
        if(data.price_discounted != null) {
            calculateDiscount();
        } 
    }, [])

    function calculateDiscount() {
        let originalPrice = parseFloat(data.price_original);
        let priceWithDiscount = parseFloat(data.price_discounted);
        let result = (100 - ((priceWithDiscount * 100) / originalPrice));
        setDiscount(result.toFixed(0));
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild >
                <Container
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Image src={data.image_url} />
                    <Content>

                        <ProductInfos>
                            <ProductText>
                                <Title>{data.title}</Title>
                                <Description>{data.description}</Description>
                            </ProductText>
                            {discount && <Discount>- {discount}%</Discount> }
                        </ProductInfos>

                        <ProductInfos>
                            {data.price_discounted === null ? 
                                (
                                    <Price>
                                        <ProductPrice>             
                                            {formatNumberToPrice(data.price_original)}                
                                        </ProductPrice>
                                    </Price>
                                ) 
                                    : 
                                (
                                    <Price>
                                        <ProductPrice>
                                            {formatNumberToPrice(data.price_discounted)}        
                                        </ProductPrice>
                                        <ProductPrice discount={true}>
                                            {formatNumberToPrice(data.price_original)}
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