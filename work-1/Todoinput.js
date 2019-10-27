import React, { Component } from 'react'
import { Form } from 'antd';

export default class Todoinput extends Component {
    constructor(props){
        super(props)
        this.state={
            Value : ""
        }
    }
      handleGetInputValue = (event) => {
        this.setState({
          InputValue : event.target.value,
        })
      };
     
      handlePost = () => {
        const {InputValue} = this.state;
        // console.log(InputValue,'------InputValue');
        //在此做提交操作，比如发dispatch等
        console.log(this.props);
        this.props.Todolist.getvalue(this,InputValue)
      };
     
      render(){
        return(
          <div>
            <input
              value={this.state.InputValue}
              onChange={this.handleGetInputValue}
            />
            <button onClick={this.handlePost }>提交</button>
          </div>
        )
      }
}
