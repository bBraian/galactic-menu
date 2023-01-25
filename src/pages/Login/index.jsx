import { Box, Container, ForgotPassword, LoginButton, LoginContainer, Logo, PasswordInput, Title, UsernameInput } from "./styles";

import logo from "../../assets/images/Logogalatico.png";
import './style.css';

export function Login() {
    return (
        <div class="bg-animation">
            <Container>
                <LoginContainer>
                    <Box>
                        <Logo src={logo} />    
                        <Title>Fazer login</Title>
                    </Box>

                    <UsernameInput type="text" placeholder="Usuário" />
                    <PasswordInput type="password" placeholder="Senha" />
                
                    <ForgotPassword>
                        Esqueceu a senha?
                    </ForgotPassword>

                    <LoginButton to="/admin">
                        Entrar
                    </LoginButton>

                

                </LoginContainer>
            </Container>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div id="stars4"></div>
        </div>
    )
}