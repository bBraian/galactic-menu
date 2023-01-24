import { Box, Container, ForgotPassword, LoginButton, LoginContainer, Logo, PasswordInput, Title, UsernameInput } from "./styles";

import logo from "../../assets/images/Logogalatico.png";
// import './style.css';

export function Login() {
    return (
        <Container>
        {/*<div className="space">

           <div className="particle"></div>
           <div className="particle"></div>
           <div className="particle"></div>
           <div className="particle"></div> */}
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
        {/* </div> */}
        </Container>
    )
}