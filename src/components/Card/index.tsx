import React from "react"
import { TouchableOpacityProps } from "react-native";
import dotsimage from '../../../assets/dots.png';

import * as S from "./styles"
type PokemonType = {
    type: {
        name: string
    }
}

type Pokemon = {
    name: string;
    url: String;
    id: Number;
    types: PokemonType[]
}
type Props = {
    data: Pokemon
} & TouchableOpacityProps

export function Card({ data, ...rest }: Props) {
    return (
        <S.PokemonCard type={data.types[0].type.name} {...rest}>
            <S.LeftSide>
                <S.PokemonId>#{data.id}</S.PokemonId>
                <S.PokemonName>{data.name}</S.PokemonName>
                <S.ImageCardDetailLeftSide source={dotsimage} />

                <S.PokemonContentType>
                    {data.types.map(type => <S.PokemonType key={type.type.name} type={type.type.name}>
                        <S.PokemonTypeText>{type.type.name}</S.PokemonTypeText>
                    </S.PokemonType>)}

                </S.PokemonContentType>
            </S.LeftSide>

            {/* <S.RightSide></S.RightSide> */}

        </S.PokemonCard>
    )


}
