export const pads = [
  { text: '🇨🇴', className: 'col-span-2', color: 'cyan-200' },
  { text: '🇺🇸', className: 'col-span-2', color: 'gray-100' },
  { text: '7', className: '' },
  { text: '8', className: '' },
  { text: '9', className: '' },
  { text: '🇻🇪', className: 'row-span-2' },
  { text: '4', className: '' },
  { text: '5', className: '' },
  { text: '6', className: '' },
  { text: '1', className: '' },
  { text: '2', className: '' },
  { text: '3', className: '' },
  { text: '❌', className: 'row-span-2' },
  { text: '0', className: 'col-span-2' },
  { text: '.', className: '' }
]
const USD_TO_COP = 3700
const COP_TO_USD = 1 / 3700
const USD_TO_VEF = 4.6
const VEF_TO_USD = 1 / 4.6
const VEF_TO_COP = VEF_TO_USD * USD_TO_COP
const COP_TO_VEF = COP_TO_USD * USD_TO_VEF
export type CURRENCIES = '🇨🇴' | '🇺🇸' | '🇻🇪'
const currencies = {
  COP: '🇨🇴',
  USD: '🇺🇸',
  VEF: '🇻🇪'
}
export const CURRENCIES_ARRAY = [currencies.USD, currencies.COP, currencies.VEF]
export {
  currencies,
  USD_TO_COP,
  COP_TO_USD,
  USD_TO_VEF,
  VEF_TO_USD,
  VEF_TO_COP,
  COP_TO_VEF
}
