import styled,{css} from "styled-components/native";

type PokemonType = {
    type: string
}

export const PokemonCard = styled.TouchableOpacity<PokemonType>`
    ${({ theme, type }) => css`
    border-radius: 10px;
    margin-top:10px;
    flex-direction:row;
    justify-content: space-between;
    padding: 20px;
    background-color: ${theme.colors.backgroundCard[type]};
`}
`

export const LeftSide = styled.View`
  width:50%;
  position:relative;

`
export const PokemonId = styled.Text<any>`
  ${({theme}) => css`
    font-weight:bold;
    font-size:12px;
    line-height:14px;
    color:${theme.colors.light_text};
  `}

`

export const PokemonName = styled.Text`
  ${({theme}) => css `
    font-weight:bold;
    font-size:25px;
    line-height:28px;
    color: ${theme.colors.light_text};
    text-transform: capitalize;


  `}
`

export const PokemonContentType = styled.View `
  flex-direction: row;

`
export const ImageCardDetailLeftSide = styled.Image`
  position: absolute;
  width: 74px;
  height: 32px;
  left: 90px;
  top:-10px;
`
export const PokemonType = styled.View<PokemonType>`
  ${({theme, type}) => css`
    padding:5px;
    width:65px;
    height:25px;
    margin: 5px 5px;
    justify-content:center;
    align-items:center;
    background-color: ${theme.colors.boxType[type]};
    

  `}
`

export const PokemonTypeText = styled.Text`
  ${({theme}) => css `
    font-weight:bold;
    font-size:12px;
    color: #fff;
    text-transform:capitalize
  `}
`
export const RightSide = styled.View`
  justify-content: center;
  align-items: center;
  width: 50%;
  position: relative;
`

export const PokemonImage = styled.Image`
  margin-top:-40px;
  width: 130px;
  height: 130px;
  z-index: 2;
`

export const PokeballDetail = styled.Image`
  position: absolute;
  right: -20px;
  z-index: 1;
`