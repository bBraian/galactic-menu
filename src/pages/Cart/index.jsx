import { BackHomeButton, CartList, Container, Footer, GoToCartButtonContent, Header, HeaderTitle, ItensAmount, ItensTotalPrice, SeeCart } from "./styles";
import { IoArrowBackOutline } from "react-icons/io5"
import { CartProduct } from "../../components/CartProduct";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Cart() {
    const { cart } = useContext(CartContext)
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
                {cart.map(product => (
                    <CartProduct 
                        key={product.id}
                        product={product}
                    />
                ))}
            </CartList>

            <Footer>
                <GoToCartButtonContent to="/cart">
                    <ItensAmount>
                        {cart.length}
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