// import React,{ Component } from 'react'
// import Todoinput from './Todoinput'
// import Todoing from './Todoing'
// export default class Todolist extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             Value:"",
//             todo:[]
//         }
//     }
//     addItem=()=>{
//         this.setState({
//             todo:[...this.state.todo,data]
//         },()=>{
//             localStorage.setItem('',JSON.stringify(this.state.todo))
//         })
//     }
//     // delItem=(idx)=>{
//     //     this.setState((state,props)=>{
//     //         console.log(this.state,todo);
//     //         return{
//     //             todo:state.todo.filter((item,index)=>idx!==index)
//     //         }
//     //     })
//     // }
//     getvalue=(result,msg)=>{
//             this.setState({
//                      Value: this.state.Value+msg+"-"
//                  },()=>{
//                      console.log(this.state.Value)
//                  })
//          console.log(this.state.Value)
//     }
//     render(){
//         return(
//             <div>
//                 <Todoinput Todolist={this} add={this.addItem} /> 
//                 <Todoing value={this.state.Value} />
//             </div>
//         )
//     }
// }





















import React, { Component } from 'react'
import TodoItem from './todoItem'
export default class Todolist extends Component {
    constructor(props) {
        super(props)
        this.state = {
          list: [],
          inputValue: ''
        }
    
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
      }
    
      handleInputChange(e) {
        this.setState({
          inputValue: e.target.value
        })
      }
    
      handleBtnClick() {
        this.setState({
          list: [...this.state.list, this.state.inputValue],
          inputValue: ''
        })
      }
    
      handleItemClick(index) {
        console.log(index)
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
          list
        })
      }
    
      // 父组件通过属性的形式向子组件传递参数
      // 子组件通过props接收父组件传递过来的参数
      handleDelete(index) {
        console.log(index)
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({
          list
        })
      }
    
      getTodoItem() {
        return this.state.list.map((item, index) => {
          return (
            <TodoItem
              deleteItem={this.handleDelete}
              key={index}
              content={item}
              index={index}
            />
          )
        })
      }
      render() {
        return (
          <div>
            <input
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
            <button onClick={this.handleBtnClick}>add</button>
            <ul>{this.getTodoItem()}</ul>
          </div>
        )
      }
}


