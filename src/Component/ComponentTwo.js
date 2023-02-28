import React from "react";
class ComponentTwo extends React.Component{
    componentWillUnmount(){
        console.log('Component Two Unmounting!!')
    }
    render(){
        return(
            <div>
                <h2>Component Two</h2>
                <p>This is ComponentTwo!!</p>
            </div>
        )
    }
}
export default ComponentTwo