import React, { useContext } from 'react'
import { Heading } from 'styled-minimal'
import Card from './components/Card'
import { CardsContext } from './context/CardsContext'

const CardsGroup = () => {
    const { cards } = useContext(CardsContext)
    return cards ? (
        <>
            {cards.map(({ color, timer, id }) => {
                return <Card color={color} timer={timer} key={id} />
            })}
        </>
    ) : (
        <Heading level={2}>Carregando...</Heading>
    )
}

export default CardsGroup
