import React, { useState, useEffect } from 'react'
import { Card as CardWrapper } from '../styles/Card'
import Bomb from './Bomb'
import Message from './Message'

const Card = ({ color, timer }) => {
    const [cardBackgroundColor, setCardBackgroundColor] = useState(null)
    const [showMessage, setShowMessage] = useState(false)

    useEffect(() => {
        renderCardContent()
    }, [])

    const renderCardContent = () => {
        setTimeout(() => {
            setCardBackgroundColor(color)
            setShowMessage(true)
        }, timer)
    }
    return (
        <>
            <CardWrapper
                contentColor={color}
                backgroundColor={cardBackgroundColor && cardBackgroundColor}
            >
                {showMessage ? (
                    <Message color={color} duration={timer} />
                ) : (
                    <Bomb />
                )}
            </CardWrapper>
        </>
    )
}

export default Card
