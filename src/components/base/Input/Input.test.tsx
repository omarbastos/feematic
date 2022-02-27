import { render } from '@testing-library/react'
import Input from '.'

describe('Input Test', () => {
  it('Input Component should render correctly', () => {
    const InputProps = { label: 'test' }
    const { container } = render(<Input {...InputProps} />)
    expect(container).toMatchSnapshot()
  })
})
