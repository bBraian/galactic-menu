import { IoAdd, IoChevronDownOutline, IoRemove, IoTrash } from "react-icons/io5";
import { ButtonShowOptionals, CustomRow, Product, ProductCounter, ProductEdits, ProductImage, ProductInfosBox, ProductPrice, ProductTitle, Container, Row, Separator, IncrementableButton, DeleteButton, CollapsibleTrigger, CollapsibleContent, Option } from "./styles";

export function CartProduct({ product }) {
    console.log(product)
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
                                {product.price.toLocaleString('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                })}
                            </ProductPrice>
                            <ButtonShowOptionals>
                                <IoChevronDownOutline />
                            </ButtonShowOptionals>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            { product.options.map(option => (
                                <Option key={option.id}>{option.title}</Option>
                            )) }
                        </CollapsibleContent>
                    </CustomRow>
                    <ProductEdits>
                        { product.amount === 1 ?
                        <DeleteButton>
                            <IoTrash size={22} color="red" />
                        </DeleteButton>
                        :
                        <IncrementableButton>
                            <IoRemove size={22} />
                        </IncrementableButton>
                        }
                        
                        <ProductCounter>{ product.amount }</ProductCounter>
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