import React, { Component } from 'react'

export default class ClssRef extends Component {
    constructor(){
        super();
        this.inRef=React.createRef();

    }
    handleClick=()=>{
        this.inRef.current.focus();
    };
  render() {
    return (
      <>
      <h1>Learning Useref in  Functional Compo</h1>
        <input type="text" ref={this.inRef}/>
        <button onClick={this.handleClick}>Click me</button>
      </>
    )
  }
}
