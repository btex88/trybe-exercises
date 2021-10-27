import { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { h1: 'Conteúdos de Front-End', }
  }
  render() {
    return (
    <>
      <h1>{this.state.h1}</h1>
    </>
    )
  }
}
