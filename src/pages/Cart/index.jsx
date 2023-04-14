import { BackHomeButton, CartList, Container, Footer, GoToCartButtonContent, Header, HeaderTitle, ImgBg, ItensAmount, ItensTotalPrice, SeeCart } from "./styles";
import { IoArrowBackOutline } from "react-icons/io5"
import { CartProduct } from "../../components/CartProduct";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Cart() {
    const { cart, totalCartPrice } = useContext(CartContext)
    const navigate = useNavigate();

    useEffect(() => {
        if(cart.length === 0) {
            navigate('/');
        }
    }, [cart])

    function sendWhatsMessageWithOrder() {
        const baseURL = 'https://wa.me/5551996268989?text=';
        let message = 'Pedido%20%2347345%0A%0AHamburguer%2008%0A*%20Bacon%0A*%20Barbecue%0A%0APizza%20de%20frango%0A*%20Sem%20queijo%0A%0ATotal%3A%2074%2C00';
        const url = baseURL+message;
        window.open(url, "_blank");
    }
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
                <GoToCartButtonContent onClick={sendWhatsMessageWithOrder}>
                    <ItensAmount>
                        {cart.length}
                    </ItensAmount>
                    <SeeCart>
                        Finalizar
                    </SeeCart>
                    <ItensTotalPrice>
                        {totalCartPrice.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                    </ItensTotalPrice>
                </GoToCartButtonContent>
            </Footer>
        </Container>
    )
}