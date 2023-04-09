import { useContext } from "react";
import { IoAdd, IoChevronDownOutline, IoRemove, IoTrash } from "react-icons/io5";
import { CartContext } from "../../context/CartContext";
import { ButtonShowOptionals, CustomRow, Product, ProductCounter, ProductEdits, ProductImage, ProductInfosBox, ProductPrice, ProductTitle, Container, Row, Separator, IncrementableButton, DeleteButton, CollapsibleTrigger, CollapsibleContent, Option } from "./styles";

export function CartProduct({ product }) {
    const { deleteFromCart, addOrRemoveProduct } = useContext(CartContext);

    function calculatePrice() {
        let price = product.price;
        product.options.map(opt => {
            price += opt.price;
        })
        let priceFormatted = parseInt(price).toFixed(2);
        return priceFormatted;
    }
    return (
        <Container>
            <Product>
                <ProductImage src={product.imageUrl} />
                <ProductInfosBox>
                    <Row>
                        <ProductTitle>{ product.title }</ProductTitle>
                    </Row>
                    <CustomRow>
                        <CollapsibleTrigger>
                            <ProductPrice>
                                {calculatePrice().toLocaleString('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                })}
                            </ProductPrice>
                            {product.options.length > 0 && 
                            <ButtonShowOptionals>
                                <IoChevronDownOutline />
                            </ButtonShowOptionals>}
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            { product.options.map(option => (
                                <Option 
                                    key={option.id}
                                >
                                +{` `}
                                {option.price.toLocaleString('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                })}
                                {` `} 
                                {option.title}
                                </Option>
                            )) }
                        </CollapsibleContent>
                    </CustomRow>
                    <ProductEdits>
                        { product.amount === 1 ?
                        <DeleteButton onClick={() => deleteFromCart(product.cartProductId)}>
                            <IoTrash size={22} color="red" />
                        </DeleteButton>
                        :
                        <IncrementableButton onClick={() => addOrRemoveProduct(product.cartProductId, "remove")}>
                            <IoRemove size={22} />
                        </IncrementableButton>
                        }
                        
                        <ProductCounter>{ product.amount }</ProductCounter>
                        <IncrementableButton onClick={() => addOrRemoveProduct(product.cartProductId, "add")}>
                            <IoAdd size={22} />
                        </IncrementableButton>
                    </ProductEdits>
                </ProductInfosBox>
            </Product>
            <Separator />
        </Container>
    )
}