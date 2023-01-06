import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import * as S from "./styles"
import { FlatList, Text } from "react-native"
import { PokemonCard } from '../../components/Card/styles'
import { Card, Pokemon, PokemonType } from '../../components/Card'
import { FadeAnimation } from '../../components/FadeAnimation'
import pokeballheader from '../../../assets/pokeball.png'
import { useNavigation } from '@react-navigation/native'
// type PokemonType = {
//     type: string
// }
// type Pokemon = {
//     name: string
//     url: string
//     id: number
//     types: PokemonType[]
// }

type Request = {
    id: number
    types: PokemonType[]
}

export function Home() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    const { navigate } = useNavigation();

    function handleNavigation(pokemonId: number) {
        navigate('About', {
            pokemonId,
        })
    }
    useEffect(() => {
        async function getAllPokemons() {
            const response = await api.get('/pokemon?limit=10&offset=0')
            const { results } = response.data;

            const payloadPokemons = await Promise.all(
                results.map(async (pokemon: Pokemon) => {
                    const { id, types } = await getMoreInfo(pokemon.url)

                    return {
                        name: pokemon.name,
                        id, types
                    }
                })
            )

            setPokemons(payloadPokemons)


        }

        getAllPokemons()

    }, [])

    async function getMoreInfo(url: string): Promise<Request> {
        const response = await api.get(url)
        const { id, types } = response.data;
        return {
            id, types
        }
    }
    return <S.Container>
        <FlatList ListHeaderComponent={<>
            <S.Header source={pokeballheader} >
                <S.Title>Pokedex</S.Title>
            </S.Header>

        </>} data={pokemons} keyExtractor={pokemon => pokemon.id.toString()} renderItem={({ item: pokemon }) => (
            <FadeAnimation>
                <Card data={pokemon} onPress={() => handleNavigation(pokemon.id)} />
            </FadeAnimation>

        )}
        />
    </S.Container>
}
