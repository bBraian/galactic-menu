import { Box, Container, ForgotPassword, LoginButton, LoginContainer, Logo, PasswordInput, Title, UsernameInput } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod'
import logo from "../../assets/images/Logogalatico.png";
import './style.css';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { api } from "../../lib/axios";

const formLoginSchema = z.object({
    username: z.string(),
    password: z.string()
})

export function Login() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, errors }
    } = useForm({
        resolver: zodResolver(formLoginSchema)
    })

    async function handleAuthUser(data) {
        const response = await api.post('/users/auth', data)
        console.log(response)
    }
    return (
        <div className="bg-animation">
            <Container>
                <LoginContainer onSubmit={handleSubmit(handleAuthUser)}>
                    <Box>
                        <Logo src={logo} />    
                        <Title>Fazer login</Title>
                    </Box>

                    <UsernameInput type="text" placeholder="Usuário" {...register('username')} />
                    <PasswordInput type="password" placeholder="Senha" {...register('password')} />
                    {errors.username && (
                        <div>{errors.username.message}</div>
                    )}
                    <ForgotPassword>
                        Esqueceu a senha?
                    </ForgotPassword>

                    <LoginButton disabled={isSubmitting}>
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