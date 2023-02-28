import React,{useState} from "react";
class ClassIncDec extends React.Component{
    constructor(){
        super()
        this.state={
            number:0
        }
    }
    increment=()=>{
        this.setState({number:this.state.number+1})
    }
    decrement=()=>{
        this.setState({number:this.state.number-1})
    }
    render(){
        return(
            <div>
                <p>by using class component</p>
                <p>number is: {this.state.number}</p>
                <button type="button" onClick={this.increment}>add</button>
                <button type="button" onClick={this.decrement}>sub</button>
                </div>
        )
    };

}
export default ClassIncDec;