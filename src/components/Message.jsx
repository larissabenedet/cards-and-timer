import React from 'react'
import { TextMessage } from '../styles/Message'

const Message = ({ color, duration }) => {
    return (
        <TextMessage color={color}>
            duration: <span>{duration}ms</span>
        </TextMessage>
    )
}

export default Message
