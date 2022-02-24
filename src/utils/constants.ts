export enum ActionsPad {
  CLEAR = '🚫',
  DECIMAL = '.'
}
export const pads = [
  { id: 1, text: '🇨🇴', className: '', color: 'cyan-200' },
  { id: 2, text: '🇺🇸', className: '', color: 'gray-100' },
  { id: 3, text: '🇻🇪', className: 'row-span-2' },
  { id: 4, text: '7', className: '' },
  { id: 5, text: '8', className: '' },
  { id: 6, text: '9', className: '' },
  { id: 7, text: '4', className: '' },
  { id: 8, text: '5', className: '' },
  { id: 9, text: '6', className: '' },
  { id: 10, text: '1', className: '' },
  { id: 11, text: '2', className: '' },
  { id: 12, text: '3', className: '' },
  { id: 13, text: ActionsPad.CLEAR, className: 'row-span-2' },
  { id: 14, text: '0', className: 'col-span-2' },
  { id: 15, text: ActionsPad.DECIMAL, className: '' }
]

export type CURRENCIES = '🇨🇴' | '🇺🇸' | '🇻🇪'
const currencies = {
  COP: '🇨🇴',
  USD: '🇺🇸',
  VES: '🇻🇪'
}
export const CURRENCIES_ARRAY = [currencies.USD, currencies.COP, currencies.VES]
export { currencies }
