import React, { Component } from 'react'

export default class todoItem extends Component {
    checkboxCheck = () => {
        this.props.item.status === 'working' && this.props.checkboxCheck(this.props.item.id)
    }
    clickDelete = () => {
        this.props.clickDelete(this.props.item.id)
    }

    render() {
        return (
            <div className={'ToDoItem' + (this.props.item.status === 'finished' ? ' ToDoItem-finish' : '')}>
            <input type="checkbox" onChange={this.checkboxCheck} checked={this.props.item.status === 'finished'} ></input>
            <p>{this.props.item.text}</p>
            <span onClick={this.clickDelete}>-</span> 
         </div>

        )
    }
}



// import React, { Component } from 'react'

// export default class todoItem extends Component {
//     constructor(props) {
//         super(props)
//         this.handleDelete = this.handleDelete.bind(this)
//       }
//       // 子组件如果想和父组件通信，子组件要调用父组件传递过来的方法
//       handleDelete() {
//         // console.log(this.props.index)
//         // this.props.delete(this.props.index) //代码优化
//         const {deleteItem, index} = this.props
//         deleteItem(index)
//       }
//       render() {
//         const {content} = this.props
//         return (<div onClick={this.handleDelete}>{content}</div>)
//       }
    
// }
