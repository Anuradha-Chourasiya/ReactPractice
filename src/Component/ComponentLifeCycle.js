import React from "react";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
class ComponentLifeCycle extends React.Component{
    constructor(){
        super()
        this.state={
            number:0
        }
    }
    componentDidMount(){
        console.log('componentDidMount', this.state.number)
    }
    componentDidUpdate(){
        console.log('In component did update', this.state.number)
    }
    increment=()=>{
        this.setState({number:this.state.number+1})
    }
    toggleComponent=()=>{
        this.setState({number:this.state.number===0 ? 1:0})
    }
    render(){
        const component=this.state.number ? <ComponentOne/> : <ComponentTwo/>
        return(
            <div>
                <h1>Life Cycle Mehtods-{this.state.Id}</h1>
                <p>Life Cycle method implementation!!</p>
                <p>Number is: {this.state.number}</p>
                <button type="button" onClick={this.toggleComponent}>Toggle</button>
                {component}
            </div>
        )
    }
}
export default ComponentLifeCycle