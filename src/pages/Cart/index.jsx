import { BackHomeButton, CartList, Container, CustomRow, Footer, GoToCartButtonContent, Header, HeaderTitle, ItensAmount, ItensTotalPrice, Product, ProductCounter, ProductDiscount, ProductEdits, ProductImage, ProductInfosBox, ProductPrice, ProductTitle, Row, SeeCart } from "./styles";
import { IoArrowBackOutline, IoTrash, IoAdd } from "react-icons/io5"

export function Cart() {
    return (
        <Container>
            <Header>
                <BackHomeButton to="/">
                    <IoArrowBackOutline /> Voltar
                </BackHomeButton>

                <HeaderTitle>
                    Galaxy Menu | Carrinho
                </HeaderTitle>
            </Header>

            <CartList>
                <Product>
                    <ProductImage src="https://www.vpjalimentos.com.br/wp-content/uploads/elementor/thumbs/Burger_Paula_Labaki_Texto_Reinenc%CC%A7a%CC%83o_do_Hambu%CC%81rguer_ok-px12mzvmm8br83abzy5y2xpu323h16k5psw5ya3ocg.png" />
                    <ProductInfosBox>
                        <Row>
                            <ProductTitle>Hamburguer Simples</ProductTitle>
                            <ProductDiscount>- 9%</ProductDiscount>
                        </Row>
                        <CustomRow>
                            <ProductPrice>R$ 21,90</ProductPrice>
                        </CustomRow>
                        <ProductEdits>
                            <IoTrash size={24} color="red" />
                            <ProductCounter>1</ProductCounter>
                            <IoAdd size={24} />
                        </ProductEdits>
                    </ProductInfosBox>
                </Product>
            </CartList>

            <Footer>
                <GoToCartButtonContent to="/cart">
                    <ItensAmount>
                        2
                    </ItensAmount>
                    <SeeCart>
                        Finalizar
                    </SeeCart>
                    <ItensTotalPrice>
                        R$ 25,00
                    </ItensTotalPrice>
                </GoToCartButtonContent>
            </Footer>
        </Container>
    )
}