import { Amount } from 'pages/Calculator'
import React from 'react'
import { formatMoney } from 'utils'
import { currencies } from 'utils/constants'

interface Props {
  amount: Amount
  COP_TO_USD: number
  COP_TO_VEF: number
  USD_TO_COP: number
  USD_TO_VEF: number
  VEF_TO_COP: number
  VEF_TO_USD: number
}

const Result = ({
  USD_TO_COP,
  USD_TO_VEF,
  VEF_TO_COP,
  VEF_TO_USD,
  COP_TO_VEF,
  COP_TO_USD,
  amount
}: Props) => {
  const getExchangedAmount = (value: number, currency: string) => {
    switch (currency) {
      case '🇺🇸':
        return [
          `${formatMoney(value * USD_TO_COP)} ${currencies.COP}`,
          `${formatMoney(value * USD_TO_VEF)} ${currencies.VEF}`
        ]
      case '🇨🇴':
        return [
          `${formatMoney(value * COP_TO_USD)} ${currencies.USD}`,
          `${formatMoney(value * COP_TO_VEF)} ${currencies.VEF}`
        ]
      case '🇻🇪':
        return [
          `${formatMoney(value * VEF_TO_COP)} ${currencies.COP}`,
          `${formatMoney(value * VEF_TO_USD)} ${currencies.USD}`
        ]
      default:
        return [
          `${formatMoney(value * USD_TO_COP)} ${currencies.COP}`,
          `${formatMoney(value * USD_TO_VEF)} ${currencies.VEF}`
        ]
    }
  }
  return (
    <div className="flex flex-col my-2 text-3xl font-light text-right text-gray-300">
      {getExchangedAmount(+amount.value, amount.currency).map(
        (exchangedAmount, index) => (
          <span key={index}>{exchangedAmount}</span>
        )
      )}
    </div>
  )
}

export default Result
