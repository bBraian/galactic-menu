import { BackHomeButton, CartList, Container, Footer, Header, HeaderTitle } from "./styles";
import { IoArrowBackOutline } from "react-icons/io5"

export function Cart() {
    return (
        <Container>
            <Header>
                <BackHomeButton>
                    <IoArrowBackOutline /> Voltar
                </BackHomeButton>

                <HeaderTitle>
                    Galaxy Menu | Carrinho
                </HeaderTitle>
            </Header>

            <CartList>

            </CartList>

            <Footer>

            </Footer>
        </Container>
    )
}