import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Playfair Display', serif, Helvetica, Sans-Serif;
    letter-spacing: 1px;
    box-sizing: border-box;
    background-color: #F7EDDB;
  }

  *, html {
    box-sizing: border-box;
}
`

export default GlobalStyle
