import { render } from '@testing-library/react'
import { currencies } from 'utils/constants'
import Operation from '.'

describe('Operation Test', () => {
  it('Operation Component should render correctly', () => {
    const OperationProps = {
      amount: {
        value: '1',
        currency: currencies.USD
      }
    }
    const { container } = render(<Operation {...OperationProps} />)
    expect(container).toMatchSnapshot()
  })
})
