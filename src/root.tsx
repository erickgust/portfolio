import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { App } from './app'
import { theme } from './resources/theme/theme'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background-color: ${({ theme }) => theme.colors.dark};
    margin: 0;
  }
`

export function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}
