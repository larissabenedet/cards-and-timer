import React, { useContext } from 'react'
import Card from './components/Card'
import { CardsContext } from './context/CardsContext'

const CardsGroup = () => {
    const { cards } = useContext(CardsContext)
    return (
        cards && (
            <>
                {cards.map(({ color, timer, id }) => {
                    return <Card color={color} timer={timer} key={id} />
                })}
            </>
        )
    )
}

export default CardsGroup
