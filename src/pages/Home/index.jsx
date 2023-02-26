import { useEffect, useState } from "react";
import { CategoryButton } from "../../components/CategoryButton";
import { CategoryBox, CategoryDiv, CategoryTitle, CompanyBgImg, CompanyInfos, CompanyLogo, CompanyTitle, CompanyTitleSm, Container, FoodList, GoToCartButton, GoToCartButtonContent, Header, HeaderFixed, HeaderFixedBox, ItensAmount, ItensTotalPrice, ProductCategoryBox, ScrollAreaScrollbar, ScrollAreaThumb, SeeCart } from "./styles";
import { api } from "../../lib/axios";
import { Product } from "../../components/Product";
import * as ScrollArea from '@radix-ui/react-scroll-area';
import companyLogo from "../../assets/images/companylogo.png";
import companyBg from "../../assets/images/companybg.png";

export function Home() {
    const [header, setHeader] = useState('normal')

    const [foodCategory, setFoodCategory] = useState([]);
    const [categorySelected, setCategorySelected] = useState(0);

    const [productList, setProductList] = useState([])
    const [filteredProductList, setFilteredProductList] = useState([])

    useEffect(() => {
        getFoodCategory();
        getProductList();

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
            setFilteredProductList(productList.filter(product => product.categoryId === categorySelected))
        }
    }, [categorySelected])
    
    async function getFoodCategory() {
        const res = await api.get('categories');
        setFoodCategory(res.data);
    }

    async function getProductList() {
        const res = await api.get('products');
        setProductList(res.data);
    }

    return (
        <Container>

            {header === 'normal' ? 
                (
                <Header>
                    <CompanyBgImg src={companyBg} />
                    <CompanyInfos>
                        <CompanyLogo src={companyLogo} />
                        <CompanyTitle>Galaxy Menu</CompanyTitle>
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

                </Header>
                ) 
                : 
                (
                <HeaderFixed>
                    <HeaderFixedBox>
                        <CompanyInfos>
                            <CompanyTitleSm>Braia's Bar</CompanyTitleSm>
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
                {categorySelected !== 0 ? (
                    <>
                    { filteredProductList.map(product => {
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
 
            </FoodList>

            <GoToCartButton>
                <GoToCartButtonContent>
                    <ItensAmount>
                        2
                    </ItensAmount>
                    <SeeCart>
                        Ver carrinho
                    </SeeCart>
                    <ItensTotalPrice>
                        R$ 25,00
                    </ItensTotalPrice>
                </GoToCartButtonContent>        
            </GoToCartButton>        
        </Container>
    )
}