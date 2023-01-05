import React from "react"
import { TouchableOpacityProps } from "react-native";
import dotsimage from '../../../assets/dots.png';
import pokeball from '../../../assets/pokeballCard.png';

import * as S from "./styles"
export type PokemonType = {
    type: {
        name: string
    }
}

export type Pokemon = {
    name: string;
    url: string;
    id: Number;
    types: PokemonType[]
}
export type Props = {
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

            <S.RightSide>
                <S.PokeballDetail source={pokeball}></S.PokeballDetail>
                <S.PokemonImage source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
                }}></S.PokemonImage>
            </S.RightSide>

        </S.PokemonCard>
    )


}
