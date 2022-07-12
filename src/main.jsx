import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './styles/globalStyles'
import { CardsProvider } from './context/CardsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CardsProvider>
            <GlobalStyle />
            <App />
        </CardsProvider>
    </React.StrictMode>
)
