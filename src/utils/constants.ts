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

export type CURRENCIES = '🇨🇴' | '🇺🇸' | '🇻🇪'
const currencies = {
  COP: '🇨🇴',
  USD: '🇺🇸',
  VEF: '🇻🇪'
}
export const CURRENCIES_ARRAY = [currencies.USD, currencies.COP, currencies.VEF]
export { currencies }
