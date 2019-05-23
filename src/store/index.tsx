import * as React from 'react'

export const Context = React.createContext({
  count: 0,
  increment: () => {
    return
  },
  decrement: () => {
    return
  },
})

export const AppProvider: React.FC = ({ children }) => {
  const [count, setCount] = React.useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <Context.Provider
      value={{
        count,
        increment,
        decrement,
      }}
    >
      {children}
    </Context.Provider>
  )
}
