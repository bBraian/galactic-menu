import { useEffect, useState } from "react";
import { CategoryButton } from "../../components/CategoryButton";
import { CategoryBox, CategoryDiv, CategoryTitle, CompanyBgImg, CompanyInfos, CompanyLogo, CompanyTitle, CompanyTitleSm, Container, FoodList, Header, HeaderFixed, HeaderFixedBox, ProductCategoryBox, ScrollAreaScrollbar, ScrollAreaThumb } from "./styles";
import { Product } from "../../components/Product";
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { categories, products } from "../../data/fakeData";

export function Demo() {
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
    
    function getFoodCategory() {
        setFoodCategory(categories);
    }

    function getProductList() {
        setProductList(products);
    }

    return (
        <Container>

            {header === 'normal' ? 
                (
                <Header>
                    <CompanyBgImg src="https://d3lryrecr523dy.cloudfront.net/companies/backgrounds/35c32a3f-0097-445d-a4d2-a65eb2fa46ad.webp" />
                    <CompanyInfos>
                        <CompanyLogo src="https://d3lryrecr523dy.cloudfront.net/companies/logos/94689c97-dc07-4429-b634-0189bc84c128.webp" />
                        <CompanyTitle>Braia's Bar</CompanyTitle>
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
                                            <Product key={prod.id} data={prod} />
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
                                            <Product key={prod.id} data={prod} />
                                        )
                                    })}
                                </ProductCategoryBox>
                            </CategoryDiv>
                        )
                    })}
                    </>
                )}
 
   
            </FoodList>
        </Container>
    )
}