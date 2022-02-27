import { render } from '@testing-library/react'
import ModalRates from '.'

describe('ModalRates Test', () => {
  it('ModalRates Component should render correctly', () => {
    const ModalRatesProps = {}
    const { container } = render(<ModalRates {...ModalRatesProps} />)
    expect(container).toMatchSnapshot()
  })
})
