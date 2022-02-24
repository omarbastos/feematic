import { Amount } from 'pages/Calculator'
import { formatMoney } from 'utils'
import { currencies } from 'utils/constants'

interface Props {
  amount: Amount
  cop: number
  ves: number
}

const Result = ({ cop, ves, amount }: Props) => {
  const getExchangedAmount = (value: number, currency: string) => {
    switch (currency) {
      case currencies.USD:
        return [
          `${formatMoney(value * cop)} ${currencies.COP}`,
          `${formatMoney(value / (cop / ves))} ${currencies.VES}`
        ]
      case currencies.COP:
        return [
          `${formatMoney(value / cop)} ${currencies.USD}`,
          `${formatMoney(value / ves)} ${currencies.VES}`
        ]
      case currencies.VES:
        return [
          `${formatMoney(value * (cop / ves))} ${currencies.COP}`,
          `${formatMoney(value / ves)} ${currencies.USD}`
        ]
      default:
        return [
          `${formatMoney(value * cop)} ${currencies.COP}`,
          `${formatMoney(value * ves)} ${currencies.VES}`
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
