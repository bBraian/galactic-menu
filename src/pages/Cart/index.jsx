import { BackHomeButton, CartList, Container, Footer, GoToCartButtonContent, Header, HeaderTitle, ItensAmount, ItensTotalPrice, SeeCart } from "./styles";
import { IoArrowBackOutline } from "react-icons/io5"
import { CartProduct } from "../../components/CartProduct";

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
                <CartProduct />
                <CartProduct />
                <CartProduct />
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