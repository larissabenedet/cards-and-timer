import React, { useEffect, useState } from 'react'

export const CardsContext = React.createContext({})

export const CardsProvider = ({ children }) => {
    const [cards, setCards] = useState(null)

    useEffect(() => {
        fetchCardsData()
    }, [])

    const fetchCardsData = () => {
        fetch('./data.json')
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                setCards(data.cards)
            })
    }

    return (
        <CardsContext.Provider value={{ cards }}>
            {children}
        </CardsContext.Provider>
    )
}
