import { render } from '@testing-library/react'
import { currencies } from 'utils/constants/constants'
import Result from '.'

describe('Result Test', () => {
  it('Result Component should render correctly', () => {
    const ResultProps = {
      amount: {
        value: '1',
        currency: currencies.USD
      },
      cop: 3800,
      ves: 4.5
    }
    const { container } = render(<Result {...ResultProps} />)
    expect(container).toMatchSnapshot()
  })
  it('Result Component with currency VES', () => {
    const ResultProps = {
      amount: {
        value: '1',
        currency: currencies.VES
      },
      cop: 3800,
      ves: 4.5
    }
    const { container } = render(<Result {...ResultProps} />)
    expect(container).toMatchSnapshot()
  })
  it('Result Component with currency COP', () => {
    const ResultProps = {
      amount: {
        value: '1',
        currency: currencies.COP
      },
      cop: 3800,
      ves: 4.5
    }
    const { container } = render(<Result {...ResultProps} />)
    expect(container).toMatchSnapshot()
  })
  it('Result Component unexpected currency', () => {
    const ResultProps = {
      amount: {
        value: '1',
        currency: 'error'
      },
      cop: 3800,
      ves: 4.5
    }
    const { container } = render(<Result {...ResultProps} />)
    expect(container).toMatchSnapshot()
  })
})
