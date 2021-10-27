import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props){
      super(props);
      this.state = {
        h1: 'Isso é só o começo...'
      }
    }
  render() {
    return (
      <>
        <h1>{this.state.h1}</h1>
      </>
    )
  }
}
