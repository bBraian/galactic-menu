import { useEffect, useState } from "react";
import { CategoryButton } from "../../components/CategoryButton";
import { CategoryBox, CompanyBgImg, CompanyInfos, CompanyLogo, CompanyTitle, Container } from "./styles";
import { api } from "../../lib/axios";

// import { useKeenSlider } from "keen-slider/react"
// import "keen-slider/keen-slider.min.css"

export function Home() {
    const [foodCategory, setFoodCategory] = useState([]);

    useEffect(() => {
        getFoodCategory();
    }, [])
    
    async function getFoodCategory() {
        const res = await api.get('categories');
        
        setFoodCategory(res.data);
    }

    // const [sliderRef] = useKeenSlider({
    //     loop: false,
    //     mode: "free-snap",
    //     slides: {
    //         perView: 6,
    //         spacing: 10,
    //     },
    // })

    return (
        <Container>
            <CompanyBgImg src="https://d3lryrecr523dy.cloudfront.net/companies/backgrounds/35c32a3f-0097-445d-a4d2-a65eb2fa46ad.webp" />
            <CompanyInfos>
                <CompanyLogo src="https://d3lryrecr523dy.cloudfront.net/companies/logos/94689c97-dc07-4429-b634-0189bc84c128.webp" />
                <CompanyTitle>Braia's Bar</CompanyTitle>
            </CompanyInfos>

            {/* <CategoryBox ref={sliderRef} className="keen-slider"> */}
            <CategoryBox>
                {foodCategory.map(category => {
                    return (
                        <CategoryButton
                            // className={`keen-slider__slide number-slide`+category.id}
                            key={category.id}
                            title={category.title}
                        />
                    )
                })}

            </CategoryBox>
        </Container>
    )
}