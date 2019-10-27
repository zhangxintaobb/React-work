import React, { Component } from 'react'
import './index.css'

import List from './todo'
export default class content extends Component {
    render() {
        return (
            <div className="content">
                <List title="正在进行" todo={this.props.todo.todo} status="working"/>
            <List title="已经完成" todo={this.props.todo.todo} status="finished"/>
            </div>
        )
    }
}
