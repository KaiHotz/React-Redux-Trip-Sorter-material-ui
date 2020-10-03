import React, { Component } from 'react'

const WithErrors = WrappedComponent => class ErrorBoundary extends Component {
  state = {
    error: null,
    errorInfo: null,
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    })
  }

  render() {
    const { error, errorInfo } = this.state

    return (
      <>
        {
          error && (
            <>
              <h2>
                Something went wrong.
              </h2>
              <details style={{ whiteSpace: 'pre-wrap' }}>
                {error.toString()}
                <br />
                {errorInfo.componentStack}
              </details>
            </>
          )
        }
        <WrappedComponent {...this.props} />
      </>
    )
  }
}
export default WithErrors
