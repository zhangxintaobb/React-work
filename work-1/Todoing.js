import React,{ Component } from 'react'
import PropTypes from 'prop-types';
export default class Todoing extends Component{
    constructor(props){
        super(props)
        this.state={
            arr:[],
            arr1:[]
        }
    }
   
    render(){
        return(
            <div>
                <div>
                    <h1>{this.props.value.split("-")}</h1>
                </div>
                <div>

                </div>

            </div>
        )
    }
} 
