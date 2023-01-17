import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.25rem;
    border-radius: 16px;
    background-color: #fff;
`;

export const UsernameInput = styled.input`
    border: 1px solid #C4C4C4;
    background-color: #EEE;
    color: #121214;
    border-radius: 12px;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
`;

export const PasswordInput = styled.input`
    border: 1px solid #C4C4C4;
    background-color: #EEE;
    color: #121214;
    border-radius: 12px;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
`;

export const LoginButton = styled.button`
    border: 1px solid #db8e44;
    background-color: #db8e44;
    color: #FFF;
    border-radius: 12px;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
`;