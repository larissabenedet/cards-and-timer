import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Card from '../components/Card'

const color = 'blue'
const timer = 1500

const renderCard = () => render(<Card color={color} timer={timer} />)

jest.mock('../components/Bomb', () => () => {
    return <mock-bomb data-testid="bomb" />
})

jest.mock('../components/Message', () => () => {
    return <mock-message color={color} duration={timer} data-testid="message" />
})

test('renders bomb component', () => {
    const { queryByTestId } = renderCard()
    expect(queryByTestId('bomb')).toBeInTheDocument()
    expect(queryByTestId('message')).not.toBeInTheDocument()
})

test('renders message component after timer is up', () => {
    const { queryByTestId } = renderCard()

    setTimeout(() => {
        expect(queryByTestId('message')).toBeInTheDocument()
        expect(queryByTestId('bomb')).not.toBeInTheDocument()
    }, timer)
})
