import React from 'react'
import { Card as CardWrapper } from '../styles/Card'

const Card = ({ color, timer }) => {
    return (
        <>
            <CardWrapper color={color} timer={timer}>
                CardWrapper
            </CardWrapper>
        </>
    )
}

export default Card
