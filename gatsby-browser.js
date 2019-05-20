/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"

import Layout from "./src/layout"
import { AppProvider } from "./src/store"

export const wrapPageElement = ({ element, props }) => {
  return (
    <AppProvider>
      <Layout {...props}>{element}</Layout>
    </AppProvider>
  )
}
