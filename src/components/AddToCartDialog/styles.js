import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
    background-color: rgba(0, 0, 0, 0.44);
    position: fixed;
    inset: 0;
    animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 9;
    
`

export const Container = styled(Dialog.Content)`
    z-index: 99;
    background-color: white;
    border-radius: 6px;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-width: 450px;
    max-height: 85vh;
    overflow: hidden;
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

    &:focus {
        outline: none;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
`;

export const Image = styled.img`
    width: 300px;
    height: 300px;
`;

export const ContentBox = styled.div`

`;