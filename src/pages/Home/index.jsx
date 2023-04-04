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
    const { clientName } = useParams();
    const arr = [0,1,2,3];

    const [foodCategory, setFoodCategory] = useState([]);
    const [categorySelected, setCategorySelected] = useState(0);
    const [defaultCategory, setDefaultCategory] = useState(0);

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
        if(categorySelected !== defaultCategory) {
            setFilteredProductList(productList.filter(product => product.categoryId === categorySelected))
        }
    }, [categorySelected])

    useEffect(() => {
        if(foodCategory.length > 0) {
            let defCat = foodCategory.filter(category => category.default === true)[0];
            setDefaultCategory(defCat.id)
            setCategorySelected(defCat.id);
        }
    }, [foodCategory])
    
    async function getClientData() {
        const cli = await api.get('clients?name='+clientName);
        setClient(cli.data);
        const clientId = await cli.data.id;

        const cat = await api.get('categories?clientId='+clientId);
        setFoodCategory(cat.data);

        const res = await api.get('products?clientId='+clientId);
        setProductList(res.data);
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
                                        {arr.map(() => (
                                            <SkeletonCattegory />
                                        ))}
                                    </>
                                : 
                                <>
                                    {foodCategory.map(category => {
                                        return (
                                            <CategoryButton
                                                active={categorySelected === category.id ? true : false}
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
                                    {foodCategory.map(category => {
                                        return (
                                            <CategoryButton
                                                active={categorySelected === category.id ? true : false}
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
                    {categorySelected !== defaultCategory ? (
                        <>
                        { filteredProductList.map(product => {
                            return (
                                <CategoryDiv key={product.categoryId}>
                                    <CategoryTitle>{product.categoryTitle}</CategoryTitle>
                                    <ProductCategoryBox>
                                        {product.categoryProducts.map(prod => {
                                            return (
                                                <Product 
                                                    key={prod.id} 
                                                    data={{...prod, categoryId: product.categoryId}} 
                                                />
                                            )
                                        })}
                                    </ProductCategoryBox>
                                </CategoryDiv>
                            )
                        })}
                        </>
                    ) : (
                        <>
                        { productList.map(product => {
                            return (
                                <CategoryDiv key={product.categoryId}>
                                    <CategoryTitle>{product.categoryTitle}</CategoryTitle>
                                    <ProductCategoryBox>
                                        {product.categoryProducts.map(prod => {
                                            return (
                                                <Product key={prod.id} data={{...prod, categoryId: product.categoryId}} />
                                            )
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