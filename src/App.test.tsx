import { render } from '@testing-library/react'
import App from './App'

describe('App Test', () => {
  it('App Component should render correctly', () => {
    const AppProps = {}
    const { container } = render(<App {...AppProps} />)
    expect(container).toMatchSnapshot()
  })
})
