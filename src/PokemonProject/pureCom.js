import PropTypes from 'prop-types'
import React, { Component, PureComponent } from 'react'

export default class PureCom extends PureComponent {
    constructor(){
        super();
        this.state={
            count:1
        }
    }
//   static propTypes = {second: third}

  render() {
    console.log("check re render");
    return (
      <div><h1>pureCom{this.state.count}</h1>
      <button onClick={()=>this.setState({count :this.state.count+1})} >count</button>
      </div>
    )
  }
}
