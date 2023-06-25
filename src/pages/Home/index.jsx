import { useEffect, useState } from "react";
import { CategoryButton } from "../../components/CategoryButton";
import { CategoryBox, CategoryDiv, CategoryTitle, CompanyBgImg, CompanyInfos, CompanyLogo, CompanyTitle, CompanyTitleSm, Container, FoodList, GoToCartButton, GoToCartButtonContent, Header, HeaderFixed, HeaderFixedBox, ItensAmount, ItensTotalPrice, ProductCategoryBox, ScrollAreaScrollbar, ScrollAreaThumb, SeeCart, SkeletonBg, SkeletonCattegory, SkeletonCatTitle, SkeletonLogo, SkeletonProduct, SkeletonTitle } from "./styles";
import { api } from "../../lib/axios";
import { Product } from "../../components/Product";
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useParams } from "react-router-dom";

export function Home() {
    const [client, setClient] = useState({})
    const [header, setHeader] = useState('normal')
    const [loading, setLoading] = useState(true);
    const { clientUrl } = useParams();
    const arr = [0,1,2,3];

    const [category, setCategory] = useState([]);
    const [categorySelected, setCategorySelected] = useState(0);

    const [productList, setProductList] = useState([])
    const [filteredProductList, setFilteredProductList] = useState([])

    const { cart, totalCartPrice } = useContext(CartContext)
    useEffect(() => {
        getClientData();

        function scrollListner() {
            if(window.scrollY > 100) {
              setHeader('fixed');
            } else {
              setHeader('normal');
            }
        }

        window.addEventListener('scroll', scrollListner);
        return () => {
            window.removeEventListener('scroll', scrollListner);
        }
    }, [])

    useEffect(() => {
        if(categorySelected !== 0) {
            setFilteredProductList(productList.filter(product => product.categories_id === categorySelected))
        }
    }, [categorySelected])
    
    async function getClientData() {
        const cli = await api.get('clients/'+clientUrl);
        setClient(cli.data)
        setCategory(cli.data.Categories.filter(category => {
            return cli.data.Products.some(product => product.categories_id === category.id);
        }))
        setProductList(cli.data.Products)
        setLoading(false);
    }

    return (
        <Container>

            {header === 'normal' ? 
                (
                <Header>
                    {loading ? 
                    <SkeletonBg />
                    :
                    <CompanyBgImg src={client.background} />
                    }
                    
                    {loading ? 
                    <CompanyInfos>
                        <SkeletonLogo />
                        <SkeletonTitle />
                    </CompanyInfos>
                    :
                    <CompanyInfos>
                        <CompanyLogo src={client.logo} />
                        <CompanyTitle>{client.title}</CompanyTitle>
                    </CompanyInfos> 
                    
                    }
                   
                    <ScrollArea.Root>
                        <ScrollArea.Viewport>
                            <CategoryBox paddingTop="0.8rem">
                                {loading ? 
                                    <>
                                        {arr.map((k) => (
                                            <SkeletonCattegory key={k} />
                                        ))}
                                    </>
                                : 
                                <>
                                    <CategoryButton
                                        active={categorySelected === 0}
                                        data={{id:0, title: 'Todos'}}
                                        setCategorySelected={setCategorySelected}
                                    />
                                    {category.map(category => {
                                        return (
                                            <CategoryButton
                                                active={categorySelected === category.id}
                                                key={category.id}
                                                data={category}
                                                setCategorySelected={setCategorySelected}
                                            />
                                        )
                                    })}
                                </>
                                }
                                
                            </CategoryBox>

                        </ScrollArea.Viewport>
                        <ScrollAreaScrollbar orientation="horizontal">
                            <ScrollAreaThumb />
                        </ScrollAreaScrollbar>
                        <ScrollArea.Corner />
                    </ScrollArea.Root>

                </Header>
                ) 
                : 
                (
                <HeaderFixed>
                    <HeaderFixedBox>
                        <CompanyInfos>
                            <CompanyTitleSm>{client.title}</CompanyTitleSm>
                        </CompanyInfos>

                        <ScrollArea.Root>
                            <ScrollArea.Viewport>
                                <CategoryBox paddingTop="0.8rem">
                                    <CategoryButton
                                        active={categorySelected === 0}
                                        data={{id:0, title: 'Todos'}}
                                        setCategorySelected={setCategorySelected}
                                    />
                                    {category.map(category => {
                                        return (
                                            <CategoryButton
                                                active={categorySelected === category.id}
                                                key={category.id}
                                                data={category}
                                                setCategorySelected={setCategorySelected}
                                            />
                                        )
                                    })}
                                </CategoryBox>

                            </ScrollArea.Viewport>
                            <ScrollAreaScrollbar orientation="horizontal">
                                <ScrollAreaThumb />
                            </ScrollAreaScrollbar>
                            <ScrollArea.Corner />
                        </ScrollArea.Root>
                    </HeaderFixedBox>
 
                </HeaderFixed>
                )
            }

            <FoodList>
                {loading ? 
                <>
                    {arr.map((i, k) => (
                        <CategoryDiv key={k}>
                            <SkeletonCatTitle />
                            <ProductCategoryBox>
                                {arr.map((i, k) => (
                                    <SkeletonProduct key={k} />
                                ))}
                            </ProductCategoryBox>
                        </CategoryDiv>
                    ))}
                </>
                :
                <>
                    {categorySelected !== 0 ? (
                        <>
                        { category.map(category => {
                            if(category.id === categorySelected) {
                                return (
                                    <CategoryDiv key={category.id}>
                                        <CategoryTitle>{category.title}</CategoryTitle>
                                        <ProductCategoryBox>
                                            {filteredProductList.map(product => {
                                                return (
                                                    <Product 
                                                        key={product.id} 
                                                        data={{...product, categoryId: product.categories_id}} 
                                                    />
                                                )
                                            })}
                                        </ProductCategoryBox>
                                    </CategoryDiv>
                                )
                            }
                        })}
                        </>
                    ) : (
                        <>
                        { category.map(category => {
                            return (
                                <CategoryDiv key={category.id}>
                                    <CategoryTitle>{category.title}</CategoryTitle>
                                    <ProductCategoryBox>
                                        {productList.map(product => {
                                            if(product.categories_id === category.id) {
                                                return (
                                                    <Product key={product.id} data={{...product, categoryId: product.categories_id}} />
                                                )
                                            }
                                        })}
                                    </ProductCategoryBox>
                                </CategoryDiv>
                            )
                        })}
                        </>
                    )}
                </>
                }
                
 
            </FoodList>

            { cart.length > 0 &&   
            <GoToCartButton>
                <GoToCartButtonContent to="/cart">
                    <ItensAmount>
                        {cart.length}
                    </ItensAmount>
                    <SeeCart>
                        Ver carrinho
                    </SeeCart>
                    <ItensTotalPrice>
                        {totalCartPrice.toLocaleString('pt-br', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                    </ItensTotalPrice>
                </GoToCartButtonContent>        
            </GoToCartButton> }
        </Container>
    )
}