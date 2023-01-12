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

export function Product({data}) {
    return (
        <Container>
            <Image src={data.imageUrl} />
            <Content>

                <ProductInfos>
                    <ProductText>
                        <Title>{data.title}</Title>
                        <Description>{data.description}</Description>
                    </ProductText>
                    <Discount>- 20%</Discount>
                </ProductInfos>

                <ProductInfos>
                    <Price>
                        <ProductPrice discount={false}>R$ 24,90</ProductPrice>
                        <ProductPrice discount={true}>R$ 28,00</ProductPrice>
                    </Price>
                    <ButtonAddProduct>+</ButtonAddProduct>
                </ProductInfos>
            </Content>
        </Container>
    )
}