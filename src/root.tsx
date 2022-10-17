import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from './resources/theme/theme'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background-color: ${({ theme }) => theme.colors.dark}
  }
`

export function Root () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Root</h1>
    </ThemeProvider>
  )
}
