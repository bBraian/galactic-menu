import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    justify-content: center;
    align-items: center;
    padding: 4rem 1.25rem;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 32px;
    border-radius: 16px;
    background-color: #fff;
    width: -webkit-fill-available;
    max-width: 450px;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.75rem;
`;

export const Title = styled.h2`
    font-size: 1.625rem;
    text-align: center;
    color: ${props => props.theme['text']};
`;

export const Logo = styled.img`
    width: 100px;
    height: 100px;
    object-fit: contain;
`;

export const UsernameInput = styled.input`
    height: 54px;
    border: 1px solid #C4C4C4;
    background-color: #EEE;
    color: #121214;
    border-radius: 12px;
    padding: 0 1.125rem;
    font-size: 1rem;
    margin-top: 1.25rem;
`;

export const PasswordInput = styled.input`
    height: 54px;
    border: 1px solid #C4C4C4;
    background-color: #EEE;
    color: #121214;
    border-radius: 12px;
    padding: 0 1.125rem;
    font-size: 1rem;
    margin-top: 28px;
`;

export const ForgotPassword = styled.p`
    color: #adafca;
    font-size: 0.875rem;
    font-weight: 700;
    margin-top: 1rem;
`;

export const LoginButton = styled(Link)`
    height: 54px;
    border: 1px solid #db8e44;
    background-color: #db8e44;
    color: #FFF;
    border-radius: 12px;
    padding: 0.75rem;
    font-weight: bold;
    font-size: 1rem;
    margin-top: 2rem;
    margin-bottom: 10px;
    text-align: center;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;