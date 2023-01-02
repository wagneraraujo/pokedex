import styled,{css} from "styled-components/native";

export const Container = styled.TouchableOpacity`
    ${({ theme }) => css`
        width:100%;
        height: 50px;
        background-color: ${theme.colors.boxType.water};
        justify-content: center;
        align-items: center;
        border-radius: 10px;
    `}
`

export const Title = styled.Text`
    ${({ theme }) => css`

    font-size: 14px;
   color: ${theme.colors.light_text};
    `}
`