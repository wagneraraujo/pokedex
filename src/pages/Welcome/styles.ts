import styled, {css} from "styled-components/native";

export const Container = styled.View`
    ${({ theme }) => css`
        flex:1;
        background-color: ${theme.colors.background};
    
    `}
`
export const Content = styled.View`
    height: 70%;
`;
export const Footer = styled.View`
    ${({ theme }) => css`
        height: 30%;
        background-color: ${theme.colors.backgroundWatter};
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        justify-content: center;
        align-items: center;
        padding: 0px 16px;
    `}
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: 20px;
        color: ${theme.colors.light_text}
    `}
`

export const SubTitle = styled.Text`
    ${({ theme }) => css`
        font-size: 14px;
        color: ${theme.colors.light_text}
    `}
`
