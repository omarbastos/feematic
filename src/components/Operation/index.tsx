import { Amount } from 'pages/Calculator'
import React from 'react'
import { formatMoney } from 'utils'

interface Props {
  amount: Amount
}

const Operation = ({ amount }: Props) => {
  /*   const regex = /[0-9]/g */
  /*   const textArr = [...amount.value] */
  return (
    <div className="text-5xl font-bold text-right text-white">
      {formatMoney(+amount.value)}
      {amount.currency}
    </div>
  )
}

export default Operation
