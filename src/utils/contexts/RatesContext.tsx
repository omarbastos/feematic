import React from 'react'
import { COP_DEFAULT, VES_DEFAULT } from 'utils/constants/constants'

export interface RatesContextProps {
  cop: number
  ves: number
  setCop?: (value: number) => void
  setVes?: (value: number) => void
  loading?: boolean
}

export const defaultState = {
  cop: COP_DEFAULT,
  ves: VES_DEFAULT
}

export const RatesContext =
  React.createContext<Partial<RatesContextProps>>(defaultState)
