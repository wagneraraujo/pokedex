import React from 'react'
import * as S from "./styles"
import AnimatedLottieView from 'lottie-react-native'
import pokemonAnimation from "./pokemon.json"
import { Button } from '../../components/Button'

export function Welcome() {
    return <S.Container>
        <S.Content>
            <AnimatedLottieView autoPlay source={pokemonAnimation}></AnimatedLottieView>
        </S.Content>
        <S.Footer>
            <S.Title>Bem vindo</S.Title>
            <S.SubTitle>Encontre todos os pokemons</S.SubTitle>
            <Button title='Entrar na Pokedex' />
        </S.Footer>
    </S.Container>
}