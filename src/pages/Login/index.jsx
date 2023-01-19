import { Box, Container, ForgotPassword, LoginButton, LoginContainer, Logo, PasswordInput, Title, UsernameInput } from "./styles";

import logo from "../../assets/galaxy.svg";

export function Login() {
    return (
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
    )
}