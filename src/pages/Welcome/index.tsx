import React from 'react'
import * as S from "./styles"
import AnimatedLottieView from 'lottie-react-native'
import pokemonAnimation from "./pokemon.json"
import { Button } from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

export function Welcome() {
    const { navigate } = useNavigation()

    const handleNavigation = () => navigate('Home')
    return <S.Container>
        <S.Content>
            <AnimatedLottieView autoPlay source={pokemonAnimation}></AnimatedLottieView>
        </S.Content>
        <S.Footer>
            <S.Title>Bem vindo</S.Title>
            <S.SubTitle>Encontre todos os pokemons</S.SubTitle>
            <Button title='Entrar na Pokedex' onPress={handleNavigation} />
        </S.Footer>
    </S.Container>
}