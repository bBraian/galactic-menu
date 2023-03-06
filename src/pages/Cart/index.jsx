import { BackHomeButton, CartList, Container, Footer, GoToCartButtonContent, Header, HeaderTitle, ImgBg, ItensAmount, ItensTotalPrice, SeeCart } from "./styles";
import { IoArrowBackOutline } from "react-icons/io5"
import { CartProduct } from "../../components/CartProduct";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CompanyBg from "../../assets/images/companybg.png";

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
    return (
        <Container>
            <Header>
                <BackHomeButton to="/">
                    <IoArrowBackOutline /> Voltar
                </BackHomeButton>

                <ImgBg src={CompanyBg} />

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