import React, { Component } from 'react'
import './index.css'

export default class search extends Component {
    enterPress = (event)=>{
        if(event.key==='Enter'){
            this.props.enterPress(event.target.value)
            event.target.value=''
        }
    }
    render() {
        return (
            <input type="text" onKeyPress={this.enterPress} className="search"  placeholder="添加" required="required" autoComplete="off"></input>
        
            
        )
    }
}


