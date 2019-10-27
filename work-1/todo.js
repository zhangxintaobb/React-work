import React, { Component } from 'react'
import TodoItem from './todoItem'
import './index.css'
export default class todo extends Component {
    render() {
        return (
            <div className="list">
                <h2 className="list-title">
                    {console.log(this.props.todo.list)}
                    {this.props.title}
                    <span className="title-numb">{this.props.todo.list.filter(item => {
                    return item.status === this.props.status
                }).length}</span>
                </h2>
                <div>
                {
                    this.props.todo.list.filter(item => {
                        return item.status === this.props.status
                    }).map(item => {
                        return <TodoItem item={item} checkboxCheck={this.props.todo.finish} key={item.id} clickDelete={this.props.todo.delete}/>
                    })
                }
            </div>
            </div>
        )
    }
}
