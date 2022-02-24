import { render } from '@testing-library/react'
import Pad from '.'

describe('Pad Test', () => {
  it('Pad Component should render correctly', () => {
    const padProps = {
      text: '1',
      className: '',
      isActive: false
    }
    const { container } = render(<Pad {...padProps} />)
    expect(container).toMatchSnapshot()
  })
})
