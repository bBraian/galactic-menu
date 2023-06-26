import { useEffect, useState } from "react";
import { CategoryButton } from "../../components/CategoryButton";
import { CategoryBox, CategoryDiv, CategoryTitle, CompanyBgImg, CompanyInfos, CompanyLogo, CompanyTitle, CompanyTitleSm, Container, FoodList, Header, HeaderFixed, HeaderFixedBox, ProductCategoryBox, ScrollAreaScrollbar, ScrollAreaThumb } from "./styles";
import { api } from "../../lib/axios";
import { Product } from "../../components/Product";
import * as ScrollArea from '@radix-ui/react-scroll-area';

export function Admin() {
    const [client, setClient] = useState({})
    const [header, setHeader] = useState('normal')

    const [category, setCategory] = useState([]);
    const [categorySelected, setCategorySelected] = useState(0);

    const [productList, setProductList] = useState([])
    const [filteredProductList, setFilteredProductList] = useState([])

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
        const cli = await api.get('clients/braians');
        setClient(cli.data)
        setCategory(cli.data.Categories.filter(category => {
            return cli.data.Products.some(product => product.categories_id === category.id);
        }))
        setProductList(cli.data.Products)
    }

    return (
        <Container>

            {header === 'normal' ? 
                (
                <Header>
                    <CompanyBgImg src="https://d3lryrecr523dy.cloudfront.net/companies/backgrounds/35c32a3f-0097-445d-a4d2-a65eb2fa46ad.webp" />
                    <CompanyInfos>
                        <CompanyLogo src="https://d3lryrecr523dy.cloudfront.net/companies/logos/94689c97-dc07-4429-b634-0189bc84c128.webp" />
                        <CompanyTitle>{client.title}</CompanyTitle>
                    </CompanyInfos>

                   
                    <ScrollArea.Root>
                        <ScrollArea.Viewport>
                            <CategoryBox paddingTop="0.8rem">
                                <CategoryButton
                                    active="false"
                                    key="0"
                                    data={{id: 0, title: 'Nova categoria +'}}
                                />
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
                                        active="false"
                                        key="0"
                                        data={{id: 0, title: 'Nova categoria +'}}
                                    />
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
                                                    data={product} 
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
                                        console.log(product)
                                        if(product.categories_id === category.id) {
                                            return (
                                                <Product key={product.id} data={product} />
                                            )
                                        }
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