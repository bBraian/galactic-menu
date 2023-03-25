import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { ClientBg, ClientBox, ClientList, ClientPhoto, ClientTitle, CompanyBgImg, CompanyInfos, CompanyLogo, CompanyTitle, Container, Header } from "./styles";
import bgimg from '../../assets/images/companybg.png';
import company from '../../assets/images/companylogo.png';

export function Client() {
    const [clients, setClients] = useState([]);

    async function getClients() {
        const res = await api.get('clients/all');
        setClients(res.data);
    }
    console.log(clients)
    useEffect(() => {
        getClients();
    }, [])
    return (
        <Container>
            <Header>
                <CompanyBgImg src={bgimg} />
                <CompanyInfos>
                    <CompanyLogo src={company} />
                    <CompanyTitle>Galaxy Menu | Cardapios</CompanyTitle>
                </CompanyInfos>
            </Header>
            <ClientList>
                {clients.map(c => (
                    <ClientBox key={c.id}>
                        <ClientBg src={c.background} />
                        <ClientPhoto src={c.logo} />
                        <ClientTitle>{c.title}</ClientTitle>
                        
                    </ClientBox>

                ))}
            </ClientList>
        </Container>
    )
}