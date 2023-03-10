import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 38px;
    background-color: white;
    border-radius: 12px;
    align-items: center;
    padding: 0 10px;
    box-shadow: 2px 2px 10px 0px rgba(0,0,0,0.2);
`;

export const Button = styled.button`
    display: flex;
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
    border: 0;
    background-color: white;
    height: 24px;
    width: 24px;
    cursor: pointer;
    border-radius: 50%;
    transition: background-color ease-in-out 0.1s;

    &:hover {
        background-color: #eee;
    }
`;

export const Counter = styled.span`
    display: flex;
    width: 30px;
    height: 24px;
    justify-content: center;
    align-items: center;
    color: rgba(0,0,0,.8);
    font-size: 1.25rem;
    font-weight: 500;
`;