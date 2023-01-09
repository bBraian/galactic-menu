import { useEffect, useState } from "react";
import { CategoryButton } from "../../components/CategoryButton";
import { CategoryBox, CompanyBgImg, CompanyInfos, CompanyLogo, CompanyTitle, Container } from "./styles";
import { api } from "../../lib/axios";

export function Home() {
    const [foodCategory, setFoodCategory] = useState([]);

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
                            key={category.id}
                            title={category.title}
                        />
                    )
                })}

            </CategoryBox>
        </Container>
    )
}