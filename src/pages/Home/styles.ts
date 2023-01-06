import { Dimensions } from "react-native";
import styled, {css} from "styled-components/native";

const windowWidth = Dimensions.get('window').width;
export const Container = styled.View`
    ${({ theme }) => css`
        flex:1;
        background-color: ${theme.colors.background};
        padding:16px;
    
    `}
`

export const Header = styled.ImageBackground`
   
    ${({ theme }) => css`
        width: ${windowWidth}px ;
         height: 200px;
         background-color: ${theme.colors.background};
    `}
`
export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.light_text};
        font-size: 40px;
        font-weight: bold;
        position: relative;
        top: 100px;
    `}
`