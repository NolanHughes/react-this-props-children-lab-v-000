import React from 'react'

export default class Invitation extends React.Component {
  render() {
    return (
      <div>
        <h1>You&apos;ve been invited!</h1>
        {this.props.children}
      </div>
    )
  }
}
