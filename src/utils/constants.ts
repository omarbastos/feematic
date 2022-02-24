export enum ActionsPad {
  CLEAR = '🚫',
  DECIMAL = '.'
}
export const pads = [
  { text: '🇨🇴', className: '', color: 'cyan-200' },
  { text: '🇺🇸', className: '', color: 'gray-100' },
  { text: '🇻🇪', className: 'row-span-2' },
  { text: '7', className: '' },
  { text: '8', className: '' },
  { text: '9', className: '' },
  { text: '4', className: '' },
  { text: '5', className: '' },
  { text: '6', className: '' },
  { text: '1', className: '' },
  { text: '2', className: '' },
  { text: '3', className: '' },
  { text: ActionsPad.CLEAR, className: 'row-span-2' },
  { text: '0', className: 'col-span-2' },
  { text: ActionsPad.DECIMAL, className: '' }
]

export type CURRENCIES = '🇨🇴' | '🇺🇸' | '🇻🇪'
const currencies = {
  COP: '🇨🇴',
  USD: '🇺🇸',
  VES: '🇻🇪'
}
export const CURRENCIES_ARRAY = [currencies.USD, currencies.COP, currencies.VES]
export { currencies }
