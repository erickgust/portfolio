import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      greenLight: string
      white: string
      gray: {
        200: string
        400: string
        main: string
      }
      dark: string
    }
  }
}
