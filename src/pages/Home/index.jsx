import { useEffect, useState } from "react";
import { CategoryButton } from "../../components/CategoryButton";
import { CategoryBox, CategoryTitle, CompanyBgImg, CompanyInfos, CompanyLogo, CompanyTitle, Container, FoodList, ProductCategoryBox } from "./styles";
import { api } from "../../lib/axios";
import { Product } from "../../components/Product";

export function Home() {
    const [foodCategory, setFoodCategory] = useState([]);
    const [categorySelected, setCategorySelected] = useState(1);

    useEffect(() => {
        getFoodCategory();
    }, [])
    
    async function getFoodCategory() {
        const res = await api.get('categories');
        
        setFoodCategory(res.data);
    }

    return (
        <Container>
            <CompanyBgImg src="https://d3lryrecr523dy.cloudfront.net/companies/backgrounds/35c32a3f-0097-445d-a4d2-a65eb2fa46ad.webp" />
            <CompanyInfos>
                <CompanyLogo src="https://d3lryrecr523dy.cloudfront.net/companies/logos/94689c97-dc07-4429-b634-0189bc84c128.webp" />
                <CompanyTitle>Braia's Bar</CompanyTitle>
            </CompanyInfos>

            <CategoryBox>
                {foodCategory.map(category => {
                    return (
                        <CategoryButton
                            active={categorySelected === category.id ? true : false}
                            key={category.id}
                            title={category.title}
                        />
                    )
                })}

            </CategoryBox>

            <FoodList>
                <CategoryTitle>🍔 Hamburgueres</CategoryTitle>
                <ProductCategoryBox>
                    <Product />
                    <Product />
                    <Product />
                </ProductCategoryBox>
            </FoodList>
        </Container>
    )
}