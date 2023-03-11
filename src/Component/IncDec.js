 import React ,{useState }from "react";
 
function IncDec(){
    const[number,setnumber]=useState(0);

    const increment=()=>{
        setnumber(number +1);
        console.log(number);
    }
    const decrement=()=>{
        setnumber(number -1);
        console.log(number);
    }
    return(
        <div><p>by using functional component</p>
        <p>number is: {number}</p>
        <button type="button" onClick={increment}>buttonAdd</button><br></br>
        <button type="button" onClick={decrement}>buttonSub</button>
        </div>
    )
}
function ChildComponent(){
    return(
        <div>
            <h2>Child component!!!</h2>
        </div>
    )
}
export default IncDec;