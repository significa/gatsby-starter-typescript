import React from "react"
import { Link } from "gatsby"

import { Context } from "../store"
import SEO from "../components/SEO/SEO"

const IndexPage = () => {
  const { count, increment, decrement } = React.useContext(Context)

  return (
    <>
      <SEO
        title={`Home ${count}`}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <h1>Hi people {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </>
  )
}

export default IndexPage
