import { fireEvent, render } from '@testing-library/react'
import { ActionsPad, currencies } from 'utils/constants'
import Calculator from '.'

describe('Calculator Test', () => {
  it('Calculator Component should render correctly', () => {
    const CalculatorProps = {
      cop: 3800,
      ves: 4.5
    }
    const { container } = render(<Calculator {...CalculatorProps} />)
    expect(container).toMatchSnapshot()
  })
  it('Press Pad', () => {
    const CalculatorProps = {
      cop: 3800,
      ves: 4.5
    }
    const { container, getByTestId } = render(
      <Calculator {...CalculatorProps} />
    )
    fireEvent.click(getByTestId(currencies.USD))
    fireEvent.click(getByTestId(ActionsPad.CLEAR))
    fireEvent.click(getByTestId('1'))
    fireEvent.click(getByTestId(ActionsPad.DECIMAL))
    fireEvent.click(getByTestId('0'))
    expect(container).toMatchSnapshot()
  })
})
