import React, {useEffect} from "react";
function UseEffectDemo(){
    // case 1
    // useEffect(() => {
    //     console.log('hii')
    // })

    // case 2 exactly similar to componentDidMount
    // useEffect(()=>{
    //     console.log('hello')
    // },[])
     const[number,setNumber]=React.useState(0)
    //   case 3 exactly similar to componentDidMount and didUpdate
    useEffect(()=>{
        console.log('hiiii')
    },[number])
      
    const changeValue=()=>{
        setNumber(number+1)
    }


  

    return(
        <div>
            <h1>Use Effect Demo!!</h1>
              <p>Number is : {number}</p>
             <button type="button" onClick={changeValue}>Change</button>

            
        
        </div>
    )
            }


export default UseEffectDemo