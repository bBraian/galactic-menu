import { IoAdd, IoChevronDownOutline, IoRemove, IoTrash } from "react-icons/io5";
import { ButtonShowOptionals, CustomRow, Product, ProductCounter, ProductDiscount, ProductEdits, ProductImage, ProductInfosBox, ProductPrice, ProductTitle, Container, Row, Separator, IncrementableButton, DeleteButton } from "./styles";

export function CartProduct() {
    return (
        <Container>
            <Product>
                <ProductImage src="https://www.vpjalimentos.com.br/wp-content/uploads/elementor/thumbs/Burger_Paula_Labaki_Texto_Reinenc%CC%A7a%CC%83o_do_Hambu%CC%81rguer_ok-px12mzvmm8br83abzy5y2xpu323h16k5psw5ya3ocg.png" />
                <ProductInfosBox>
                    <Row>
                        <ProductTitle>Hamburguer Simples</ProductTitle>
                        <ProductDiscount>- 9%</ProductDiscount>
                    </Row>
                    <CustomRow>
                        <ProductPrice>R$ 21,90</ProductPrice>
                        <ButtonShowOptionals>
                            <IoChevronDownOutline />
                        </ButtonShowOptionals>
                    </CustomRow>
                    <ProductEdits>
                        {/* <DeleteButton>
                            <IoTrash size={22} color="red" />
                        </DeleteButton> */}
                        <IncrementableButton>
                            <IoRemove size={22} />
                        </IncrementableButton>
                        <ProductCounter>1</ProductCounter>
                        <IncrementableButton>
                            <IoAdd size={22} />
                        </IncrementableButton>
                    </ProductEdits>
                </ProductInfosBox>
            </Product>
            <Separator />
        </Container>
    )
}