import { CompanyBgImg, CompanyInfos, CompanyLogo, CompanyTitle, Container } from "./styles";

export function Home() {
    return (
        <Container>
            <CompanyBgImg src="https://d3lryrecr523dy.cloudfront.net/companies/backgrounds/35c32a3f-0097-445d-a4d2-a65eb2fa46ad.webp" />
            <CompanyInfos>
                <CompanyLogo src="https://d3lryrecr523dy.cloudfront.net/companies/logos/94689c97-dc07-4429-b634-0189bc84c128.webp" />
                <CompanyTitle>Braia's Bar</CompanyTitle>
            </CompanyInfos>
        </Container>
    )
}