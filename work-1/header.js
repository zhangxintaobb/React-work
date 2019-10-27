import React, { Component } from 'react'
import './index.css'
import Search from './search'
export default class header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-content">
                    <div className="header-title">ToDoList</div>
                    <Search enterPress={this.props.add.add} />
                </div>
            </div>
        )
    }
}
