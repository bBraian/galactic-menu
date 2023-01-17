import { Container, LoginButton, LoginContainer, PasswordInput, UsernameInput } from "./styles";

export function Login() {
    return (
        <Container>
            <LoginContainer>
                <UsernameInput type="text" placeholder="Usuário" />
                <PasswordInput type="password" placeholder="Senha" />

                <LoginButton>
                    Logar
                </LoginButton>

            </LoginContainer>
        </Container>
    )
}