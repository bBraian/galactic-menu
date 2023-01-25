import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    justify-content: center;
    align-items: center;
    padding: 4rem 1.25rem;
    background: linear-gradient(0deg,rgb(0 8 98) 0%,rgb(165 45 255) 100%);
`;

export const LoginContainer = styled.div`
    z-index: 999;
    display: flex;
    flex-direction: column;
    padding: 40px 32px;
    border-radius: 16px;
    background-color: #fff;
    width: -webkit-fill-available;
    max-width: 450px;
    -webkit-box-shadow: 4px 39px 40px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 4px 39px 40px 0px rgba(0,0,0,0.5);
    box-shadow: 4px 39px 40px 0px rgba(0,0,0,0.5);
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
    margin-top: 1rem;
    text-align: center;
    color: ${props => props.theme['text']};
`;

export const Logo = styled.img`
    width: 125px;
    height: 125px;
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
    cursor: pointer;
    color: #adafca;
    font-size: 0.875rem;
    font-weight: 700;
    margin-top: 1rem;
`;

export const LoginButton = styled(Link)`
    height: 54px;
    border: 1px solid #9329EE;
    background-color: #9329EE;
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