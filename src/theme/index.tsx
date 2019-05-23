import React from 'react'
import 'wipe.css'

import styled, {
  css,
  createGlobalStyle,
  keyframes,
  StyledThemeProvider,
} from './styled'
import { media } from './breakpoints'
import style from './style'
import theme from './theme'

import { ITheme } from './types'

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

export { theme, ThemeProvider, ThemeConsumer, keyframes, css, media }

export default styled
