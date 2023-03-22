import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { ClientList, CompanyBgImg, CompanyInfos, CompanyLogo, CompanyTitle, Container, Header } from "./styles";
import bgimg from '../../assets/images/companybg.png';
import company from '../../assets/images/companylogo.png';

export function Client() {
    const [clients, setClients] = useState([]);

    async function getClients() {
        const res = await api.get('clients/all');
        setClients(res.data);
    }

    useEffect(() => {
        getClients();
    }, [])
    return (
        <Container>
            <Header>
                <CompanyBgImg src={bgimg} />
                <CompanyInfos>
                    <CompanyLogo src={company} />
                    <CompanyTitle>Galaxy Menu</CompanyTitle>
                </CompanyInfos>
            </Header>
            <ClientList>
                {clients.map(c => (
                    <h1>{c.title}</h1>

                ))}
            </ClientList>
        </Container>
    )
}