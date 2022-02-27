export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export function formatMoney(value: number): string {
  const formatter = new Intl.NumberFormat('es-CO', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
  return formatter.format(value)
}
export function getFixed(value: number): number {
  return parseFloat(value.toFixed(2))
}
