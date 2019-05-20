import React from "react"
import * as sc from "styled-components"
import "wipe.css"

import { ITheme } from "./types"
import style from "./style"
import theme from "./theme"
import { media } from "./breakpoints"

/** Custom Styled components with theme interface (to export) */
const {
  default: styled,
  createGlobalStyle,
  ThemeProvider: StyledThemeProvider,
} = sc as sc.ThemedStyledComponentsModule<ITheme>

/** Theme Context */
/* tslint:disable:no-empty */
const {
  Provider: ThemeContextProvider,
  Consumer: ThemeConsumer,
} = React.createContext({ theme: {}, updateTheme: (_: ITheme): void => {} })
/* tslint:enable:no-empty */

/** Global styles */
const GlobalStyle = createGlobalStyle`
  ${style}
`

/** Theme Provider */
class ThemeProvider extends React.Component<
  { children: React.ReactNode },
  { theme: ITheme }
> {
  state = { theme }

  updateTheme = (t: ITheme): void => this.setState({ theme: t })

  render() {
    return (
      <ThemeContextProvider value={{ theme, updateTheme: this.updateTheme }}>
        <StyledThemeProvider theme={this.state.theme}>
          <>
            <GlobalStyle />
            {this.props.children}
          </>
        </StyledThemeProvider>
      </ThemeContextProvider>
    )
  }
}

export { theme, ThemeProvider, ThemeConsumer, media }

export default styled
