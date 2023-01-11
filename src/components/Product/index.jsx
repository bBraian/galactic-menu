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

export function Product() {
    return (
        <Container>
            <Image src="https://digital-menu-seven.vercel.app/assets/h6.1b08aa0b.jpg" />
            <Content>

                <ProductInfos>
                    <ProductText>
                        <Title>Hamburguer 08</Title>
                        <Description>Pão, carne de hambúrguer, bacon, molho barbecue, queijo muçarela, alface, tomate, maionese e batata frita</Description>
                    </ProductText>
                    <Discount>- 20%</Discount>
                </ProductInfos>

                <ProductInfos>
                    <Price>
                        <ProductPrice discount={false}>R$ 24,90</ProductPrice>
                        <ProductPrice discount={true}>R$ 28,00</ProductPrice>
                    </Price>
                    <ButtonAddProduct>
                        +
                    </ButtonAddProduct>
                </ProductInfos>
            </Content>
        </Container>
    )
}