import { fireEvent, render } from '@testing-library/react'
import {
  ActionsPad,
  COP_DEFAULT,
  currencies,
  VES_DEFAULT
} from 'utils/constants/constants'
import { RatesContext, RatesContextProps } from 'utils/contexts/RatesContext'
import Calculator from '.'

function renderCalculator() {
  return render(
    <RatesContext.Provider value={{ cop: COP_DEFAULT, ves: VES_DEFAULT }}>
      <Calculator />
    </RatesContext.Provider>
  )
}

describe('Calculator Test', () => {
  it('Calculator Component should render correctly', () => {
    const { container } = renderCalculator()
    expect(container).toMatchSnapshot()
  })
  it('Press Pad', () => {
    const { container, getByTestId } = renderCalculator()
    fireEvent.click(getByTestId(currencies.USD))
    fireEvent.click(getByTestId(ActionsPad.CLEAR))
    fireEvent.click(getByTestId('1'))
    fireEvent.click(getByTestId(ActionsPad.DECIMAL))
    fireEvent.click(getByTestId('0'))
    expect(container).toMatchSnapshot()
  })
})
