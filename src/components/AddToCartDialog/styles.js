import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';
import * as ScrollArea from '@radix-ui/react-scroll-area';

export const Overlay = styled(Dialog.Overlay)`
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    inset: 0;
    animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 9;
`

export const Container = styled(Dialog.Content)`
    z-index: 99;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 1000px;
    max-height: 90%;
    overflow: hidden;
    animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

    &:focus {
        outline: none;
    }
        
    @media (max-width: 768px) {
        border-radius: 0;
        max-height: 100%;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;

    @media (max-width: 1080px) {
        flex-direction: column;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100vw;
        height: 100vh;
    }
`;

export const Image = styled.img`
    width: 500px;
    height: 500px;
    object-fit: cover;

    @media (max-width: 1080px) {
        width: 600px;
        height: 350px;
    }

    @media (max-width: 768px) {
        width: 100vw;
        height: calc(50vh - 60px);
    }
`;

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;

    @media (max-width: 1080px) {
        width: 600px;
    }
    @media (max-width: 768px) {
        width: 100vw;
        height: 50vh;
    }
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
    height: 40px;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const ProductTitle = styled.h2`
    font-size: 1rem;
    font-weight: bold;
`;

export const CloseButton = styled(Dialog.Close)`
    border: 0;
    background-color: #F5544D;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #811D18;
    cursor: pointer;
    transition: ease-in-out 0.1s;

    &:hover {
        color: #fff;
    }
`;

export const ScrolableContent = styled(ScrollArea.Root)`
    height: 400px;
    overflow: hidden;
    --scrollbar-size: 10px;
    background-color: #F9F9F1;
    padding: 14px;

    @media (max-width: 768px) {
        height: 50vh;
        padding: 0 14px;
    }
`;

export const ScrollSafeArea = styled(ScrollArea.Viewport)`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`;

export const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar)`
    display: flex;
    user-select: none;
    touch-action: none;
    padding: 2px;
    width: 10px;
`;

export const ScrollAreaThumb = styled(ScrollArea.ScrollAreaThumb)`
    flex: 1;
    background: #C4C4C4;
    border-radius: 100px;
    position: relative;
  
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        min-width: 44px;
        min-height: 44px;
    }
`;

export const ProductInfosContent = styled.div`
    width: 100%;
    height: 50vh;
`;

export const Footer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
    height: 60px;
    align-items: center;
    background-color: #F9F9F1;

    @media (max-width: 768px) {
        position: fixed;
        bottom: 0;
    }
`;

export const AddToCartButton = styled.button`
    background-color: #DB8E44;
    border: 0;
    border-radius: 12px;
    color: #fff;
    font-weight: 500;
    height: 38px;
    padding: 0 10px;
    cursor: pointer;
    transition: background ease-in-out 0.1s;

    &:hover {
        background-color: rgb(244, 160, 80);
    }
`;

export const Description = styled.p`
    margin-bottom: 12px;
    font-size: 0.875rem;
`;

export const Price = styled.div`
    display: flex;
    gap: 12px;
    align-items: flex-end;
`;

export const Separator = styled.hr`
    border: solid;
    border-width: thin 0 0;
    border-color: rgba(0,0,0,.12);
    margin: 14px 0;
`;

export const OptionBox = styled.div`
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

export const OptionTitle = styled.h2`
    font-weight: 500;
    font-size: 1rem;
`;

export const OptionRequired = styled.div`
    background-color: ${props => props.theme['yellow-500']};
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    padding: 4px 12px;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${props => props.theme['white']};
`;

export const OptionDescription = styled.p`
    margin-top: 16px;
    font-size: 0.875rem;
`;

export const OptionList = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 16px 0;
`;

export const Comments = styled.h2`
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 16px;
`;

export const CommentsInput = styled.textarea`
    width: 100%;
    border: 1px solid ${props => props.theme['border']};
    border-radius: 12px;
    padding: 8px 10px;
    resize: none;
`;

export const ProductTitleMobile = styled(ProductTitle)`
    display: none;

    @media (max-width: 768px) {
        display: block;
        margin: 14px 0;
    }
`;

export const CloseButtonMobile = styled(CloseButton)`
    display: none;
    position: fixed;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 14px;
    right: 14px;
    width: 30px;
    height: 30px;
    padding: 7px 0;
    color: white;

    @media (max-width: 768px) {
        display: block;
    }
`;
