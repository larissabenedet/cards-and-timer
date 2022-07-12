import React, { useEffect, useState } from 'react'

export const CardsContext = React.createContext({})

export const CardsProvider = ({ children }) => {
    const [cards, setCards] = useState(null)

    useEffect(() => {
        fetchCardsData()
    }, [])

    const fetchCardsData = () => {
        fetch('http://localhost:8000/cards')
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                setCards(data)
            })
    }

    return (
        <CardsContext.Provider value={{ cards }}>
            {children}
        </CardsContext.Provider>
    )
}
