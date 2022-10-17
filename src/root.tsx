import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'DM Sans', sans-serif;
  }
`

export function Root () {
  return (
    <>
      <GlobalStyle />
      <h1>Root</h1>
    </>
  )
}
