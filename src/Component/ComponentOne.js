import React from "react";
class ComponentOne extends React.Component{
    componentWillUnmount(){
        console.log('Component One Unmounting!!')
    }
    render(){
        return(
            <div>
                <h2>Component One</h2>
                <p>This is ComponentOne!!</p>
            </div>
        )
    }
}
export default ComponentOne