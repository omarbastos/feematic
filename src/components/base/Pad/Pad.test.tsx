import { render } from '@testing-library/react'
import Pad from '.'

describe('Pad Test', () => {
  const padProps = {
    text: '1',
    className: '',
    isActive: false
  }
  const { container } = render(<Pad {...padProps} />)
  expect(container).toMatchSnapshot()
})
