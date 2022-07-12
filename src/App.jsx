import React from 'react'
import { Heading } from 'styled-minimal'
import CardsGroup from './CardsGroup'
import { Wrapper } from './styles/App'

function App() {
    return (
        <Wrapper>
            <Heading>Cards and Timer</Heading>
            <CardsGroup />
        </Wrapper>
    )
}

export default App
