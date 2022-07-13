import React from 'react'
import { Heading } from 'styled-minimal'
import CardsGroup from './CardsGroup'
import { Wrapper } from './styles/App'

function App() {
    return (
        <Wrapper>
            <Heading>{'{ cards and timer } '}</Heading>
            <CardsGroup />
        </Wrapper>
    )
}

export default App
