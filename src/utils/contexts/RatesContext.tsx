import React, { FC, useState } from 'react'

export interface RatesContextProps {
  cop: number
  handleCop: (value: number) => void
  ves: number
  handleVes: (value: number) => void
}

export const defaultState = {
  cop: 3750,
  handleCop: () => {
    return null
  },
  handleVes: () => {
    return null
  },
  ves: 4.63
}

export const RatesContext =
  React.createContext<Partial<RatesContextProps>>(defaultState)

export const RatesProvider: FC = ({ children }) => {
  const [cop, setCop] = useState(3750)
  const handleCop = (value: number) => setCop(value)
  const [ves, setVes] = useState(4.63)
  const handleVes = (value: number) => setVes(value)
  return (
    <RatesContext.Provider
      value={{
        cop,
        handleCop,
        ves,
        handleVes
      }}
    >
      {children}
    </RatesContext.Provider>
  )
}
