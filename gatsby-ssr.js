
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
